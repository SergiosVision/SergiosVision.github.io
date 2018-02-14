import Custom from './custom'

const scroll = new Custom({
    preload: false,
    native: false,
    direction: 'horizontal',
    section: document.querySelector('.container'),
    divs: document.querySelectorAll('.block'),
    fixOffset: 50 // Исправляет баг с шириной последнего элемента
});

scroll.init();