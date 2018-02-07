//  Маленький скролл плагин
$(function ($) {
    $.fn.horizontalScroll = function (options) {

        // Params
        var options = jQuery.extend({
            scrollField: '',
            thisChild: '',
            hideElement: '',
            bars: ''
        }, options);

        // Variables
        var sp = 0,
            cmp = $(this),
            getLeftVal = parseInt(cmp.css("left")) !== parseInt(5),
            getThisElOffset = cmp.offset().left,
            getHidenWidth = $(options.hideElement).width(),
            x = 0,
            direction = 0,
            scrollTarget = 0,
            scrollValue = 0,
            speed = 0,
            lastSecond = [];

        // Get Value from the Transform Translate
        return this.each(function () {
            function getTransform(el) {
                var resultOne = $(el).css('transform').split(',');
                var resultTwo = resultOne[4];
                var getValue = parseInt(resultTwo);
                return getValue;
            }

            // Set stock UI
            cmp.css({
                "position": "absolute",
                "left": getThisElOffset
            });


            // Call MouseWheel Event
            $(options.scrollField).bind("DOMMouseScroll mousewheel wheel", function (event) {
                calculate();
                event.preventDefault();
            });

            // Calculate Position in Container
            function calculate() {
                var position = pos();
                function pos() {
                    var pos = $(options.thisChild).last().position().left + $(options.thisChild).last().width() - $(window).width() + 7;
                    return pos;
                }

                // Set Scroll Event

                sp += cmp.scrollLeft = event.deltaY;

                if (sp < 0) {
                    sp = 0;
                } else if (sp > position) {
                    sp = position;
                }

                if (event.deltaY > 0) {
                    direction = 1;
                    if(sp > 0) {
                        $(options.hideElement).css({"transform": "translateX(-150%)", "transition": ".6s ease-in-out", "opacity":'0'});
                        $(options.bars).css({"left": "22px"});
                        $(options.hideElement).parent().parent().addClass('minAside');
                        if (getLeftVal) {
                            getLeftVal = false;
                            cmp.animate({"left": "5px"}, 700);
                        }
                    }
                } else {
                    direction = -1;
                    if ((sp === 0 || sp <= -320) && (getTransform(cmp) === parseInt(0) && getLeftVal === false)) {
                        $(options.hideElement).parent().parent().removeClass('minAside');
                        cmp.animate({"left": getHidenWidth}, 700);
                        $(options.bars).css({"left": "-150%"});
                        $(options.hideElement).css({"transform": "none", "opacity": '1'});
                        getLeftVal = true;
                    }
                }

                cmp.css('transform', 'translate3d(' + -sp + 'px, 0 ,0)');
                // cmp.css({"transform": "translate3d(" + -scrollValue + "px, 0 ,0)"});
                $(options.thisChild).css({
                    // "margin": "0 "+ speed / 2 + "px",
                    // "transform": "skew("+ speed / 2 +"deg)"
                });

                if (x < 0) {
                    x = 0;
                } else if (x > options.thisChild.length) {
                    x = options.thisChild.length
                }

                // Max, Min values Function

                function _clamp(num, min, max) {
                    return Math.min(Math.max(num, min), max);
                }
            }
        });

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
    var getMainPageName = $('.t-namePage').text();
    $('.t-pageHiddenName').text(getMainPageName);
    $('.t-authorModalPhoto img').toBackGround(); // Инициализация подмены BackgroundА

    if(window.matchMedia('(min-width: 768px)').matches) {
        // Инициализация Скролл плагина By SergiosVision
        $('.t-mainCardsHolder').horizontalScroll({
            scrollField: 'main', // Определяет зону действия скролла
            thisChild: '.t-scrollBar', // Селектор ребёнка родительского блока
            hideElement: '.t-menuWrapper', // Элемент который нужно задвинуть :)
            bars: ".t-mainBurger" // Бургер меню
        });
    }

    //  Call Modals
    function checkRel() {
        if (!$('body').hasClass('t-relative')) {
            $('body').addClass('t-relative');
        }
    }

    $('body').on('click', '.t-burger', function (e) {
        e.preventDefault();
        $('body').addClass('nowOpened');
        $('.t-mainWrapper').append('<div class="t-overlay"></div>');
        $('aside').addClass('t-hiddenMenu');
        if ($('body').hasClass('nowOpened')) {
            return false;
        }
    });

    $('body').on('click', '.t-overlay', function () {
        $('aside').removeClass('t-hiddenMenu');
        $('body').removeClass('nowOpened');
        $(this).remove()
    });

    $('body').on('click', '.t-modalBack', function (e) {
        e.preventDefault();
        $('body').removeClass('modalActivate').removeClass('nowOpened');
        $('.t-hiddenLogoWrapper').removeClass('activateBg');
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
            $('body').addClass('modalActivate');
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
            $('.t-hiddenLogoWrapper').addClass('activateBg');
            $('body').addClass('modalActivate');
        },1300)
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Движение блока при движении мышки
    $(function() {
        var cntHd, sldHd, tb;
        $('.t-newsCardInfoHolder').mousemove(function(e) {
            var $this = $(this);
            cntHd = $this.outerHeight();
            tb = $this.find('.t-newsContentBody');
            sldHd = tb.outerHeight();
            if (sldHd > $this.height()) {
                var percent = e.pageY - $this.offset().top;
                percent = 100 / cntHd * percent;

                var translate = ((sldHd - cntHd) / 100) * percent;

                tb.css({
                    "overflow": "hidden",
                    "white-space": "nowrap",
                    "transform": "translateY(-"+ translate +"px)"
                });
            } else {
                return false;
            }
        });
    });

    $()

});