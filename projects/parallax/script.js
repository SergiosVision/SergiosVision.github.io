window.addEventListener('load', function () {
    'use strict';
    
    var wrapper = document.querySelector('.wrapper'),
        layerOne = document.querySelector('.layer-1'),
        layerTwo = document.querySelector('.layer-2'),
        layerThid = document.querySelector('.layer-3'),
        getPrintBtn = document.querySelector('#print-doc'),
        widthVal = 769;
    
    wrapper.addEventListener('mousemove', function (e) {
        if (window.innerWidth >= widthVal) {
            wrapper.addEventListener('mousemove', function (e) {
                var pageX = e.clientX,
                    pageY = e.clientY;
        
                layerOne.style.transform = 'translateX(' + pageX / 100 + '%) translateY(' + pageY / 100 + '%)';
                layerTwo.style.transform = 'translateX(' + pageX / 350 + '%) translateY(' + pageY / 150 + '%)';
                layerThid.style.transform = 'translateX(' + pageX / 50 + '%) translateY(' + pageY / 50 + '%)';
                wrapper.style = 'background-position: ' + pageX / 150 + '% center';
            
            }, false);
        }
        
    }, false);
    getPrintBtn.addEventListener('click', function () {
            window.print();
    }, false);
}, false);
