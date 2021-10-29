
let allTasks = [];


function addTask() {
let taskTitle = document.getElementById('titleInputfield').value;
let taskCategory = document.getElementById('selectCategory').value;
let taskDate = document.getElementById('dateInputfield').value;
let taskUrgency = document.getElementById('selectUrgency').value;
let taskDescription = document.getElementById('descriptionInputfield').value;
let taskCreator = document.getElementById('taskCreator').value;

let task = {
    'taskTitle': taskTitle, 
    'taskCategory': taskCategory, 
    'taskDate': taskDate, 
    'taskUrgency': taskUrgency, 
    'taskDescription': taskDescription, 
    'taskCreator': taskCreator, 
    'createdAt': new Date().getTime()
};

allTasks.push(task);

let allTasksAsString = JSON.stringify(allTasks); 
localStorage.setItem('allTasks', allTasksAsString);

}