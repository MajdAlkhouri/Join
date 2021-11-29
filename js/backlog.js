async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    loadBackground(backgrounds);
    showTasks();
}

function showTasks() {
    document.getElementById('tasks').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];
        let urgency = allTasks[i]['taskUrgency'];

        document.getElementById('tasks').innerHTML += `
        <div class="backlog-box">
        <div class="${urgency}">${urgency}</div>
        <div><img src="./img/Peter.jpg" class="img-profile"></div>
        <span>${Task['taskCreator']}</span>
        <div>${Task['taskCategory']}</div>
        <div class="description" style="width:29%">${Task['taskDescription']}</div>
        <img src=./img/trash.png class="delete" onclick="addToTrash(${i})">
        </div>`;
    }
}

async function addToTrash(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    showTasks();
}