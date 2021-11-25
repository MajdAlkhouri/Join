setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

let backgrounds = ['./ img / background_images / beach blue.jpg', './img/background_images/beach_green.jpg', './img/background_images/bridge.jpg', './img/background_images/Erde.jpg', './img/background_images/monumental_rocks.jpg'];
let currentBg = '';

function changeBg(i) {



    document.getElementById('bg').style.backgroundImage = `url(${backgrounds[i]})`;

    saveBackground(i);
}



async function loadBackground(backgrounds) {
    await downloadFromServer();
    currentBg = backend.getItem('background') || backgrounds[0];
    document.getElementById('bg').style.backgroundImage = `url(${currentBg})`;

}
async function saveBackground(index) {

    await backend.setItem('background', backgrounds[index]);

}