const togmenu = document.querySelector('.toggle-nav'),
      getBody = document.body;

togmenu.addEventListener('click', () => {
    getBody.classList.toggle('show-nav');
});

addEventListener('keyup', (e) => {
    if (e.keyCode == 27){
        getBody.classList.toggle('show-nav');
    } 
});