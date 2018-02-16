// Cursor Follower
// if(window.matchMedia('(min-width: 801px)').matches) {
//     var getCursor = $('.cursor');
//
//     function cursorMove(e) {
//         TweenLite.to(getCursor, .10, {
//             left: e.pageX,
//             top: e.pageY,
//             ease: Power4.easOut
//         });
//         // clearTimeout(timer);
//         //
//         // var timer = setTimeout(function() {
//         //     $cursor.removeClass('is-moving');
//         // }, 300);
//     }
//     $(window).on('mousemove', cursorMove);
// }
//  Маленький скролл плагин

// Editor
var editor = new MediumEditor('.editable'),
    cssLink = document.getElementsByClassName('getStyles');

// $(function ($) {
//     $.fn.horizontalScroll = function (options) {
//
//         // Params
//         var options = jQuery.extend({
//             scrollField: '',
//             thisChild: '',
//             hideElement: '',
//             bars: ''
//         }, options);
//
//         // Variables
//         var sp = 0,
//             cmp = $(this),
//             getLeftVal = parseInt(cmp.css("left")) !== parseInt(5),
//             getThisElOffset = cmp.offset().left,
//             getHidenWidth = $(options.hideElement).width(),
//             x = 0,
//             direction = 0,
//             scrollTarget = 0,
//             scrollValue = 0,
//             scrollLeft = 0;
//
//         // Get Value from the Transform Translate
//         return this.each(function () {
//             function getTransform(el) {
//                 var resultOne = $(el).css('transform').split(',');
//                 var resultTwo = resultOne[4];
//                 var getValue = parseInt(resultTwo);
//                 return getValue;
//             }
//
//             // Set stock UI
//             cmp.css({
//                 "position": "absolute",
//                 "left": getThisElOffset
//             });
//
//
//             // Call MouseWheel Event
//             $(options.scrollField).bind("DOMMouseScroll mousewheel wheel", function (event) {
//                 calculate();
//                 event.preventDefault();
//             });
//
//             // Calculate Position in Container
//             function calculate() {
//                 var position = pos();
//                 function pos() {
//                     var pos = $(options.thisChild).last().position().left + $(options.thisChild).last().width() - $(window).width() + 7;
//                     return pos;
//                 }
//
//                 // Set Scroll Event
//
//
//                 scrollTarget += event.deltaY * 1;
//                 scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, position)));
//                 console.log(scrollTarget)
//
//                 sp += scrollTarget;
//
//                 if (sp < 0) {
//                     sp = 0;
//                 } else if (sp > position) {
//                     sp = position;
//                 }
//
//                 if (event.deltaY > 0) {
//                     direction = 1;
//                     if(sp > 0) {
//                         $(options.hideElement).css({"transform": "translateX(-150%)", "transition": ".6s ease-in-out", "opacity":'0'});
//                         $(options.bars).css({"left": "22px"});
//                         $(options.hideElement).parent().parent().addClass('minAside');
//                         if (getLeftVal) {
//                             getLeftVal = false;
//                             cmp.animate({"left": "5px"}, 700);
//                         }
//                     }
//                 } else {
//                     direction = -1;
//                     if ((sp === 0 || sp <= -320) && (getTransform(cmp) === parseInt(0) && getLeftVal === false)) {
//                         $(options.hideElement).parent().parent().removeClass('minAside');
//                         cmp.animate({"left": getHidenWidth}, 700);
//                         $(options.bars).css({"left": "-150%"});
//                         $(options.hideElement).css({"transform": "none", "opacity": '1'});
//                         getLeftVal = true;
//                     }
//                 }
//
//                 cmp.css('transform', 'translate3d(' + -sp + 'px, 0 ,0)');
//
//
//                 if (x < 0) {
//                     x = 0;
//                 } else if (x > options.thisChild.length) {
//                     x = options.thisChild.length
//                 }
//
//                 // Max, Min values Function
//
//                 function _clamp(num, min, max) {
//                     return Math.min(Math.max(num, min), max);
//                 }
//             }
//         });
//
//     };
// });



