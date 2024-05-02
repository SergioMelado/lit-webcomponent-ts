var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let TodoList = class TodoList extends LitElement {
    constructor() {
        super(...arguments);
        this.todoListDefault = ['DatosTest1', 'DatosTest2', 'DatosTest3', 'DatosTest4'];
        /**
         * El titulo a poner en la lista por default
         */
        this.titulo = 'TO-DO List';
    }
    render() {
        return html `
        <h1>${this.putTitle(this.titulo)}</h1>
        <button @click=${this.onClickCreate} part="button">CREATE</button>
        <slot></slot>
        <ul>
            ${this.todoListDefault.map((value, index) => html `<li>${value} <button @click=${() => this.removeTask(index)} part="button">Remove</button></li>`)}
        </ul>
        <slot></slot>
        `;
    }
    onClickCreate() {
        this.dispatchEvent(new CustomEvent('create'));
    }
    addTask(task) {
        this.todoListDefault.push(task);
        this.requestUpdate();
    }
    removeTask(index) {
        this.todoListDefault.splice(index, 1);
        this.requestUpdate();
    }
    /**
     * @param titulo El titulo de la TO-DO List
     */
    putTitle(titulo) {
        return `${titulo}`;
    }
};
TodoList.styles = css `
    :host {
      display: block;
      padding: 16px;
      margin: 0 auto;
      width: 900px;
    }

    ul > li {
      padding: 5px;
    }
  `;
__decorate([
    property()
], TodoList.prototype, "titulo", void 0);
TodoList = __decorate([
    customElement('todo-list')
], TodoList);
export { TodoList };
//# sourceMappingURL=todo-list.js.map