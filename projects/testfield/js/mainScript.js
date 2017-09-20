// Timer 

let timer,
    loader = document.querySelector('.loader'),
    animBottom = document.querySelector('.animation-bottom'),
    footer = document.querySelector('footer');

function setTimer(){
    timer = setInterval(showBlock, 1000);
};

function showBlock(){
    loader.style.display = "none";  
    animBottom.style.display = "block";
    footer.style.display = "block";
    clearInterval(timer);
};

setTimer();

// Timer End


//Side Nav

let openSideBtn = document.getElementById('openSideNav'),
    closeSideBtn = document.getElementById('side-close'),
    getHome = document.getElementById('home'),
    overlay =  document.querySelector('#overlay'),
    windowSize = 769;

function openNav() {
    getHome.classList.add('nav-sidebar-open');
    overlay.classList.add('overlay');
};

function closeNav() {
    getHome.classList.remove('nav-sidebar-open');
    overlay.classList.remove('overlay');
}


openSideBtn.addEventListener('click', openNav);
closeSideBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);
// Close side menu when browser size been >= 769px
window.addEventListener('resize', function(){
    if (window.innerWidth >= windowSize) {
        getHome.classList.remove('nav-sidebar-open');
        overlay.classList.remove('overlay');
    }
});

//Side Nav End

//Toggle Color

let getBtnChange = document.getElementById('BtnChange'),
    getSideNavigation = document.querySelector('#nav-side'),
    getMainNavigation = document.querySelector('#navbar'),
    getFooterNavigation = document.querySelector('#footer');

getBtnChange.addEventListener('click', function(){
        getSideNavigation.classList.toggle('style-dark');
        getSideNavigation.classList.toggle('blueGradient');
        getMainNavigation.classList.toggle('style-dark');
        getMainNavigation.classList.toggle('blueGradient');
        getFooterNavigation.classList.toggle('style-dark');
        getFooterNavigation.classList.toggle('blueGradient');
});
    

//Toggle Color End


//Scroll To Top And Main Social

let getBody = document.body,
    getBodySec = document.documentElement,
    getButton = document.getElementById("toTopBtn"),
    getMainSocial = document.querySelector('#main-social');

window.addEventListener('scroll', function () {
    if (getBody.scrollTop > 200 || getBodySec.scrollTop > 200) {
        getButton.classList.add('btnToTopshow');
        getButton.classList.remove('btnToTopHide');
        getMainSocial.classList.add('main-socialShow');
        getMainSocial.classList.remove('main-socialHide');
    } else {
        getButton.classList.remove('btnToTopshow');
        getButton.classList.add('btnToTopHide');
        getMainSocial.classList.remove('main-socialShow');
        getMainSocial.classList.add('main-socialHide');
    }
}, false);



//getButton.addEventListener('click', function toTop(){
//    getBody.scrollTop = 0;
//    getBodySec.scrollTop = 0;
//});

getButton.addEventListener('click', function toTop(){
    scrollTo(getBody, 0, 100);
});

function scrollTo(element, to, duration){
    if(duration < 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 2;
    
    setTimeout(function(){
       element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, 5);
};

//Scroll To Top And Main Social End 


//DropDown Menu

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropDownList');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropDownList-menu'),
            arrow = button.querySelector('i.fa-caret-down');

	button.addEventListener('click', function(event){
         if(!menu.classList.contains('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
            arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
            arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
    });
})

Element.prototype.hasClasslist = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

//DropDown Menu End
