/*let activePicture = document.getElementsByClassName('small-picture');

for (let j = 0; j < activePicture.length; j++) {
    activePicture[j].addEventListener("click", function() {
        let currentPicture = document.getElementsByClassName("active");

        // If there's no active class
        if (currentPicture.length > 0) {
            currentPicture[0].className = currentPicture[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += "active";
    });
}*/
function activeLinkBoard() {
    document.getElementById('board').classList.add('active');


}