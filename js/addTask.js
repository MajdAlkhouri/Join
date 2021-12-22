function addDnone() {
    document.getElementById('createtTaskInfo').classList.add('d-none');
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