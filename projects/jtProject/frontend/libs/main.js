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


//  Маленький скролл плагин
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

            sp -= deltaY * amount;

            // console.log(sp);

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

// Мини плагин для подмены BackgroundА
$(function () {
    $.fn.toBackGround = function () {
        var cmp = $(this);
        cmp.each(function () {
            var getThis = $(this);
            var imgSrc = getThis.attr('src');
            if (imgSrc === '' || imgSrc === '#' || imgSrc === ' ') {
                getThis.parent().css({
                    "background-color": "#F2F2F2",
                    "position": "relative"
                });
                getThis.parent().html("<div class='t-noImage'><span>АБ</span></div>");
                $('.t-noImage').css({
                    "width": "100%",
                    "height": "100%",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center"

                });
                $('.t-noImage span').css({
                    "font-size": "88px",
                    "color": "#fff",
                    "padding": "20px 0",
                    "border-top": "3px solid #fff",
                    "border-bottom": "3px solid #fff"
                })
            } else {
                getThis.parent().css({
                    "background-image": "url("+ imgSrc +")",
                    "background-position": "center",
                    "background-size": "cover",
                    "height": "100%"
                });
                getThis.remove();
            }
        })
    }
});

$(document).ready(function () {
    $('.t-authorModalPhoto img').toBackGround(); // Инициализация подмены BackgroundА

    if(window.matchMedia('(min-width: 768px)').matches) {
        // Инициализация маленького скролл плагина
        $('.t-mainCardsHolder').horizontalScrl('main', '.t-scrollBar', 100); // Вводим скорость горизонтального скролла а также зону действия скролла
    }

    // var blocks = document.getElementsByClassName('t-scrollBar');
    // var container = document.getElementsByClassName('t-mainCardsHolder');
    // var hs = new HorizontalScroll.default({
    //     blocks : blocks,
    //     container: container,
    //     isAnimated: true,
    //     springEffect: 0,
    // });


    $('.t-authorCardLink').on('click', function (e) {
        e.preventDefault();
        $('.t-authorModal').css('display', "flex").addClass('turnAnimation');
    });


    // Движение блока при движении мышки
    var cntHd, sldWd, tb;
    $(function() {
        cntHd = $('.t-newsCardInfoHolder').innerHeight();
        tb = $('.t-newsContentBody');
        sldWd = tb.outerHeight();
        $('.t-newsCardInfoHolder').mousemove(function(e) {
            if (sldWd > $(this).innerHeight()) {
                tb.css({
                    "overflow": "hidden",
                    "white-space": "nowrap",
                    "transform": "translateY("+ ((cntHd - sldWd)*((e.pageY / cntHd).toFixed(3))).toFixed(1) +"px)"
                });
            } else {
                return false;
            }
        });
    });
});