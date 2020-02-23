// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// Stores the form HTML element
const form = document.getElementById('create-task-form');

//Stores the HTML <ul> tag. Items created would be displayed as <li>
let tasks = document.getElementById('tasks') 

// Stores 
let newToDo = document.getElementById('new-task-description');

form.addEventListener('submit', function(event) {
  
   event.preventDefault();
   
   let toDo = newToDo.value;
   
   let toDoItem = document.createElement('li');
   
   let toDoItemText = document.createTextNode(toDo);
   
   toDoItem.appendChild(toDoItemText);
   
   tasks.appendChild(toDoItem);
   
   newToDo.value = "";
   
});
