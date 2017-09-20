let carousel = document.getElementsByClassName('carousel');

[].forEach.call(carousel, function(c){
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        dotsContainer = c.getElementsByClassName('dotsContainer')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImgIndex = 0,
        width = 1000,
        interval,
        dots = [];
    
    
    for(let i = 0; i < imgs.length; i++){
        let addDots = document.createElement('span');
        addDots.classList.add('dot');
        dotsContainer.appendChild(addDots);
        dots.push(addDots);
        
        addDots.addEventListener('click', function(){
            currentImgIndex = i;
            switchImg();
        });
    };
    
    function switchImg(){
        inner.style.left = -width * currentImgIndex + 'px';
        
        dots.forEach(function (b, i){
            if(i === currentImgIndex){
                b.classList.add('active');
            } else{
                b.classList.remove('active');
            }
        });
    };
    
    function showNext(){
        currentImgIndex++;
        
        if(currentImgIndex >= imgs.length){
          currentImgIndex = 0;     
        };
        
        switchImg();
    };
    
    function showPrev(){
        currentImgIndex--;
        
        if(currentImgIndex < 0){
            currentImgIndex = imgs.length - 1;  
        };
        
        switchImg();
    };
    
    function start(){
        interval = setInterval(showNext, 1000);  
    };
    
    function stop(){
        clearInterval(interval);
    }
    
    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);
    inner.addEventListener('mouseover', stop);
    inner.addEventListener('mouseout', start);
    next.addEventListener('mouseover', stop);
    prev.addEventListener('mouseover', stop);
    next.addEventListener('mouseout', start);
    prev.addEventListener('mouseout', start);
    
    switchImg();
    start();
    
});