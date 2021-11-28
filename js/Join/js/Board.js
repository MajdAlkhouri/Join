setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

let todos = [];

async function init() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('allTasks')) || [];
}



setTimeout(function showTodos() {
    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        document.getElementById('toDo').innerHTML += `<li>${todos[i].taskDescription}
         </li>`;
    }
}, 300);

