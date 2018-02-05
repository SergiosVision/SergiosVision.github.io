//  Маленький скролл плагин
$(function ($) {
    $.fn.horizontalScrl = function (select, inside, hide) {
        function getTransform(el) {
            var resultOne = $(el).css('transform').split(',');
            var resultTwo = resultOne[4];
            var getValue = parseInt(resultTwo);
            return getValue;
        }
        var sp = 0,
            cmp = $(this),
            getLeftVal = parseInt(cmp.css("left")) !== parseInt(5),
            getThisElOffset = cmp.offset().left,
            getHidenWidth = $(hide).width(),
            x = 0,
            direction = 0,
            directionCtrl = false,
            directionCtrlSec = false;

        cmp.css({
            "transition": "transform 1.2s cubic-bezier(0.49, 0.8, 0.49, 0.8)",
            "position": "absolute",
            "left": getThisElOffset
        });

        $(select).bind("DOMMouseScroll mousewheel", function (event) {
            calculate();
            event.preventDefault();
        });

        $(select).bind("keydown", function (event) {
            calculate();
            event.preventDefault();
        });
        function calculate() {
            console.log(getTransform(cmp));
            var position = pos();
            function pos() {
                var pos = $(inside).last().position().left + $(inside).last().width() - $(window).width() + 7;
                return pos;
            }
            if (event.type.toLowerCase() == "mousewheel") {
                if (event.deltaY > 0) {
                    direction = 1;
                    if(!directionCtrl) {
                        $(hide).css({
                            "transform": "translateX(-150%)",
                            "transition": ".6s ease-in-out"
                        });
                        if (getLeftVal) {
                            cmp.animate({
                                "left": "5px",
                            }, 700);
                        }
                        directionCtrl = true;
                    }
                } else {
                    direction = -1;
                    directionCtrl = false;
                    if (getTransform(cmp) === parseInt(0) && !directionCtrlSec) {
                        cmp.animate({"left": getHidenWidth,}, 700);
                        $(hide).css('transform', 'none');
                        directionCtrlSec = true;
                    } else if (getTransform(cmp) === parseInt(0)) {
                        directionCtrlSec = false;
                    }
                    event.stopPropagation();
                }
            } else if ((event.type.toLowerCase() == "keydown") && (event.target.nodeName.toLowerCase() == select)) {
                if (event.which == 38) {
                    direction = 1;
                } else if (event.which == 40) {
                    direction = -1
                } else {
                    return;
                }
            }

            // scrollTarget += event.deltaY * -1;
            // scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, scrollRight)));
            //
            // scrollValue += (scrollTarget - scrollValue) * spring;
            //
            // var delta = scrollTarget - scrollValue;
            // var thisMargin = delta / reduce;
            // speed = _clamp(-thisMargin, -limit, limit);

            console.log("Delta:" + ' ' + event.deltaY);

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
// Document Ready Section
$(document).ready(function () {
    svg4everybody(); // Call SVG4EveryBody
    $('.t-authorModalPhoto img').toBackGround(); // Инициализация подмены BackgroundА

    if(window.matchMedia('(min-width: 768px)').matches) {
        // Инициализация маленького скролл плагина
        $('.t-mainCardsHolder').horizontalScrl('main', '.t-scrollBar', '.t-menuWrapper'); // Вводим скорость горизонтального скролла а также зону действия скролла
    }

    //  Call Modals
    function checkRel() {
        if (!$('body').hasClass('t-relative')) {
            $('body').addClass('t-relative');
        }
    }

    $('body').on('click', '.t-modalBack', function (e) {
        e.preventDefault();
        if ($('body').hasClass('t-relative')) {
            $('body').removeClass('t-relative');
        }
        if($('.t-authorModal')) {
            $('.t-authorModal').addClass('closeAnim');
            $('.t-modalButtonsHolder').addClass('t-hide');
            setTimeout(function () {
                $('.t-authorModal').removeClass('closeAnim').hide();
            },1000)
        }
        if ($('.t-newsModal')) {
            $('.t-newsModal').addClass('closeAnim');
            $('.t-modalButtonsHolder').addClass('t-hide');
            setTimeout(function () {
                $('.t-newsModal').removeClass('closeAnim').hide();
            },1000)
        }
    });

    $('body').on('click','.t-newsCard', function (e) {
        e.preventDefault();
        checkRel();
        var $this =  $(this);

        $('.t-newsModal').show().addClass('turnAnimation');
        setTimeout(function () {
            $('.t-newsModal').removeClass('turnAnimation');
            $('.t-modalButtonsHolder').removeClass('t-hide');
        },1300)

    });

    $('body').on('click', '.t-authorCardLink', function (e) {
        e.preventDefault();
        checkRel();
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
            $('.t-modalButtonsHolder').removeClass('t-hide');
        },1300)
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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