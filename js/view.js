import { removeTodoList } from "./model.js";
import { displayTodolist } from "./controller.js";
const todolist = ["JavaScript", "Vue.js", "React.js"];

export function tambahTodo(index, todo) {
  const table = document.getElementById("badanTodolist");
  const tr = document.createElement("ul");
  table.append(tr);
  const tdTodo = document.createElement("li");
  tdTodo.textContent = todo;

  const td = document.createElement("li");
  const buttonMelakukan = document.createElement("input");
  buttonMelakukan.type = "button";
  buttonMelakukan.value = "Hilang";
  buttonMelakukan.onclick = function () {
    removeTodoList(index);
  };
  td.append(buttonMelakukan);

  tr.append(td, tdTodo);

  // const bandan = document.getElementById("badanTodolist");
  // bandan.appendChild(tr);
}

displayTodolist();
