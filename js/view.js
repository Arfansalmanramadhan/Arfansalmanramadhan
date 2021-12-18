const todolist = ["JavaScript", "Vue.js", "React.js"];

function clearTodolist() {
  const bandan = document.getElementById("badanTodolist");
  while (bandan.firstChild) {
    bandan.removeChild(bandan.firstChild);
  }
}
function removeTodoList(index) {
  todolist.splice(index, 1);
  displayTodolist();
}

function tambahTodo(index, todo) {
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

function displayTodolist() {
  clearTodolist();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const carii = document.getElementById("cari").value.toLowerCase();

    if (todo.toLowerCase().includes(carii)) {
      tambahTodo(i, todo);
    }
  }
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
displayTodolist();
