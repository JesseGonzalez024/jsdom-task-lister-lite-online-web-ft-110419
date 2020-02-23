// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// Stores the form HTML element
const form = document.getElementById('create-task-form');

//Stores the HTML <ul> tag. Items created would be displayed as <li>
let tasks = document.getElementById('tasks') 

// Stores the HTML text field element
let newToDo = document.getElementById('new-task-description');

//While invoking the previously saved form variables, and eventListner is added under the sub element or id of 'submit'
form.addEventListener('submit', function(event) {
  
   event.preventDefault();
   
   let toDo = newToDo.value;
   
   let toDoItem = document.createElement('li');
   
   let toDoItemText = document.createTextNode(toDo);
   
   toDoItem.appendChild(toDoItemText);
   
   tasks.appendChild(toDoItem);
   
   newToDo.value = "";
   
});
