setURL('http://gruppe-116.developerakademie.net/Join/smallest_backend_ever');

async function getArray(key) {
    await downloadFromServer();
    return JSON.parse(backend.getItem(key)) || [];
}

async function setArray(key, array) {
    await backend.setItem(key, JSON.stringify(array));
}