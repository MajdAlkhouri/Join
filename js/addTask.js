



 function addDnone() {
     document.getElementById('createtTaskInfo').classList.add('d-none');
 }

 function changeCreatorImage() {
     let creator = document.getElementById('taskCreator').value;
     let creatorImg = document.getElementById('creatorImg');
     if(creator == Majd) {
         creatorImg.src = './img/social_icons/facebook-64.ico';
     }
     if(creator == Toma) {
        creatorImg.src = './img/social_icons/facebook-64.ico';
    }
    if(creator == Peter) {
        creatorImg.src = './img/Peter.jpg';
    }

    console.log('creatorImg.src');

 }