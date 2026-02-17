let list = document.getElementById("list");

window.onload = function () {
  showTasks();
};

function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "X";

    btn.onclick = function () {
      deleteTask(index);
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("input");
  let text = input.value.trim();

  if (text === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.includes(text)) {
    alert("Task already exists!");
    return;
  }

  tasks.push(text);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";

  showTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  showTasks();
}
