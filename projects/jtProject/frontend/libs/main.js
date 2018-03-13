// Editor
var editor = new MediumEditor('.editable', {
        toolbar: {
            // buttons: ['bold','italic','anchor','quote','h2','h3'],
            buttons: [{
                name: 'bold',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillBold" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillBold" class="t-svgFigure" transform="translate(8 6)" fill="#E0E0E0"/><defs><path id="path0_fillBold" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillBold" fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h2.046C6.168 0 7.62 2.144 6.83 4.114l-.368.921A3 3 0 0 1 9 8v1a3 3 0 0 1-3 3H2a2 2 0 0 1-2-2V2zm4.323 3l.651-1.629A1 1 0 0 0 4.046 2H2v2a1 1 0 0 0 1 1h1.323zM3 7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3z"/></defs></svg>'
            }, {
                name: 'italic',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillItalic" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillItalic" class="t-svgFigure" transform="translate(11 6)" fill="#E0E0E0"/><defs><path id="path0_fillItalic" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillItalic" fill-rule="evenodd" d="M1 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1 3a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0V5z"/></defs></svg>'
            }, {
                name: 'anchor',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillLink" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillLink" class="t-svgFigure" transform="translate(7 6)" fill="#E0E0E0"/><defs><path id="path0_fillLink" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillLink" fill-rule="evenodd" d="M8 3.5a1.5 1.5 0 1 0-3 0v.837c.725.344 1.313.93 1.66 1.655A1.5 1.5 0 0 0 8 4.5v-1zM7 7.964A3.5 3.5 0 0 0 10 4.5v-1a3.5 3.5 0 1 0-7 0v.536A3.5 3.5 0 0 0 0 7.5v1a3.5 3.5 0 1 0 7 0v-.536zM3.34 6.008c.347.724.935 1.31 1.66 1.655V8.5a1.5 1.5 0 1 1-3 0v-1a1.5 1.5 0 0 1 1.34-1.492z"/></defs></svg>'
            }, {
                name: 'quote',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillQuote" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillQuote" class="t-svgFigure" transform="translate(9 6)" fill="#E0E0E0"/><defs><path id="path0_fillQuote" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillQuote" fill-rule="evenodd" d="M2 1a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0V1zm4 0a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0V1z"/></defs></svg>',
            }, {
                name: 'h2',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillH1" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillH1" class="t-svgFigure" transform="translate(7 6)" fill="#E0E0E0"/><defs><path id="path0_fillH1" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillH1" fill-rule="evenodd" d="M1 0a1 1 0 0 1 1 1v4h6V1a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7H2v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z"/></defs></svg>'
            }, {
                name: 'h3',
                contentDefault: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillH2" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_fillH2" class="t-svgFigure" transform="translate(8 7)" fill="#E0E0E0"/><defs><path id="path0_fillH2" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_fillH2" fill-rule="evenodd" d="M1 0a1 1 0 0 1 1 1v3h4V1a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z"/></defs></svg>'
            }
            ]
        },
        anchor: {
            placeholderText: 'Введите ссылку',
        },
        paste: {
            cleanPastedHTML: true,
            cleanAttrs: ['style', 'dir'],
            cleanTags: ['label', 'meta'],
            unwrapTags: ['sub', 'sup']
        },
        autoLink: true
    }),
    cssLink = document.getElementsByClassName('getStyles');

