let newTask = document.getElementById("new-task");
let items = document.getElementById("items");
let completeItems = document.getElementById("completed-items");
let submit = document.getElementById("submit");
let demo = document.getElementById("demo");

let createNewTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  checkBox.type = "checkbox";
  label.innerText = task;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

// Add a new task
let addNewTask = function (event) {
  event.preventDefault();
  let listItem = createNewTask(newTask.value);
  items.appendChild(listItem);
};
