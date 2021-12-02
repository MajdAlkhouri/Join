setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

let todos = [];

let currentDraggedElement;


async function init() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('allTasks')) || [];
    updateHtml();

    includeHTML();

}

function updateHtml() { 

    let todo = todos.filter(t => !t['list'] || t['list'] == 'toDo'); //!!

    document.getElementById('toDo').innerHTML = '';

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('toDo').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">${todo[index].taskDescription}

        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'toDo')">

        </div>`;
    }


    let inProgress = todos.filter(t => t['list'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">${inProgress[index].taskDescription}

        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'inProgress')">

        </div>`;
    }


    let testing = todos.filter(t => t['list'] == 'Testing');

    document.getElementById('Testing').innerHTML = '';

    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('Testing').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">${testing[index].taskDescription}

        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'Testing')">

        </div>`;
    }


    let done = todos.filter(t => t['list'] == 'Done');

    document.getElementById('Done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('Done').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">${done[index].taskDescription}

        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'Done')">

        </div>`;
    }

}



function startDragging(createdAt) {
    currentDraggedElement = createdAt; //!!
}

function allowDrop(ev) { //!!!
    ev.preventDefault();
}

async function moveto(list) {
    const task = todos.find(t => t.createdAt === currentDraggedElement);
    task.list = list;
    await backend.setItem('allTasks', JSON.stringify(todos));
    updateHtml();

}

 async function ToTrash(position,list) {
     let toDolist = todos.filter( t=> t['list'] === list);

     let toDelete = toDolist[position];
     let posToDelete = todos.indexOf(toDelete);
    todos.splice(posToDelete, 1);
    let allTasksAsString = JSON.stringify(todos);
    await backend.setItem('allTasks',allTasksAsString);

    updateHtml();

}