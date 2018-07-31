document.querySelector('.grid').addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {
      
      var myElem = document.createElement('div');
      myElem.className = 'preview';
      e.target.parentNode.appendChild(myElem);
      
      var myImg = document.createElement('img');
      var imgLoc = e.target.src;
      myImg.src = imgLoc.slice(0, -7) + '.jpg';
      myElem.appendChild(myImg);
      
      e.target.addEventListener('mouseout', function handler(d){
            var myNode = d.target.parentNode.querySelector('div.preview');
          myNode.parentNode.removeChild(myNode);
          e.target.removeEventListener('mouseout', handler, false);
      }, false);

  } // check to see that I clicked on IMG only
}, false); // click event