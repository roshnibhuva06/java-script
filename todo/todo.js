const input = document.getElementById("input");  
const button = document.getElementById("btn"); 
const list = document.querySelector(".container .list"); 
let todos = JSON.parse(localStorage.getItem("todos")) || []; 
let isedit = false;
let editIndex = 0;

function readTask() {
  list.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const p = document.createElement("p");
    p.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn";
    deleteBtn.id = "deleteId";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index); 

    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    editBtn.id = "editId";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => updateTask(index); 

    const div = document.createElement("div");
    div.className = "row";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    list.appendChild(div); 
  });
}
function addTask() {
  const value = input.value.trim();
  if (value === "") return; 
  todos.push(value); 
  localStorage.setItem("todos", JSON.stringify(todos)); 
  input.value = ""; 
  readTask(); 
}

function deleteTask(index) {
  todos.splice(index, 1); 
  localStorage.setItem("todos", JSON.stringify(todos)); 
  readTask(); 
}

function updateTask(index) {
  input.value = todos[index]; 
  isedit = true;
  editIndex = index;
}

button.addEventListener("click", function () {
  if (isedit) {
    todos[editIndex] = input.value.trim(); 
    isedit = false;
  } else {
    addTask(); 
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  readTask(); 
});

readTask();