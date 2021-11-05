function showTasks() {
    document.getElementById('tasks').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];
        let urgency = allTasks[i]['taskUrgency'];

        document.getElementById('tasks').innerHTML += `<div class="backlog-box">
        <div class="${urgency}" onclick="showUrgency()"></div>
        <div style="width:25%">${Task['taskCreator']}</div>
        <div style="width:10%">${Task['taskCategory']}</div>
        <div class="description">${Task['taskDescription']}></div>
        <button class="delete" onclick="addToTrash(${i})">X</button>
        </div>`;
    }
}

function addToTrash(position) {
    allTasks.splice([position], 1);

    showTasks();
}