$(function () {
    $('.editable').mediumInsert({
        editor: editor
    });
});



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
            value = 0,
            eventThis;

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
                // $(options.scrollField).bind("DOMMouseScroll mousewheel wheel", function (event) {
                //     scrollThis();
                //     event.preventDefault();
                // });
                $(options.scrollField).on('mousewheel', function(event) {
                    scrollThis(event);
                    event.preventDefault();
                });
            }

            function pos() {
                var pos = $(options.thisChild).last().position().left + $(options.thisChild).last().width() - $(window).width() + 7;
                return pos;
            }

            function scrollThis(event) {

                value += event.deltaY * -1;
                scrollTarget += event.deltaY * 1;
                scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, pos())));

                if (event.deltaY > 0) {
                    direction = 1;
                    if(scrollTarget > 0) {
                        $(options.hideElement).css({"transform": "translateX(-150%)", "transition": ".6s ease-in-out", "opacity":'0'});
                        $(options.bars).css({"left": "6px"});
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
            
            function getUpdate(event) {

             interval = setInterval(function () {
                 // var setBack = debounce(function(){
                 //     cmp.css('width', ''+ getStartWidth +'px');
                 //     console.log('width setted')
                 // }, 100);
                 //
                 // setBack();
                    // Get Scroll Value
                    scrollValue += (scrollTarget - scrollValue) * options.spring;


                    var newValue = (event.deltaY - scrollTarget) / scrollValue;
                    var newValSec = (newValue * 5) / 2;
                    console.log(newValSec)

                    // Get Delta

                    var delta = scrollTarget - scrollValue;

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

            // function debounce(func, wait, immediate) {
            //     var timeout;
            //     return function() {
            //         var context = this, args = arguments;
            //         var later = function() {
            //             timeout = null;
            //             if (!immediate) func.apply(context, args);
            //         };
            //         var callNow = immediate && !timeout;
            //         clearTimeout(timeout);
            //         timeout = setTimeout(later, wait);
            //         if (callNow) func.apply(context, args);
            //     };
            // }

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

function sliceText(element, minValue, maxValue) {
    $(element).each(function () {
        var getTextValue = $(this).text();
        if(getTextValue.length >= maxValue) {
            getTextValue = getTextValue.slice(minValue, maxValue) + '...';
            $(this).text(getTextValue);
        }
    })
}

sliceText('.t-authorModalArticleCard .t-authorArticleCardTitle', 0, 49); // Селектор, минимальное число и максимальное.
sliceText('.t-authorCardWrapper .t-authorName', 0, 19); // Селектор, минимальное число и максимальное.

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
    var getCloseSvg = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillCloser" class="t-svgBg" fill="#FFF"/><use xlink:href="#path1_strokeCloser" transform="translate(9 9)" class="t-svgFigure" fill="#E0E0E0"/><defs><path id="path0_fillCloser" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/><path id="path1_strokeCloser" d="M.707-.707A1 1 0 0 0-.707.707L.707-.707zm4.586 7.414a1 1 0 0 0 1.414-1.414L5.293 6.707zm-6-1.414A1 1 0 0 0 .707 6.707L-.707 5.293zM6.707.707A1 1 0 0 0 5.293-.707L6.707.707zm-7.414 0l6 6 1.414-1.414-6-6L-.707.707zm1.414 6l6-6L5.293-.707l-6 6L.707 6.707z"/></defs></svg>';
    $('.medium-editor-toolbar-close').html(getCloseSvg);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function callMoveAnimations() {

        if (window.matchMedia('(min-width: 801px)').matches) {

            $('.t-topListCtrl li, .t-btn, .t-modalShare, .t-modalFavorites, .t-burger, .t-closeEdit, .t-editBtn, .t-closePos, .t-modalBack, .medium-editor-toolbar-close svg').each(function () {
                if (!$(this).hasClass('active')) {
                    $(this).addClass('pointer').addClass('cursorWatcher');
                    $(this).attr('data-range', '1.2');
                } else {
                    $(this).addClass('pointer');
                }
            });

            $('.t-btnModeration').attr('data-range', '0.5');
            

            var $dot = $('.dot'),
                $loader = $('.cursor .loading'),
                inter = 30,
                speed = 0;

            // $dot.css('opacity', '1');
            //
            // function moveBox(e) {
            //     var timesel = 0.3;
            //     // if ($drag.hasClass('grab')) {
            //     //     timesel = 0.05
            //     // }
            //     $dot.each(function(index, val) {
            //         if (!$(this).hasClass('fixit')) {
            //             if (index == 1) {
            //                 TweenLite.to($(this), timesel, {
            //                     css: {
            //                         left: e.pageX,
            //                         top: e.pageY
            //                     },
            //                     delay: 0 + (index / 750)
            //                 })
            //             } else {
            //                 TweenLite.to($(this), 0.05, {
            //                     css: {
            //                         left: e.pageX,
            //                         top: e.pageY
            //                     },
            //                     delay: 0 + (index / 750)
            //                 })
            //             }
            //         } else {
            //             TweenLite.to($(this), timesel, {
            //                 css: {
            //                     opacity: 1,
            //                     scale: 1
            //                 },
            //                 delay: 0 + (index / 750)
            //             })
            //         }
            //     })
            // }
            //
            // $(document).on('mousemove', moveBox);



            var showPointBase = [30, 30];

            function showPoint(e) {
                busy = !0;
                if ($(e.target).hasClass('fixpoint')) {
                    $dot.eq(1).addClass('fixit');
                    var fixtarget = $(e.target).find('.fixtarget')
                } else if ($(e.target).closest('.fixpoint').length) {
                    $dot.eq(1).addClass('fixit');
                    var fixtarget = $(e.target)
                }
                if ($(e.target).hasClass('fixpoint') || $(e.target).closest('.fixpoint').length) {
                    var subadd = 10;
                    twidth = $(fixtarget).width() + subadd, theight = $(fixtarget).height() + subadd, pos = $(fixtarget).offset(), posTop = pos.top + subadd, posLeft = pos.left + subadd;
                    TweenLite.to($dot.eq(1), 0.5, {
                        scale: 1,
                        width: twidth,
                        height: theight,
                        left: posLeft,
                        top: posTop,
                        opacity: 1,
                        overwrite: "all",
                        ease: Circ.easeOut
                    })
                }
            }

            function hidePoint(e) {
                $dot.eq(1).removeClass('fixit');
                busy = !1;
                TweenLite.to($dot.eq(1), 0.3, {
                    scale: 1,
                    width: showPointBase[0],
                    height: showPointBase[1],
                    marginTop: -showPointBase[1] / 2,
                    marginLeft: -showPointBase[0] / 2,
                    opacity: 1,
                    overwrite: "all",
                    ease: Circ.easeOut
                })
            }



            $('.pointer, .t-newsCardWrapper, .medium-editor-toolbar, .medium-editor-toolbar-form').hover(function() {
                TweenLite.to($dot.eq(0), 0.1, {
                    opacity: 0,
                    repeat: 0,
                    delay: 0,
                    overwrite: "all",
                    ease: Circ.easeInOut
                });
                TweenLite.to($dot.eq(1), 0.3, {
                    scale: 0,
                    opacity: 0,
                    repeat: 0,
                    delay: 0,
                    overwrite: "all",
                    ease: Circ.easeInOut
                })
            }, function() {
                TweenLite.to($dot.eq(0), 0.1, {
                    opacity: 1,
                    repeat: 0,
                    delay: 0,
                    overwrite: "all",
                    ease: Circ.easeInOut
                });
                TweenLite.to($dot.eq(1), 0.3, {
                    scale: 1,
                    opacity: 1,
                    repeat: 0,
                    delay: 0,
                    overwrite: "all",
                    ease: Circ.easeInOut
                })
            });

            $(document).mouseleave(function() {
                $dot.each(function(index, val) {
                    TweenMax.set($(this), {
                        scale: 0,
                        delay: 0
                    })
                })
            });
            $(document).mouseenter(function() {
                $dot.each(function(index, val) {
                    TweenMax.set($(this), {
                        scale: 1,
                        delay: 0
                    })
                })
            });


            $(".cursorWatcher").each(function(index) {
                $(this).hover(function() {
                    $(this).addClass('hovered');
                    $('html, body, .t-profile a').css('cursor', 'none');
                }, function() {
                    $(this).removeClass('hovered');
                    $('html, body, .t-profile a').removeAttr('style');
                    $(this).css({
                        transform: 'translate3d(0px, 0px, 0px)'
                    })
                });
                $(this).mousemove(function(e) {
                    var power = $(this).data('range');
                    const bounds = this.getBoundingClientRect();
                    const centerX = bounds.left + (bounds.width / 2);
                    const centerY = bounds.top + (bounds.height / 2);
                    const deltaX = Math.floor((centerX - e.clientX)) * power * -1;
                    const deltaY = Math.floor((centerY - e.clientY)) * power * -1;
                    TweenLite.to($(this), 0, {
                        x: deltaX,
                        y: deltaY,
                    })
                })
            });
        }
    }
    callMoveAnimations();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
    
    function calcActive() {
        var getListOffset = $('.t-menuList').offset().left;
        $('.t-menuListItem.active:before').css('left', '-'+ getListOffset +'px');
    }
    calcActive();
    
    $(window).on('resize', function () {
        // setHeiHeight('.t-authorCardWrapper');
        // menuMobileCtrl();
        replaceThis('.t-commentAnswerAndRating', '.t-commentsAuthorHolder', '.t-commentsRating');
        logoCtrl();
        checkFilterWidthState();
        callMoveAnimations();
        calcActive();
    });

    $('.t-authorModalPhoto img, .t-profileImgHolder img').toBackGround(); // Инициализация подмены BackgroundА

    if(window.matchMedia('(min-width: 801px)').matches && !$('body').hasClass('t-scriptCtrl')) {
        // Инициализация Скролл плагина By SergiosVision
        $('.t-mainCardsHolder').horizontalScroll({
            scrollField: '.t-mainMain', // Определяет зону действия скролла
            thisChild: '.t-scrollBar', // Селектор ребёнка родительского блока
            hideElement: '.t-menuWrapper', // Элемент который нужно задвинуть :)
            bars: ".t-mainBurger", // Бургер меню,
            spring: 0.08,
            animation: false,
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

    function checkColor() {
        if ($('.jq-selectbox__select-text').text() === 'Выберите рубрику') {
            $('.jq-selectbox__select-text').css('color', '#ccc')
        } else {
            $('.jq-selectbox__select-text').removeAttr('style')
        }
    }
    checkColor();

    $('body').on('click', '.t-selectArticleCategory', function (e) {
        $('.jq-selectbox li').each(function () {
            if($(this).hasClass('selected')) {
                $(this).hide()
            } else if ($(this).hasClass('dontUse')) {
                $(this).hide();
            } else {
                $(this).show();
            }
            checkColor();
        });
        if($('.jq-selectbox').hasClass('opened')) {
            $('.jq-selectbox__trigger-arrow').css('transform', 'rotate(180deg)');
        } else {
            $('.jq-selectbox__trigger-arrow').css('transform', 'none');
        }
    });


    $('body').on('click', '.t-searchClose', function (e) {
        e.preventDefault();
        $('.t-searchSection').fadeOut(300).removeClass('mainModalCrtl');
        $('.t-overlay').fadeOut(300);
    });

    $('body').on('click', '.t-addArticleBtn', function (e) {
        e.preventDefault();
        $('.t-addArticleModalWrapper').fadeIn(300).addClass('mainModalCrtl');
    });

    $('body').on('click', '.t-addArticleClose', function (e) {
        e.preventDefault();
        $('.t-addArticleModalWrapper').fadeOut(300).removeClass('mainModalCrtl');
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
        $(this).closest('.t-profileSettingsItem').find('.t-editForm').trigger('reset');
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
        $('.t-searchSection').fadeIn(500).addClass('mainModalCrtl');
    });

    $('body').on('click', '.t-burger', function (e) {
        e.preventDefault();
        $('body').addClass('t-overflowH');
        $('.t-overlay').fadeIn(400);
        $('.t-mobileMenu').addClass('t-activeMobileMenu').addClass('mainModalCrtl');

    });
    $('body').on('click', '.t-overlay', function (e) {
        e.preventDefault();
        $('.t-mobileMenu').removeClass('t-activeMobileMenu').removeClass('mainModalCrtl');
        $('.t-smallModalMenu').removeClass('t-activeSmallModalMenu');
        $('body').removeClass('t-overflowH');
        $('.t-searchSection').fadeOut(400).removeClass('mainModalCrtl');
        $('.t-overlay').fadeOut(400);
    });

    
    function closeMainModals() {
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
            $('.t-newsHiddenHeader').removeClass('activeThis');
            setTimeout(function () {
                $('.t-newsModal').removeClass('closeAnim').hide();
            },1000)
        }
    }

    $('body').on('click', '.t-modalBack', function (e) {
        e.preventDefault();
        closeMainModals();
    });

    $(document).on('keydown', function (e) {
        if(e.keyCode == 27) {
            e.preventDefault();
            $('body').removeClass('t-overflowX').removeClass('t-overflowH');
            if ($('.t-mobileMenu').hasClass('mainModalCrtl')) {
                $('.t-mobileMenu').removeClass('t-activeMobileMenu').removeClass('mainModalCrtl');
                $('.t-overlay').fadeOut(400);
            } else if ($('body').hasClass('modalActivate') && !$('.t-mobileMenu').hasClass('mainModalCrtl')) {
                closeMainModals();
                $('.t-newsHiddenHeader').removeClass('activeThis');
            }
            if($('.t-addArticleModalWrapper').hasClass('mainModalCrtl')) {
                $('.t-addArticleModalWrapper').fadeOut(300).removeClass('mainModalCrtl');
            }
            if($('.t-searchSection').hasClass('mainModalCrtl')) {
                $('.t-searchSection').fadeOut(400).removeClass('mainModalCrtl');
                $('.t-overlay').fadeOut(400);
            }
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


// Menu cursor watcher

$(function () {
    var element, topPos,
        navigation = $('.t-menuWrapper .t-menuList, .t-mobileMenuWrapper .t-menuList');

    navigation.append('<li class="lineMenu"></li>');
    var getThisLine = $('.lineMenu');


    getThisLine
        .css('top', $('.t-menuListItem.active').position().top + 9)
        .data('origTop', getThisLine.position().top);


    $('.t-menuListItem').hover(function () {
        element = $(this);
        topPos = element.position().top;

        getThisLine.css('top', topPos + 9)

    }, function () {
        getThisLine.css('top', getThisLine.data('origTop'));
    });

})


$(window).on('scroll', function () {
    var $this = $(this);
    if($('body').hasClass('modalActivate')) {
        if ($this.scrollTop() >= 400) {
            $('.t-newsHiddenHeader').addClass('activeThis');
        } else {
            $('.t-newsHiddenHeader').removeClass('activeThis');
        }
    }
});


});