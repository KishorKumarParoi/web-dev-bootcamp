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
  newTask.value = "";

  // bind the incomplete list to checkbox
  bindInItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  listItem.className = "del-item";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.innerText = "Delete";
  listItem.appendChild(deleteBtn);

  // checkbox to be removed
  let checkBox = listItem.querySelector(`input[type='checkbox']`);
  checkBox.remove();
  // listItem.removeChild(checkBox);

  completeItems.append(listItem);

  // bind complete items
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listitem = this.parentNode;
  let ul = listitem.parentNode;

  ul.removeChild(listitem);
};

let bindInItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".btn-delete");
  deleteButton.onclick = deleteButtonClick;
};

form.addEventListener("submit", addNewTask);

for (let i = 0; i < items.children.length; i++) {
  bindInItems(items.children[i], completeTask);
}

for (let i = 0; i < completeItems.children.length; i++) {
  bindCompleteItems(completeItems.children[i], deleteTask);
}
