var draganDrop = (function () {
    var myX = '';
    var myY = '';
    var whichArt = '';
    
    function resetZ(){
        var elem = document.querySelectorAll('img');
        for(var i = elem.length - 1; i >= 0; i--){
           elem[i].style.zIndex = '5'; 
        }
    };
    
    function moveStart(e){
        whichArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offsetY;
        resetZ();
        whichArt.style.zIndex = 10;
    };
    
    function moveDragOver(e){
        e.preventDefault();  
    };
    
    function moveDrop(e){
        e.preventDefault();
        whichArt.style.left = e.pageX - myX + 'px';
        whichArt.style.top = e.pageY - myY + 'px';
    };
    
    function touchStart(e){
        e.preventDefault();
        var wichArt = e.target;
        var touch = e.touches[0];
        var moveOffsetX = wichArt.offsetLeft - touch.pageX;
        var moveOffsetY = wichArt.offsetTop - touch.pageY;
        resetZ();
        wichArt.style.zIndex = 10;
        
        wichArt.addEventListener('touchmove', function(){
            var positionX = touch.pageX + moveOffsetX;
            var positionY = touch.pageY + moveOffsetY;
            wichArt.style.left = positionX + 'px';
            wichArt.style.top = positionY + 'px';
        }, false);
    };
    
    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
    
    document.querySelector('body').addEventListener('touchstart', touchStart, false);
})();