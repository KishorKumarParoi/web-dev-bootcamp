let newTask = document.getElementById("new-task");
let items = document.getElementById("items");
let completeItems = document.getElementById("completed-items");
let submit = document.getElementById("submit");
let demo = document.getElementById("demo");

// console.log(newTask);
// console.log(items);
// console.log(completeItems);

// console.log("hello world");

// Add a new task
let addNewTask = function () {
    // event.preventDefault();
    let newTaskValue = newTask.value;
    createNewTask(newTaskValue);
    // demo.innerHTML = newTaskValue;
};

let createNewTask = function (task) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    checkBox.type = "checkbox";
    label.innerText = task;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    items.appendChild(listItem);
};
