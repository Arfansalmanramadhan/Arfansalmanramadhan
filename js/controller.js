import { todolist, clearTodolist } from "./model.js";
import { tambahTodo } from "./view.js";
export function displayTodolist() {
  clearTodolist();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const carii = document.getElementById("cari").value.toLowerCase();

    if (todo.toLowerCase().includes(carii)) {
      tambahTodo(i, todo);
    }
  }
}
