import { displayTodolist } from "./controller.js";
export const todolist = ["JavaScript", "Vue.js", "React.js"];
export function clearTodolist() {
  const bandan = document.getElementById("badanTodolist");
  while (bandan.firstChild) {
    bandan.removeChild(bandan.firstChild);
  }
}
export function removeTodoList(index) {
  todolist.splice(index, 1);
  displayTodolist();
}
const from = document.forms["from1"];
from.addEventListener("submit", (e) => {
  e.preventDefault();

  //   const todo = document.forms["from1"]["todo"];
  const todo = document.getElementById("todo").value;
  todolist.push(todo);
  from.reset();
  console.log(todolist);
  displayTodolist();
});

const cariinput = document.getElementById("cari");
cariinput.addEventListener("keyup", () => {
  displayTodolist();
});
cariinput.addEventListener("keyupdown", () => {
  displayTodolist();
});
