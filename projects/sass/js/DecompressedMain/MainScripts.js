// Main Variables
var getNavBar = document.querySelector('.navbar'),
    getBody = document.body,
    getBodySec = document.documentElement,
    getBars = document.querySelector('.bars-ico'),
    getMobMenu = document.querySelector('.mob-menu'),
    getOverlay = document.querySelector('.overlay'),
    getLinks = document.querySelectorAll('.mob-menu a, .navbar-brand'),
    widthValue = 769;

// Show Color Menu

window.addEventListener('scroll', function(){
    if ((getBody.scrollTop > 150) || (getBodySec.scrollTop > 150)){
        getNavBar.classList.add('navbar-dark');
    } else {
        getNavBar.classList.remove('navbar-dark');
    }
});

// Show Color Menu End

// Show Menu

getBars.addEventListener('click', function(){
     if(!getMobMenu.classList.contains('mob-menu-open')){
         getMobMenu.classList.add('mob-menu-open');
         getOverlay.classList.add('overlay-show');
     } else{
         getMobMenu.classList.remove('mob-menu-open');
         getOverlay.classList.remove('overlay-show');
     }
});

getOverlay.addEventListener('click', function(){
        getMobMenu.classList.remove('mob-menu-open');
        getOverlay.classList.remove('overlay-show');
});

// Show Menu End


// Hide Window When size of the browser been >= 769px

window.addEventListener('resize', function(){
    if(window.innerWidth >= widthValue){
        getMobMenu.classList.remove('mob-menu-open');
        getOverlay.classList.remove('overlay-show');
    } 
});

// Hide Window When size of the browser been >= 769px. End

// Hide Mobile Menu when happen click on link 
for (var i = 0; i < getLinks.length; i++) {
    getLinks[i].addEventListener('click', function() {
        getMobMenu.classList.remove('mob-menu-open');
        getOverlay.classList.remove('overlay-show');
    });
}

// Hide Mobile Menu when happen click on link. End