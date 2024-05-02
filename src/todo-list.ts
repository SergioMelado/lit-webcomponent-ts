import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('todo-list')
export class TodoList extends LitElement {

    todoListDefault = ["Hola", "Adios", "Jaja"];

    static override styles = css`
    :host {
      display: block;
      border: solid 1px black;
      padding: 16px;
      margin: 0 auto;
      width: 900px;
    }

    ul > li {
      padding: 5px;
    }
  `;

    /**
     * El titulo a poner en la lista por default
     */
    @property()
    titulo = 'TO-DO List';
    
    override render() {
        return html`
        <h1>${this.putTitle(this.titulo)}</h1>
        <button @click=${this.onClickCreate} part="button">
            CREATE
        </button>
        <ul>
            ${this.todoListDefault.map((value, index) => html `<li>${value} <button @click=${() => this.removeTask(index)} part="button">Remove</button></li>`)}
        </ul>
        <br>
        <button @click=${this._modifyTask} part="button">
            Click here to modify a Task
        </button>
        `
    }

    onClickCreate() {
        this.dispatchEvent(new CustomEvent('create'));
    }

    addTask(task:string) {
    
        this.todoListDefault.push(task);
        this.requestUpdate();

    }

    private _modifyTask() {

    }

    removeTask(index:number) {
        this.todoListDefault.splice(index, 1);
        this.requestUpdate();

    }

    /**
     * @param titulo El titulo de la TO-DO List
     */
    putTitle(titulo: string): string {
        return `${titulo}`;
    }

}

declare global {
    interface HTMLElementTagNameMap {
      'todo-list': TodoList;
    }
}