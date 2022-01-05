setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

let registredUser = []


async function loadUser() {
    await downloadFromServer();
    registredUser = JSON.parse(backend.getItem('newUser')) || [];
}




async function userRegistration() {

    let newUsername = document.getElementById('newusername').value;
    let newPassword = document.getElementById('newpassword').value;

    let newUser = {
        username: newUsername,
        password: newPassword
    }

    registredUser.push(newUser);

    let registredUserAsString = JSON.stringify(newUser);
    await backend.setItem('newUser', registredUserAsString);


}

function login() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    for (let i = 0; i < registredUser.length; i++) {

        if (username == registredUser[i].username && password == registredUser[i].password) {
            window.location.href = 'addTask.html';

            console.log(username + 'is logged in!!')
        }

    }

}