$(function ($) {
    $.fn.horizontalScroll = function (options) {
        // Params
        var options = jQuery.extend({
            scrollField: options.scrollField,
            thisChild: options.thisChild,
            hideElement: options.hideElement,
            bars: options.bars,
            spring: options.spring || 0.1,
            marginReducer: options.marginReducer || 10,
            marginLimit: options.marginLimit || 10,
            animation: options.animation || false,
            getOdd: options.getOdd,
            getEvent: options.getEvent
        }, options);

        // Variables
        var sp = 0,
            cmp = $(this),
            getLeftVal = parseInt(cmp.css("left")) !== parseInt(5),
            getThisElOffset = cmp.offset().left,
            getHidenWidth = $(options.hideElement).width(),
            interval,
            direction = 0,
            scrollTarget = 0,
            scrollValue = 0,
            oldScrollValue = 0,
            scrollLeft = 0,
            speed = 0,
            value = 0;

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

            addEvents();

            // Call MouseWheel Event
            
            function addEvents() {
                $(options.scrollField).bind("DOMMouseScroll mousewheel wheel", function (event) {
                    scrollThis();
                    event.preventDefault();
                });
            }

            function pos() {
                var pos = $(options.thisChild).last().position().left + $(options.thisChild).last().width() - $(window).width() + 7;
                return pos;
            }

            function scrollThis() {

                value += event.deltaY * -1;
                scrollTarget += event.deltaY * 1;
                scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, pos())));

                if (event.deltaY > 0) {
                    direction = 1;
                    if(scrollTarget > 0) {
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
                   if ((scrollTarget === 0 || scrollTarget <= -320) && (getTransform(cmp) === parseInt(0) && getLeftVal === false)) {
                        $(options.hideElement).parent().parent().removeClass('minAside');
                        cmp.animate({"left": getHidenWidth}, 700);
                        $(options.bars).css({"left": "-150%"});
                        $(options.hideElement).css({"transform": "none", "opacity": '1'});
                        getLeftVal = true;
                    }
                }

            }
            
            function getUpdate() {
             interval = setInterval(function () {
                 // var setBack = debounce(function(){
                 //     cmp.css('width', ''+ getStartWidth +'px');
                 //     console.log('width setted')
                 // }, 100);
                 //
                 // setBack();
                    // Get Scroll Value
                    scrollValue += (scrollTarget - scrollValue) * options.spring;

                    // Get Delta

                    var delta = scrollTarget - scrollValue;
                    console.log(delta)
                    var getMargin = delta >= 0 ? delta / options.marginReducer : (delta * -1) / options.marginReducer;
                    speed += _clamp(getMargin, 0, options.marginLimit);

                    if(options.animation) {
                        cmp.css({
                            'transform': 'translate3d(' + -scrollValue + 'px, 0 ,0)'
                        });

                        $(options.getOdd).css({
                            'transform': 'translate3d(' + getMargin + 'px, 0 ,0)',
                        });
                        $(options.getEvent).css({
                            'transform': 'translate3d(' + -getMargin + 'px, 0 ,0)',
                        });
                    } else {
                        cmp.css('transform', 'translate3d(' + -scrollValue + 'px, 0 ,0)');
                    }

                    oldScrollValue = scrollValue;

                },5);
            }
            requestAnimationFrame(getUpdate);

            function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }

            // Max, Min values Function

            function _clamp(num, min, max) {
                return Math.min(Math.max(num, min), max);
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
                    "height": "100vh",
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
                    "height": "100vh"
                });
                getThis.remove();
            }
        })
    }
});


// Заменяем стандартные числа вроде 1000 на 1K

function transfromNumbers(number) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1).replace(/\.0$/, ' ') + 'G';
    }

    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    if(number < 1000) {
        return (number).toFixed(1).replace(/\.0$/, '') + '';
    }
}
var getTransformNumbers = $('.t-transformValue');
getTransformNumbers.each(function () {
    var getValues = $(this).text();
    getValues = parseInt(getValues);
    transfromNumbers(getValues);
    $(this).text(transfromNumbers(getValues));
});


