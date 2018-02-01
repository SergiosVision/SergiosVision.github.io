svg4everybody();

//  Маленький скролл плагин
// $(function ($) {
//     $.fn.horizontalScrl = function (select, amount) {
//         var cmp = $(this);
//         amount = amount || 120;
//         cmp.css('overflow', 'auto');
//         $(select).bind("DOMMouseScroll mousewheel", function (event) {
//             var oEvent = event.originalEvent,
//                 direction = oEvent.detail ? (oEvent.detail * -amount) : oEvent.wheelDelta,
//                 position = cmp.scrollLeft();
//             position += direction > 0 ? -amount : amount;
//             cmp.scrollLeft(position);
//             event.preventDefault();
//         })
//     };
// });

$(function ($) {
    $.fn.horizontalScrl = function (select, inside, amount) {
        function pos() {
            var pos = $(inside).last().position().left + $(inside).last().width() - $(window).width();
            return pos;
        }
        var position = pos(),
            sp = 0,
            cmp = $(this),
            x = 0;
        cmp.css('transition', 'transform 1.2s cubic-bezier(0.49, 0.8, 0.49, 0.8)');
        function pos() {
            var pos = $(inside).last().position().left + $(inside).last().width() - $(window).width();
            return pos;
        }
        $(select).bind("DOMMouseScroll mousewheel", function (event) {
            calcualte();
            event.preventDefault();
        });
        $(select).bind("keydown", function (event) {
            calcualte();
            event.preventDefault();
        });
        function calcualte() {
            var deltaY = 0;
            if (event.type.toLowerCase() == "mousewheel") {
                if (event.deltaY > 0) {
                    deltaY = 1;
                } else {
                    deltaY = -1
                }
            } else if ((event.type.toLowerCase() == "keydown")&&(event.target.nodeName.toLowerCase() == select)) {
                if (event.which == 38) {
                    deltaY = 1;
                } else if (event.which == 40) {
                    deltaY = -1
                } else {
                    return;
                }
            }

            sp -= deltaY * (amount + sp / position + 50);

            //определаем границы скролла
            console.log(sp);

            if (sp < 0) {
                sp = 0;
            } else if (sp > position) {
                sp = position;
            }

            cmp.css('transform', 'translate3d(' + -sp + 'px, 0 ,0)');

            if (x < 0) {
                x = 0;
            } else if (x > inside.length) {
                x = inside.length
            }
        }
    };
});

$(document).ready(function () {
    // jQuery('.t-scrollContainer').scrollbar();
    if(window.matchMedia('(min-width: 768px)').matches) {
        // Инициализация маленького скролл плагина
        $('.t-mainCardsHolder').horizontalScrl('body', '.t-scrollBar', 100); // Вводим скорость горизонтального скролла а также зону действия скролла
    }

    // var blocks = document.getElementsByClassName('t-scrollBar');
    // var container = document.getElementsByClassName('t-mainCardsHolder');
    // var hs = new HorizontalScroll.default({
    //     blocks : blocks,
    //     container: container,
    //     isAnimated: true,
    //     springEffect: 0,
    // });

    if(window.location.pathname === '/authors.html') {
        $('.t-topMiddleSection li').remove();
        $('.t-namePage').html('Авторы');
    }


    var cntHd, sldWd, tb;
    $(function() {

        cntHd = $('.t-newsCardInfoHolder').innerHeight();
        tb = $('.t-newsContentBody');
        sldWd = tb.outerHeight();
        $('.t-newsCardInfoHolder').mousemove(function(e) {
            if ($('.t-newsContentBody').outerHeight() > $(this).innerWidth()) {
                tb.css({
                    "overflow": "hidden",
                    "white-space": "nowrap",
                    "transform": "translateY("+ ((cntHd - sldWd)*((e.pageY / cntHd).toFixed(3))).toFixed(1) +"px)"
                });
            } else {
                return false;
            }
            // tb.css({transform: ((cntHd - sldWd)*((e.pageX / cntHd).toFixed(3))).toFixed(1) +"px" });
        });
    });

});