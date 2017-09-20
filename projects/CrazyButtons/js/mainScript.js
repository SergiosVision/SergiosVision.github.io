const crazyButtons = document.querySelectorAll('.crazyBtn');

// define our functions
function goCrazy() {
    // get random number for the left offset
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    // random num for top offset
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
    
    console.log(offsetLeft, offsetTop);
    
    // apply those numbers to the button
    this.style.left = offsetLeft + 'px';
    this.style.top = offsetTop + 'px';
};

// add event listeners 
// Work in all browsers Besides IE
//crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
//// Work in all browsers
for (let i = 0; i < crazyButtons.length; i++){
    crazyButtons[i].addEventListener('mouseenter', goCrazy);
}