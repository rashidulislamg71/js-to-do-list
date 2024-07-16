let new_task = document.querySelector("#new-task");
let form = document.querySelector("form");
let addTaskBtn = document.querySelector("#addTaskBtn");
let toDoUl = document.querySelector("#items");
let completeUl = document.querySelector("#CompletedUl");

// // function
const createElement = (task) => {
  let listItme = document.createElement("li");
  listItme.setAttribute("class", "item");

  let checkLi = document.createElement("div");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  let updateBtn = document.createElement("button");
  updateBtn.setAttribute("class", "updateBtn");

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");

  checkBox.type = "checkbox";
  label.innerText = task;
  updateBtn.innerText = "Update";
  deleteBtn.innerText = "Delete";

  checkLi.appendChild(checkBox);
  checkLi.appendChild(label);
  listItme.appendChild(checkLi);
  listItme.appendChild(updateBtn);
  listItme.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteTask);
  updateBtn.addEventListener("click", updateTask);

  checkBox.addEventListener("change", compliteTask);

  return listItme;
};

const addTask = (e) => {
  e.preventDefault();
  if (new_task.value.trim() !== "") {
    let listItem = createElement(new_task.value);
    toDoUl.appendChild(listItem);

    new_task.value = "";
  }
};

// Delete Task
const deleteTask = (e) => {
  let listItem = e.target.parentElement;
  if (listItem.parentElement === toDoUl) {
    toDoUl.removeChild(listItem);
  } else if (listItem.parentElement === completeUl) {
    completeUl.removeChild(listItem);
  }
};


// Upadate task
const updateTask = (e) => {
  let listItem = e.target.parentElement;
  let label = listItem.querySelector("label");
  let currentTask = label.innerText;

  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = currentTask;

  let saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.setAttribute("class", "updateBtn saveBtn");

  listItem.querySelector("div").replaceChild(inputField, label);
  listItem.replaceChild(saveBtn, e.target);

  saveBtn.addEventListener("click", () => {
    let updatedTask = inputField.value;
    if (updatedTask.trim() !== "") {
      label.innerText = updatedTask;
      listItem.querySelector("div").replaceChild(label, inputField);
      listItem.replaceChild(e.target, saveBtn);
    }
  });
};

// Conplite Task
const compliteTask = (e) => {
  let listItem = e.target.parentElement.parentElement;
  if (e.target.checked) {
    completeUl.appendChild(listItem);
  } else {
    toDoUl.appendChild(listItem);
  }
};

form.addEventListener("submit", addTask);
