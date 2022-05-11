async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    loadBackground(backgrounds);
    setTimeout(() => {
        activeLink();

    }, 50)

}



function addDnone() {
    document.getElementById('createtTaskInfo').classList.add('hide');
}

function changeCreatorImage() {
    let creator = document.getElementById('taskCreator').value;
    let creatorImg = document.getElementById('creatorImg');
    if (creator == 'majd') {
        creatorImg.src = './img/Majd.jpeg';
    }
    if (creator == 'toma') {
        creatorImg.src = './img/Toma.jpeg';
    }
    if (creator == 'peter') {
        creatorImg.src = './img/Peter.jpg';
    }
}