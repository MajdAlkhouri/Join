



 function addDnone() {
     document.getElementById('createtTaskInfo').classList.add('d-none');
 }

 function changeCreatorImage() {
     let creator = document.getElementById('taskCreator').value;
     let creatorImg = document.getElementById('creatorImg');
     if(creator == 'majd') {
         creatorImg.src = './img/social_icons/facebook-64.ico';
     }
     if(creator == 'toma') {
        creatorImg.src = './img/icon plus.png';
    }
    if(creator == 'peter') {
        creatorImg.src = './img/Peter.jpg';
    }
 }