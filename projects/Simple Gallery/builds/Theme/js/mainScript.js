var imgPreview = document.querySelectorAll('img.imgItem');
var overlay = document.querySelector('.overlay');
var getBody = document.body;
var highRes = document.createElement('img');
var preloader = document.createElement('div');
var newP = document.createElement('p');
var getBars = document.querySelector('#bars');

for (var i = 0; i < imgPreview.length; i++){
    imgPreview[i].addEventListener('click', function (e) {
        var lowRes = e.target.src,
            photoTitle = e.target.getAttribute('data-caption');
        
        overlay.classList.add('show');
        getBody.classList.add('fixed');
        highRes.classList.add('showImg');
        
        highRes.src = lowRes.slice(0, -8) + '.jpg';
        overlay.appendChild(highRes);
        overlay.appendChild(newP);
        newP.innerHTML = photoTitle;
        
        preloader.classList.add('preloader');
        overlay.appendChild(preloader);
        
        highRes.addEventListener('load', function preloadSpin (d){
            preloader.parentNode.removeChild(preloader);
            d.target.removeEventListener('load', preloadSpin, false);
        }, false);
    }, false);
}

overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    getBody.classList.remove('fixed');
    overlay.removeChild(highRes);
    overlay.removeChild(newP);
}, false);

getBars.addEventListener('click', function(){
    this.classList.toggle('change');
});
