let navContainer = document.getElementById("design-container");

let navlist = document.getElementsByClassName('navlist');

for (var i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += "active";
    });
}

let activePicture = document.getElementsByClassName('small-picture');

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
}