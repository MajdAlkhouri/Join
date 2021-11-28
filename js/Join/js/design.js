setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

let backgrounds = ['./ img / background_images / beach blue.jpg', './img/background_images/beach_green.jpg', './img/background_images/bridge.jpg', './img/background_images/Erde.jpg', './img/background_images/monumental_rocks.jpg']


function changeBg(i) {
    for (let i = 0; i < backgrounds.length; i++) {
        document.getElementById('bg').style.backgroundImage = '';

    }
    document.getElementById('bg').style.backgroundImage = `url(${backgrounds[i]})`;

    saveBackground();
}



async function loadBackground(backgrounds) {
    await downloadFromServer();
    backgrounds = JSON.parse(backend.getItem('background')) || [];


}
async function saveBackground() {
    let BackgroundAsString = JSON.stringify(backgrounds);
    await backend.setItem('background', BackgroundAsString);
}