 setURL('http://developerakademie.com/smallest_backend_ever');


 let allTasks = [{
         'taskTitle': 'Css überarbeiten',
         'taskCategory': 'Development',
         'taskUrgency': 'Niedrig',
         'taskDescription': 'Diverse Änderungen vorehmen',
         'taskCreator': 'Majd',
         'createdAt': '1635729160974'
     },
     {
         'taskTitle': 'Datenbank implementieren',
         'taskCategory': 'Development',
         'taskUrgency': 'Hoch',
         'taskDescription': 'Fehler beheben',
         'taskCreator': 'Peter',
         'createdAt': '1635729335667'
     },
     {
         'taskTitle': 'Projekt neu strukturieren',
         'taskCategory': 'Management',
         'taskUrgency': 'Normal',
         'taskDescription': 'lorem ipsum rv adfvasdgvdy y dg adsrg adfg asdfgadg ad dgadrgadrgasd  asdrfgasdfgdfg sa dg sdfgsd f gsdgsdfg g sdf gh sdfghsf sdfg sdrfgsdg  adfg sdfg sfdgh sfdb',
         'taskCreator': 'Toma',
         'createdAt': '1635729654321'
     }
 ];

 async function init() {
     await downloadFromServer();
     allTasks = JSON.parse(backend.getItem('allTasks')) || [];
 }

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
     backend.setItem('allTasks', allTasksAsString);

     console.log(allTasks);
 }