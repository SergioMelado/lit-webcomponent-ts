import { LitElement } from "lit";
export declare class TodoList extends LitElement {
    todoListDefault: string[];
    static styles: import("lit").CSSResult;
    /**
     * El titulo a poner en la lista por default
     */
    titulo: string;
    render(): import("lit-html").TemplateResult<1>;
    onClickCreate(): void;
    addTask(task: string): void;
    private _modifyTask;
    removeTask(index: number): void;
    /**
     * @param titulo El titulo de la TO-DO List
     */
    putTitle(titulo: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-list': TodoList;
    }
}
//# sourceMappingURL=todo-list.d.ts.map