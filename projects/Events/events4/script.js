var imgPreview = document.querySelector('img.preview');
var overlay = document.querySelector('.overlay');
var getBody = document.body;
var highRes = document.createElement('img');
var spinner = document.createElement('img');

imgPreview.addEventListener('click', function (e) {
    'use strict';
    var lowres = e.target.src;
    
    overlay.style.display = "block";
    getBody.classList.add('body-fixed');
    highRes.classList.add('bgImg');
    highRes.src = lowres.slice(0, -7) + '.jpg';
    overlay.appendChild(highRes);
    
    spinner.classList.add('spinner');
    spinner.src = 'images/spinner.gif';
    overlay.appendChild(spinner);
    
    highRes.addEventListener('load', function spin(b) {
        spinner.parentNode.removeChild(spinner);
        b.target.removeEventListener('load', spin, false);
    });
}, false);

overlay.addEventListener('click', function () {
    'use strict';
    
    overlay.style.display = "none";
    overlay.removeChild(highRes);
    getBody.classList.remove('body-fixed');
    
}, false);