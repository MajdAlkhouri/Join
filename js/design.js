let backgrounds = ['./img/background_images/beach blue.jpg', './img/background_images/beach_green.jpg', './img/background_images/bridge.jpg', './img/background_images/Erde.jpg', './img/background_images/monumental_rocks.jpg'];
let currentBg = '';



function showSmallPictures() {
    for (let i = 0; i < backgrounds.length; i++) {

        document.getElementById('small-pictures').innerHTML += `<img src="${backgrounds[i]}" class="small-picture" id="currentpic${i}" onclick="changeBg(${i})">`
    }


}

function activePicture(j) {
    document.getElementById('currentpic' + j).classList.add('active-picture');

}

function changeBg(j) {
    let pos = backgrounds.indexOf(currentBg);

    document.getElementById('currentpic' + pos).classList.remove('active-picture');

    document.getElementById('bg').style.backgroundImage = '';

    document.getElementById('bg').style.backgroundImage = `url(${backgrounds[j]})`;

    activePicture(j);
    saveBackground(j);
}



async function loadBackground() {
    await downloadFromServer();
    currentBg = backend.getItem('background') || backgrounds[0];
    let pos = backgrounds.indexOf(currentBg);
    activePicture(pos);
    document.getElementById('bg').style.backgroundImage = `url(${currentBg})`;

}
async function saveBackground(index) {

    await backend.setItem('background', backgrounds[index]);



}