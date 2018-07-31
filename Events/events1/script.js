function anyFunc() {
    'use strict';
    var grid = document.querySelector('.grid');
    var takeArt = document.querySelector('#art p');

    grid.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            var howmany = this.querySelectorAll('li').length;
            if (howmany > 1) {
                var removeTarget = e.target.parentNode;
                removeTarget.parentNode.removeChild(removeTarget);
            } else {
                var photoTitle = e.target.alt;
                takeArt.innerHTML = "<p>You've picked: " + photoTitle + "</p>";
            } //howmany
        } // check to see that I clicked on IMG only
    }, false); // click event
}
anyFunc();