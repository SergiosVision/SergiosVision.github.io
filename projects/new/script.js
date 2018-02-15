import { HorizontalScroll } from './index'

var blocks = document.getElementsByClassName('block');
var container = document.getElementsByClassName('container');

new HorizontalScroll({
    blocks : blocks,
    container: container,
    isAnimated: true,
    spring: .1,
    skewReducer: 28,
    skewLimit: 24
});