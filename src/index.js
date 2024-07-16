let new_task = document.querySelector("#new-task");
let form = document.querySelector("form");
let addTaskBtn = document.querySelector("#addTaskBtn");
let toDoUl = document.querySelector("#items");
let completeUl = document.querySelector(".conplete-list ul");
let deleteBtn = document.querySelector(".deleteBtn");

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

const deleteTask = (e) => {
  let listItem = e.target.parentElement;
  toDoUl.removeChild(listItem);
};

// const updateTask = (e) => {
//     let listItem = e.target.parentElement;
//     let label = listItem.querySelector("label");
//     let currentTask = label.innerText;

//     let inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.value = currentTask;

//     let saveBtn = document.createElement("button");
//     saveBtn.innerText = "Save";
//     saveBtn.setAttribute("class", "saveBtn");

//     listItem.replaceChild(inputField, label);
//     listItem.replaceChild(saveBtn, e.target);

//     saveBtn.addEventListener("click", () => {
//         let updatedTask = inputField.value;
//         if (updatedTask.trim() !== "") {
//             label.innerText = updatedTask;
//             listItem.replaceChild(label, inputField);
//             listItem.replaceChild(e.target, saveBtn);
//         }
//     });
// };

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
form.addEventListener("submit", addTask);
