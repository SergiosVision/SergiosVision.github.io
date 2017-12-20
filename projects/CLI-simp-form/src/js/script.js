// Main Variables And Functions

var getBarsIco = document.querySelector('#hamburger'),
    getMobMenu = document.querySelector('.mob-menu'),
    getOverlay = document.querySelector('.overlay'),
    getLinks = document.querySelectorAll('.mob-menu a, .brand-logo'),
    getBody = document.body,
    widthValue = 993,
    preloader = document.querySelector('#preloader');

function addTheElements(){
    getMobMenu.classList.add('mob-menu-open');
    getOverlay.classList.add('overlay-show');
    getBody.classList.add('fixed');
    getBarsIco.classList.add('is-active');
};

function removeTheElements(){
    getMobMenu.classList.remove('mob-menu-open');
    getOverlay.classList.remove('overlay-show');
    getBody.classList.remove('fixed');
    getBarsIco.classList.remove('is-active');
};

// Main Variables And Functions End

//Preloader

getBody.onload = function(){
    setTimeout(function(){
        if (!preloader.classList.contains('done')){
            preloader.classList.add('done');
            getBody.classList.remove('fixed');
        }
    }, 1000);
};

//Preloader End

// Show Menu

getBarsIco.addEventListener('click', function(){
    if(!getMobMenu.classList.contains('mob-menu-open')){
        addTheElements();
    } else{
        removeTheElements();
    }
});

getOverlay.addEventListener('click', function(){
    removeTheElements();
});

// Show Menu End

// Hide Window When size of the browser been >= 993px

window.addEventListener('resize', function(){
    if(window.innerWidth >= widthValue){
        removeTheElements();
    }
});

// Hide Window When size of the browser been >= 993px End

// Hide Mobile Menu when happen click on link

for(var i = 0; i < getLinks.length; i++){
    getLinks[i].addEventListener('click', function(){
        removeTheElements();
    });
}
// Hide Mobile Menu when happen click on link End

// Mask init

let selector = document.getElementsByClassName("mask");

let im = new Inputmask("8(999) 999-9999", {showMaskOnHover: false});
im.mask(selector);

// Mask init End