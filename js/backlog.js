function showTasks() {
    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];

        document.getElementById('tasks').innerHTML += `<div class="backlog-box">
        <div style="width:25%">${Task['taskCreator']}</div><div style="width:10%">${Task['taskCategory']}</div><div style="width:40%">${Task['taskDescription']}</div>
        </div>`;
    }
}