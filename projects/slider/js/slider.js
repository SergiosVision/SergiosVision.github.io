let carousel = document.getElementsByClassName('carousel');

[].forEach.call(carousel, function(c){
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        dotsContainer = c.getElementsByClassName('dotsContainer')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 1000,
        interval,
        dots = [];
    
    for(let i = 0; i < imgs.length; i++){
        let b = document.createElement('span');
        b.classList.add('dot');
        dotsContainer.appendChild(b);
        dots.push(b);
        
        b.addEventListener('click', function(){
            currentImageIndex = i;
            switchImg();
        });
    };
    
    function switchImg(){
        inner.style.left = -width * currentImageIndex + 'px'; 
        
        dots.forEach(function (b, i){
            if(i === currentImageIndex){
                b.classList.add('active');
            } else{
                b.classList.remove('active');
            };
        });
    };
     
    function showNext(){
        currentImageIndex++;
        
        if(currentImageIndex >= imgs.length){
            currentImageIndex = 0;
        }
        
        switchImg();
    };
    
    function showPrev() {
         currentImageIndex--;
        
        if(currentImageIndex < 0){
            currentImageIndex = imgs.length - 1;  
        }
        
        switchImg();
    };
    
    
    function start(){
        interval = setInterval(showNext, 8000);
    };
    
    function stop(){
        clearInterval(interval);
    };
    
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
    
//    let interval = setInterval(function(){ showNext()}, 1000);
    
});