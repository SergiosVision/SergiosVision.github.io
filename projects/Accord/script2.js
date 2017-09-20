const accItem = document.querySelectorAll('.acc-item'),
      accHead = document.querySelectorAll('.acc-head');

for (let i = 0; i < accHead.length; i++){
    accHead[i].addEventListener('click', toggItems, false);
};

function toggItems () {
    let itemClass = this.parentNode.className;
    for (let i = 0; i < accItem.length; i++){
        accItem[i].className = 'acc-item close';
    };
    if (itemClass == 'acc-item close'){
        this.parentNode.className = 'acc-item open';
    }
};