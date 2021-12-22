import { removeTodoList } from "./model.js";
import { displayTodolist } from "./controller.js";

export function tambahTodo(index, todo) {
  const table = document.getElementById("badanTodolist"); // memaggi elemen id
  const tr = document.createElement("ul"); // membuat elemen
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
  td.append(buttonMelakukan); // menambahkan elemen

  tr.append(td, tdTodo);


}

displayTodolist();
