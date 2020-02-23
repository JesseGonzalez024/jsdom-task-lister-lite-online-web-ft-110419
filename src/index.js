// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// Stores the form HTML element
const form = document.getElementById('create-task-form');

//Stores the HTML <ul> tag. Items created would be displayed as <li>
let tasks = document.getElementById('tasks') 

// Stores the HTML text field element
let newToDo = document.getElementById('new-task-description');

//While invoking the previously saved form variables, and eventListner is added under the sub element or id of 'submit', this "event" is saved as the function(event) argument.
form.addEventListener('submit', function(event) {
  
  //The .preventDefault() method in invoked on the 'submit' event 
   event.preventDefault();
   
   //A new variable is created as the text or 'value' of the previously saved newToDo variable. This newly created variable is to be the text inputted by the user.
   let toDo = newToDo.value;
   
   //Creates a new variable as the HTML element<li>
   let toDoItem = document.createElement('li');
   
   let toDoItemText = document.createTextNode(toDo);
   
   toDoItem.appendChild(toDoItemText);
   
   tasks.appendChild(toDoItem);
   
   newToDo.value = "";
   
});
