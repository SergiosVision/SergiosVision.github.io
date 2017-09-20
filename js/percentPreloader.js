let images = document.querySelectorAll('img'),
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    percDisplay = document.querySelector('#load_perc');

for (let i = 0; i < imagesTotalCount; i++) {
    let imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
}

function imageLoaded () {
    imagesLoadedCount++;
    
    percDisplay.innerHTML = (( (100 / imagesTotalCount) * imagesLoadedCount ) << 0) + '%';
    
    if (imagesLoadedCount >= imagesTotalCount){
        setTimeout(function(){
            let preloader = document.querySelector('#preloader2');
            if (!preloader.classList.contains('done')){
                preloader.classList.add('done');
                getBody.classList.add('premoveFixed');
            }
        }, 1000);
    }
};