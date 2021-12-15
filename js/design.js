let backgrounds = ['./img/background_images/beach_blue.jpg', './img/background_images/beach_green.jpg',
    './img/background_images/bridge.jpg', './img/background_images/Erde.jpg', './img/background_images/monumental_rocks.jpg', './img/background_images/desert.jpg', './img/background_images/mountains.jpg', './img/background_images/mountains_2.jpg', './img/background_images/turtle.jpg', './img/background_images/zebras.jpg', './img/background_images/dogs.jpg', './img/background_images/office.jpg', './img/background_images/city.jpg', './img/background_images/car.jpg', './img/background_images/car_2.jpg', './img/background_images/ambrellas.jpg', './img/background_images/bear_colors.jpg', './img/background_images/colors.jpg', './img/background_images/stripes.jpg'
];
let currentBg = '';





function showSmallPictures() {
    for (let i = 0; i < backgrounds.length; i++) {

        document.getElementById('small-pictures').innerHTML += `<img src="${backgrounds[i]}" class="small-picture" id="currentpic${i}" onclick="changeBg(${i})">`
    }


}

/*function activePicture(j) {


    document.getElementById('currentpic' + j).classList.add('active-picture');

}*/

function changeBg(j) {

    let pos = backgrounds.indexOf(currentBg);

    document.getElementById('currentpic' + pos).classList.remove('active-picture');

    document.getElementById('bg').style.backgroundImage = '';

    document.getElementById('bg').style.backgroundImage = `url(${backgrounds[j]})`;


    saveBackground(j);
}

async function loadBackground() {
    await downloadFromServer();
    currentBg = backend.getItem('background') || backgrounds[0];
    let pos = backgrounds.indexOf(currentBg);
    document.getElementById('currentpic' + pos).classList.add('active-picture');
    document.getElementById('bg').style.backgroundImage = `url(${currentBg})`;

}
async function saveBackground(index) {

    await backend.setItem('background', backgrounds[index]);

    loadBackground();

}