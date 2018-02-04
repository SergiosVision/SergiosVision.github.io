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
    $.fn.horizontalScrl = function (select, inside, spring, reduce, limit) {
        function pos() {
            var pos = $(inside).last().position().left + $(inside).last().width() - $(window).width();
            return pos;
        }
        var position = pos(),
            sp = 0,
            cmp = $(this),
            x = 0,
            scrollValue = 0,
            oldScrollValue = 0,
            scrollTarget = 0,
            scrollLeft = 0,
            scrollRight = 0,
            spring = spring,
            direction = 0,
            speed = 0,
            speedTarget = 0

        cmp.css('transition', 'transform 1.2s cubic-bezier(0.49, 0.8, 0.49, 0.8)');
        $(select).bind("DOMMouseScroll mousewheel", function (event) {
            calcualte();
            event.preventDefault();
        });
        $(select).bind("keydown", function (event) {
            calcualte();
            event.preventDefault();
        });
        function calcualte() {

            if (event.type.toLowerCase() == "mousewheel") {
                if (event.deltaY > 0) {
                    direction = 1;
                } else {
                    direction = -1
                }
            } else if ((event.type.toLowerCase() == "keydown")&&(event.target.nodeName.toLowerCase() == select)) {
                if (event.which == 38) {
                    direction = 1;
                } else if (event.which == 40) {
                    direction = -1
                } else {
                    return;
                }
            }

            scrollTarget += event.deltaY * -1;
            scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, scrollRight)));

            scrollValue += (scrollTarget - scrollValue) * spring;

            var delta = scrollTarget - scrollValue;
            var thisMargin = delta / reduce;
            speed = _clamp(-thisMargin, -limit, limit);

            sp += cmp.scrollLeft = event.deltaY;

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

            function _clamp(num, min, max) {
                return Math.min(Math.max(num, min), max);
            }
        }
    };
});

// $(function ($) {
//     $.fn.horizontalScrl = function (select, inside, spring, reduce, limit) {
//         function pos() {
//             var pos = $(inside).last().position().left + $(inside).last().width() - $(window).width();
//             return pos;
//         }
//         var position = pos(),
//             sp = 0,
//             cmp = $(this),
//             x = 0,
//             scrollValue = 0,
//             scrollTarget = 10,
//             spring = spring,
//             direction = 0,
//             speed = 0;
//
//         cmp.css('transition', 'transform 1.2s cubic-bezier(0.49, 0.8, 0.49, 0.8)');
//         $(select).bind("DOMMouseScroll mousewheel", function (event) {
//             calcualte();
//             event.preventDefault();
//         });
//         $(select).bind("keydown", function (event) {
//             calcualte();
//             event.preventDefault();
//         });
//         function calcualte() {
//
//             if (event.type.toLowerCase() == "mousewheel") {
//                 if (event.deltaY > 0) {
//                     direction = 1;
//                 } else {
//                     direction = -1
//                 }
//             } else if ((event.type.toLowerCase() == "keydown")&&(event.target.nodeName.toLowerCase() == select)) {
//                 if (event.which == 38) {
//                     direction = 1;
//                 } else if (event.which == 40) {
//                     direction = -1
//                 } else {
//                     return;
//                 }
//             }
//
//             scrollTarget += event.deltaY/120;
//             scrollTarget = Math.round(scrollTarget);
//
//             scrollValue += (scrollTarget - scrollValue) * spring;
//
//             var delta = scrollTarget - scrollValue;
//             var thisMargin = delta / reduce;
//             speed = _clamp(thisMargin, -limit, limit);
//
//             sp += cmp.scrollLeft = event.deltaY/120;
//             console.log(event.deltaY/120)
//
//
//             if (sp < 0) {
//                 sp = 0;
//             } else if (sp > position) {
//                 sp = position;
//             }
//
//             cmp.css('transform', 'translate3d(' + -sp + 'px, 0 ,0)');
//             $('.t-scrollBar').each(function () {
//                 $(this).css('margin-right',  -speed);
//                 $(this).css('margin-left', -speed);
//             });
//
//
//             if (x < 0) {
//                 x = 0;
//             } else if (x > inside.length) {
//                 x = inside.length
//             }
//
//             function _clamp(num, min, max) {
//                 return Math.min(Math.max(num, min), max);
//             }
//         }
//     };
// });

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
                getThis.parent().append("<div class='t-noImage'><span>АБ</span></div>");
                getThis.remove();
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
        $('.t-mainCardsHolder').horizontalScrl('main', '.t-scrollBar', 0.3, 16, 16); // Вводим скорость горизонтального скролла а также зону действия скролла
    }

    // var blocks = document.getElementsByClassName('t-scrollBar');
    // var container = document.getElementsByClassName('t-mainCardsHolder');
    // var hs = new HorizontalScroll.default({
    //     blocks : blocks,
    //     container: container,
    //     isAnimated: true,
    //     springEffect: 0,
    // });

    $('body').on('click', '.t-modalBack', function (e) {
        e.preventDefault();
        $('.t-authorModal').addClass('closeAnim');
        setTimeout(function () {
            $('.t-authorModal').removeClass('closeAnim').hide();
        },1000)
    });

    $('body').on('click', '.t-authorCardLink', function (e) {
        e.preventDefault();
        var $this = $(this);
        var getImgHolderImg = $this.find('img').attr('src');
        var getName = $this.find(".t-authorName").text();
        var getProfession = $this.find(".t-authorProfession").text();
        var getArticlesCount = $this.find(".t-authorArticlesCount").text();
        var getLikes = $this.find(".t-authorLikesCount").text();
        $('.t-authorModal .t-authorModalPhoto').css("background-image", "url("+ getImgHolderImg +")");
        $('.t-authorModal .t-authorModalName').text(getName);
        $('.t-authorModal .t-authorModalProfession').text(getProfession);
        $('.t-authorModal .t-authorArticlesCount').text(getArticlesCount);
        $('.t-authorModal .t-authorLikesCount').text(getLikes);
        $('.t-authorModal').css('display', "flex").addClass('turnAnimation');
        setTimeout(function () {
            $('.t-authorModal').removeClass('turnAnimation');
        },1000)
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