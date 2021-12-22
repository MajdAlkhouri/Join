async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    loadBackground(backgrounds);
    setTimeout(() => {
        activeLink();

    }, 100)

}