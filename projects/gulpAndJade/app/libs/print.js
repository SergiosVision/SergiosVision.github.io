const getPrintBtn = document.querySelector('#print');

getPrintBtn.addEventListener('click', function () {
    window.print();
}, false);