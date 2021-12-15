async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    setTimeout(() => {
        activeLink();

    }, 100);

    loadBackground();

    showTasks();
}

function showTasks() {
    document.getElementById('tasks').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];
        let urgency = allTasks[i]['taskUrgency'];

        document.getElementById('tasks').innerHTML += `
        
        <div class="row-backlog">
        <div class="column left d-flex">
        <div class="${urgency}">${urgency}</div>
        </div>
        <div class="column middle d-flex">
        <div class="img-profile"><img src ="${Task['creatorImg']}"></div>
        <span>${Task['taskCreator']}</span>
        </div>
        <div class="column middle">${Task['taskCategory']}</div>
        <div class="column right">${Task['taskDescription']}</div>
        <div><img src=./img/trash.png class="delete" onclick="addToTrash(${i})"></div>
        </div>`;
    }
}

async function addToTrash(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    showTasks();
}