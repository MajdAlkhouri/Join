/*let activePicture = document.getElementsByClassName('small-pictures');

for (let j = 0; j < activePicture.length; j++) {
    activePicture[j].addEventListener("click", function() {
        let currentPicture = document.getElementsByClassName("active-picture");

        // If there's no active class
        if (currentPicture.length > 0) {
            currentPicture[0].className = currentPicture[0].className.replace("active-picture", "");
        }

        // Add the active class to the current/clicked button
        this.className += "active-picture";
    })
};*/

function activeLinkBoard() {
    document.getElementById('board').classList.add('active');
    document.getElementById('backlog').classList.add('active');
    document.getElementById('addTask').classList.add('active');
    document.getElementById('help').classList.add('active');
    document.getElementById('design').classList.remove('active');


}

function activeLinkBacklog() {
    document.getElementById('backlog').classList.add('active');
    document.getElementById('board').classList.remove('active');
    document.getElementById('addTask').classList.remove('active');
    document.getElementById('help').classList.remove('active');
    document.getElementById('design').classList.remove('active');

}

function activeLinkaddTask() {
    document.getElementById('addTask').classList.add('active');
    document.getElementById('board').classList.remove('active');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('help').classList.remove('active');
    document.getElementById('design').classList.remove('active');
}

function activeLinkHelp() {
    document.getElementById('help').classList.add('active');
    document.getElementById('addTask').classList.remove('active');
    document.getElementById('board').classList.remove('active');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('design').classList.remove('active');
}

function activeLinkDesign() {
    document.getElementById('design').classList.add('active');
    document.getElementById('addTask').classList.remove('active');
    document.getElementById('board').classList.remove('active');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('help').classList.remove('active');
}