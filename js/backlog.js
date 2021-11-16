function showTasks() {
    document.getElementById('tasks').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];
        let urgency = allTasks[i]['taskUrgency'];

        document.getElementById('tasks').innerHTML += `<div class="backlog-box">
        <div class="${urgency}">${urgency}</div><div><img src="./img/Peter.jpg" class="img-profile"></div>
        <div>${Task['taskCreator']}</div>
        <div>${Task['taskCategory']}</div>
        <div class="description" style="width:29%">${Task['taskDescription']}</div>
        <button class="delete" onclick="addToTrash(${i})">X</button>
        </div>`;
    }
}

function addToTrash(position) {
    allTasks.splice([position], 1);

    showTasks();
}