svg4everybody();

//  Маленький скролл плагин
$(function ($) {
    $.fn.horizontalScrl = function (select, amount) {
        var cmp = $(this);
        amount = amount || 120;
        cmp.css('overflow', 'auto');
        $(select).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? (100 - oEvent.detail * -amount) : oEvent.wheelDelta,
                position = cmp.scrollLeft();
            position += direction > 0 ? -amount : amount;
            cmp.scrollLeft(position);
            event.preventDefault();
        })
    };
});


$(document).ready(function () {
    // jQuery('.t-scrollContainer').scrollbar();
    if(window.matchMedia('(min-width: 768px)').matches) {
        // Инициализация маленького скролл плагина
        // $('.t-mainCardsHolder').horizontalScrl('body', 40); // Вводим скорость горизонтального скролла а также зону действия скролла


        // $('.t-mainCardsHolder').scrollEnd(function(){
        //
        // }, 300);
    }

    var blocks = document.getElementsByClassName('t-scrollBar');
    var container = document.getElementsByClassName('t-mainCardsHolder');
    var hs = new HorizontalScroll.default({
        blocks : blocks,
        container: container,
        // isAnimated: true,
        springEffect: 0,
    });

    setTimeout(function () {
        $('.horizontal-scroll').css('position', 'static');
    }, 100);

    if(window.location.pathname === '/authors.html') {
        $('.t-topMiddleSection li').remove();
        $('.t-namePage').html('Авторы');
    }

});