// Document Ready Section
$(document).ready(function () {
    svg4everybody(); // Call SVG4EveryBody

    $('.t-selectArticleCategory').styler();
    var getThisSvg = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillArr" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_strokeArr" class="t-svgFigure" transform="translate(8 8)" fill="#E0E0E0"/><defs><path id="path0_fillArr" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_strokeArr" d="M5 0a1 1 0 0 0-2 0h2zM4 8l-.707.707a1 1 0 0 0 1.414 0L4 8zM.707 3.293A1 1 0 0 0-.707 4.707L.707 3.293zm8 1.414a1 1 0 0 0-1.414-1.414l1.414 1.414zM3 0v8h2V0H3zM-.707 4.707l4 4 1.414-1.414-4-4-1.414 1.414zm8-1.414l-4 4 1.414 1.414 4-4-1.414-1.414z"/></defs></svg>';
    $('.jq-selectbox__trigger-arrow').append(getThisSvg);
    $('.t-mainWrapper').append('<div class="t-overlay"></div>');
    $('.t-overlay').hide();
    var getMainPageName = $('.t-namePage').text();
    $('.t-pageHiddenName').text(getMainPageName);

    // var getModalContainer = $('.t-sortModalContainer');
    // function appendListElements() {
    //     var getListLength = $('.t-topListSorting li');
    //     var arrTo = Object.keys(getListLength).map(function (t) { return getListLength[t] });
    //     var newArr = arrTo.slice(6);
    //     var getBNewArr = newArr.slice(0, -2);
    //     getModalContainer.append(getBNewArr);
    //     $('.t-smallModalMenu li').each(function () {
    //         var text = $(this).text();
    //         $(this).html(text).removeClass('t-hiddenLink');
    //     });
    // }
    // appendListElements();

    // function setHeiHeight(element) {
    //     var getMain = $('main').height();
    //     $(element).css({
    //         "height": + getMain +"px",
    //         "margin-bottom": "20px"
    //     });
    // }
    // setHeiHeight('.t-authorCardWrapper'); // устанавливаем высоту окна при первой загрузке страницы

    // function menuMobileCtrl() {
    //     var getMenuContainerWidth = $('.t-sortMenuHolder').width();
    //     var getMenuListInsideWidth = 0;
    //     $('.t-topListSorting li').each(function () {
    //         getMenuListInsideWidth += ($(this).width() + parseInt($(this).css('margin-left')));
    //         var index = $(this).index() + 1;
    //         if(index !== 1){
    //             if(getMenuListInsideWidth > getMenuContainerWidth) {
    //                 $(this).addClass('invisible');
    //                 $('.js-menu-more li:nth-child('+index+')').show();
    //             } else {
    //                 $(this).removeClass('invisible');
    //                 $('.js-menu-more li:nth-child('+index+')').hide();
    //             }
    //             if(window.matchMedia('(max-width: 800px)').matches) {
    //                 $(this).addClass('invisible');
    //             }
    //         }
    //     });
    // }
    // menuMobileCtrl();

    function replaceThis(first, second, what) {
        if(window.matchMedia('(max-width: 500px)').matches) { // Можно переписать медиа запрос для этой функции. Сделать настраиваемым.
            $(first).append($(what));
        } else {
            $(second).append($(what));
        }
    }
    replaceThis('.t-commentAnswerAndRating', '.t-commentsAuthorHolder', '.t-commentsRating');

    function logoCtrl() {
        if(window.matchMedia('(max-width: 800px)').matches) {
            $('.t-mobHeader').append($('.t-logoSectionMain')).append($('.t-topRightSection'));
        } else {
            $('.t-asideInsideHolder').prepend($('.t-logoSectionMain'));
            $('.t-mainTopContentInside').append($('.t-topRightSection'));
        }
    }
    logoCtrl();
    function checkFilterWidthState() {
        if(window.matchMedia('(max-width: 800px)').matches) {
            $('body').on('click', '.t-openSmallModalMenu', function (e) {
                e.preventDefault();
                $('.t-overlay').fadeIn(400);
                $('.t-smallModalMenu').addClass('t-activeSmallModalMenu');
            });
        }
    }
    checkFilterWidthState();
    $(window).on('resize', function () {
        // setHeiHeight('.t-authorCardWrapper');
        // menuMobileCtrl();
        replaceThis('.t-commentAnswerAndRating', '.t-commentsAuthorHolder', '.t-commentsRating');
        logoCtrl();
        checkFilterWidthState();
    });

    $('.t-authorModalPhoto img').toBackGround(); // Инициализация подмены BackgroundА

    if(window.matchMedia('(min-width: 801px)').matches && !$('body').hasClass('t-scriptCtrl')) {
        // Инициализация Скролл плагина By SergiosVision
        $('.t-mainCardsHolder').horizontalScroll({
            scrollField: '.t-mainMain', // Определяет зону действия скролла
            thisChild: '.t-scrollBar', // Селектор ребёнка родительского блока
            hideElement: '.t-menuWrapper', // Элемент который нужно задвинуть :)
            bars: ".t-mainBurger", // Бургер меню,
            spring: 0.08,
            animation: true,
            getOdd: '.t-scrollBar:nth-child(odd)',
            getEvent: '.t-scrollBar:nth-child(even)'
        });
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

    } else {

    }


    //  Call Modals
    function checkRel() {
        if (!$('body').hasClass('t-relative')) {
            $('body').addClass('t-relative');
        }
    }

    // Click Events

    $('body').on('click', '.t-selectArticleCategory', function (e) {
        $('.jq-selectbox li').each(function () {
            if($(this).hasClass('selected')) {
                $(this).hide()
            } else {
                $(this).show();
            }
        });
        if($('.jq-selectbox').hasClass('opened')) {
            $('.jq-selectbox__trigger-arrow').css('transform', 'rotate(180deg)');
        } else {
            $('.jq-selectbox__trigger-arrow').css('transform', 'none');
        }
    });


    $('body').on('click', '.t-searchClose', function (e) {
        e.preventDefault();
        $('.t-searchSection').fadeOut(300);
        $('.t-overlay').fadeOut(300);
    });

    $('body').on('click', '.t-addArticleBtn', function (e) {
        e.preventDefault();
        $('.t-addArticleModalWrapper').fadeIn(300);
    });

    $('body').on('click', '.t-addArticleClose', function (e) {
        e.preventDefault();
        $('.t-addArticleModalWrapper').fadeOut(300);
    });


    $('body').on('click', '.t-editBtn',  function (e) {
        e.preventDefault();
        $(this).fadeOut(300);
        $(this).closest('.t-profileSettingsItem').find('.t-saveBtnsHolder').show(300).css('display', 'flex');
        $(this).closest('.t-profileSettingsItem').find('input').prop('disabled', false);
    });

    $('body').on('click', '.t-closeEdit',  function (e) {
        e.preventDefault();
        $(this).closest('.t-profileSettingsItem').find('.t-saveBtnsHolder').slideUp(300);
        $(this).closest('.t-profileSettingsItem').find('input').prop('disabled', true);
        $('.t-editBtn').fadeIn(300);
    });

    $('body').on('click', '.t-backSmallMenuBtn', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.t-smallModalMenu').removeClass('t-activeSmallModalMenu');
        $('.t-mobileMenu').removeClass('t-activeMobileMenu');
        $('.t-overlay').fadeOut(400);
    });

    $('body').on('click', '.t-searchBtn', function (e) {
        e.preventDefault();
        $('.t-overlay').fadeIn(400);
        $('.t-searchSection').fadeIn(500);
    });

    $('body').on('click', '.t-burger', function (e) {
        e.preventDefault();
        $('body').addClass('t-overflowH');
        $('.t-overlay').fadeIn(400);
        $('.t-mobileMenu').addClass('t-activeMobileMenu');

    });
    $('body').on('click', '.t-overlay', function (e) {
        e.preventDefault();
        $('.t-mobileMenu').removeClass('t-activeMobileMenu');
        $('.t-smallModalMenu').removeClass('t-activeSmallModalMenu');
        $('body').removeClass('t-overflowH');
        $('.t-searchSection').fadeOut(400);
        $('.t-overlay').fadeOut(400);
    });

    $('body').on('click', '.t-modalBack', function (e) {
        e.preventDefault();
        $('body').removeClass('modalActivate').removeClass('nowOpened').removeClass('t-overflow').removeClass('t-overflowCtrl');
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
        $('body').addClass('t-overflowX');
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
        $('body').addClass('t-overflow');
        if(window.matchMedia('(max-width: 768px)').matches) {
            var simpleBlock = $('.t-simpleBlock');
            simpleBlock.append($('.t-hiddenLogoWrapper').addClass('t-relative'));
            simpleBlock.append($('.t-profileModalButtonsHolder').addClass('t-removePos'));
        } else {
            // $('.t-authorModalPhoto').prepend($('.t-profileModalButtonsHolder').removeClass('t-removePos'));
        }
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
        $('.t-authorModal').show().addClass('turnAnimation');
        setTimeout(function () {
            $('.t-authorModal').removeClass('turnAnimation');
            $('.t-modalButtonsHolder').removeClass('t-hide');
            $('.t-hiddenLogoWrapper').addClass('activateBg');
            $('body').addClass('modalActivate');
            if(window.matchMedia('(max-width: 768px)').matches) {
                $('body').addClass('t-overflowCtrl');
            }
        },1300)
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});