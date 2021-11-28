 setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');


 let allTasks = [];
 
 
 async function init() {
     await downloadFromServer();
     allTasks = JSON.parse(backend.getItem('allTasks')) || [];
 }

 async function addTask() {
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

     document.getElementById('createtTaskInfo').classList.remove('d-none');

     let allTasksAsString = JSON.stringify(allTasks);
     await backend.setItem('allTasks', allTasksAsString);
 }



 function addDnone() {
     document.getElementById('createtTaskInfo').classList.add('d-none');
 }

 function changeCreatorImage() {
     let creator = document.getElementById('taskCreator').value;
     let creatorImg = document.getElementById('creatorImg');
     if(creator == majd) {
         creatorImg.src = './img/social_icons/facebook-64.ico';
     }
     if(creator == toma) {
        creatorImg.src = './img/social_icons/facebook-64.ico';
    }
    if(creator == peter) {
        creatorImg.src = './img/Peter.jpg';
    }



 }