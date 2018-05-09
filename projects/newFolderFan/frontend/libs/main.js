// Array From Polyfill
if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
}
// Array From Polyfill End

// Price range slider
function addSpace(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}

function fadeInV(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOutV(el){
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}


function getSelector(selector) {return document.querySelector(selector);}
function getAll(selectors) {return document.querySelectorAll(selectors);}
function callHook(s, call){for(var i=0;i<s.length;i++) {call(i)}}
function isM(ref, tag) {return ref.matches(tag);}


$(document).ready(function(){
    // Init simple Parallax

    function showDownEl(selector, secondSelector, thirdEl, startPoint, opacityCall) {
        var getEl = getSelector(selector),
            secondEl = getSelector(secondSelector),
            thirdEl = getSelector(thirdEl),
            getElPos = getEl.offsetTop,
            getElHeight = getEl.getBoundingClientRect().height;
        var getElNewPos = getElPos + getElHeight;
        var getScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var bodyOffset = document.body.scrollHeight;
        // var getZone = bodyOffset - getElNewPos;
        var getWinHeight = window.innerHeight;
        // var valueZone = (getScrollTop + getWinHeight) - getElNewPos;
        // var getAllNewZz = 100 / getZone * valueZone;
            if(getElNewPos <= (getScrollTop + getWinHeight)) {
                secondEl.style.bottom = (startPoint + (getScrollTop + getWinHeight - getElNewPos)/.9) + 'px';
                thirdEl.style.opacity = '1';
            } else {
                thirdEl.style.opacity = '0';
            }

    }
    // When some block visible
    function controlVisible(container) {
        var elementPosition = {
                top: window.pageYOffset + container.getBoundingClientRect().top,
                left: window.pageXOffset + container.getBoundingClientRect().left,
                right: window.pageXOffset + container.getBoundingClientRect().right,
                bottom: window.pageYOffset + container.getBoundingClientRect().bottom
            },
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
        return elementPosition.bottom > windowPosition.top &&
            elementPosition.top < windowPosition.bottom &&
            elementPosition.right > windowPosition.left &&
            elementPosition.left < windowPosition.right
    }

    // Get Document Height
    var getDocHeight = function () {
        var body = document.body,
            html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };
    // GetBottom Position Function
    var getBottomPosition = function (thisTrue, thisFalse) {
        var getScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var getWindowHeight = window.innerHeight;
        if(getScrollTop + getWindowHeight >= getDocHeight()) {
            thisTrue();
        } else {
            thisFalse();
        }
    };
    // getBottomPosition(function () {}, function () {}); // GetBottom Position call

    // Init ScrollSpy
    (function (sections, header, navItems) {
        'use strict';
        var lastId,
            getTopMenu = getSelector(header),
            getTopMenuHeight = getTopMenu.getBoundingClientRect().height;
        var menuItems = Array.from(getTopMenu.querySelectorAll(navItems));
        var getSections = getAll(sections);
        var scrollItemsArray = Array.from(getSections);
        var current;
        var id;
        window.addEventListener('scroll', function () {
            var getNewHeaderHeight = getTopMenu.getBoundingClientRect().height;
            var fromTop = this.scrollY + getTopMenuHeight;
            callHook(getSections, function (i) {
                if((getSections[i].offsetTop) - (window.innerHeight / 2) < fromTop) {current = getSections[i];}
            });
            id = scrollItemsArray.indexOf(current);
            if (lastId !== id) {
                lastId = id;
                callHook(menuItems, function (i) {menuItems[i].classList.remove('active');});
                menuItems[lastId].classList.add('active')
            }
        }, false);
    })('.t-mainSectionCtrl', 'header', '.t-navItemTrue a'); // Call ScrollSpy

    function getComputed (el) {return  window.getComputedStyle(getSelector(el), null);}
    function getComputedNotFix (el) {return  window.getComputedStyle(el, null);}

    function getCalculate(selectorChild, selectorParent) {
        var getCurrentPosition;
        var getChild = parseInt(getComputed(selectorChild).top);
        var getParent = parseInt(getComputed(selectorParent).height);
        getCurrentPosition = (getChild / getParent) * 100;
        return getCurrentPosition;
    }

    function getNewCalc() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            winHeight = document.documentElement.clientHeight,
            docHeight = document.documentElement.scrollHeight;
        var scrollPercent = (scrollTop) / (docHeight - winHeight) / 2;
        var scrollPercentRounded = Math.round((scrollPercent*100)*2);
        return scrollPercentRounded
    }

    var startPoint = parseInt(getComputed('.t-moon').bottom);

    function showHeader (header, addClass) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            getSelector(header).classList.add(addClass);
        } else {
            getSelector(header).classList.remove(addClass);
        }
    }

    window.addEventListener('scroll', function () {
        showDownEl('.t-contactsAndFeedBack', '.t-moon', '.t-moonGradient', startPoint, true);
        showHeader('header', 't-stickyHeader');
    }, false);

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.background').css('top',-(scrolled*0.15)+'px');
        $('.t-astronaut').css('top',-(scrolled*0.3)+'px');
    }

    function insertAfter(elem, refElem) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if(next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }


    function wrpF(query, tag) {
        callHook(query, function (i) {
            var crt = document.createElement(tag);
            var getClass = query[i].getAttribute('class');
            crt.classList.add(getClass+'Wrapper');
            query[i].parentNode.insertBefore(crt, query[i]);
            crt.appendChild(query[i]);
        })
    }
    wrpF(getAll('.t-customOptions'), 'div');

    function createElem(tag, addCl) {
        var createElem = document.createElement(tag);
        if (addCl === undefined) {
            return createElem;
        } else {
            createElem.classList.addMany(addCl);
            return createElem;
        }
    }
    DOMTokenList.prototype.addMany = function(classes) {
        var array = classes.split(' ');
        for (var i = 0, length = array.length; i < length; i++) {
            this.add(array[i]);
        }
    };

    function childrenAll(elements) {
        elements.reduce(function(result, element) {
            return result.concat([].slice.call(element.children));
        },[]);
    }

    // Create Styled Select option

    (function (select) {
        var hideParent = 'display: none; visibility: hidden; padding-right: 10px;';
        callHook(select, function (i) {
            var crtEl = createElem('div', 't-styledSelectorBox');
            var getHook = select[i];
            var caOpt = getHook.children;
            getHook.style.cssText = hideParent;
            getHook.parentNode.appendChild(crtEl);
            var getBox = getHook.nextSibling;
            getBox.innerText = getHook.children[0].innerText;
            var $list = createElem('ul', 't-listOptions');
            insertAfter($list,getBox);
            callHook(caOpt, function (i) {
                var crtLi = createElem('li', 't-options');
                crtLi.innerText = getHook.children[i].innerText;
                crtLi.setAttribute('data-value', getHook.children[i].value);
                $list.appendChild(crtLi);
            });
            var getChList = $list.children;
            getBox.addEventListener('click', function (e) {
                e.stopPropagation();
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    // this.nextSibling.style.display = 'none';
                    fadeOutV(this.nextSibling);
                } else {
                    this.classList.add('active');
                    fadeInV(this.nextSibling);
                    // this.nextSibling.style.display = 'block';
                }
            }, false);
            callHook(getChList, function (i) {
                getChList[i].addEventListener('click', function (e) {
                    e.stopPropagation();
                    if (getBox.classList.contains('active')) {
                        getBox.classList.remove('active');
                        getBox.nextSibling.style.display = 'none';
                    }
                    getBox.previousSibling.value = this.dataset.value;
                    getBox.innerText = this.innerText;
                },false);
            });
            window.addEventListener('click', function (e) {
                if(getBox.classList.contains('active')) {
                    getBox.classList.remove('active');
                    getBox.nextSibling.style.display = 'none';
                }
            })

        });
    })(getAll('.t-customOptions'));

    // Create Styled Select option End


// Constructor Start
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Split Text And Append Text in span. Function.
    function splitText(elem) {
        var wrapper = document.createElement('span');
        return elem.innerText.trim().split('').map(function (char) {
            var parent = wrapper.cloneNode();
            parent.insertAdjacentHTML('afterbegin', char === ' ' ? '&nbsp;' : char);
            return parent;
        });
    }
    // Create Container And append spans in this container.
    function appendText(elem) {
        var container = document.createElement('div');
        var getLetters = splitText(elem);
        callHook(getLetters, function (i) {container.appendChild(getLetters[i]);});
        elem.innerHTML = '';elem.appendChild(container);
    }
    function arcText(elem, radius, dir) {
        appendText(elem); // Call container with spans.
        var offset = 0,
            origin = 'center ' + (radius) + 'px',
            delta = (180/Math.PI),
            ch = parseInt(getComputedNotFix(elem.querySelector('span')).lineHeight, 10);

        if (dir === -1) {origin = 'center ' + (-radius + ch) + 'px';}
        var getSpanWr = elem.querySelectorAll('span');
        callHook(getSpanWr, function (i) {
            var getHook = getSpanWr[i];
            offset += parseInt(getComputedNotFix(getHook).fontSize, 10) / 2.1 / (radius-ch) * delta;
            getHook.setAttribute('rot', offset);
            offset += parseInt(getComputedNotFix(getHook).fontSize, 10) / 2.1 / (radius-ch) * delta;
        });
        callHook(getSpanWr, function (i) {
            var getHook = getSpanWr[i],
                rotate = (-offset * dir / 2) + getHook.getAttribute('rot') * dir,
                transform = 'rotate('+ rotate +'deg)';
            dir === -1 ? getHook.style.bottom = '0' : getHook.style.top = '0';
            getHook.classList.add('letter'+ i +'');
            getHook.style.left = '50%';
            getHook.style.marginLeft = -parseInt(getComputedNotFix(getHook).fontSize, 10) / 2.1 + 'px';
            getHook.style.position = 'absolute';
            getHook.style.transform = transform;
            getHook.style.transformOrigin = origin;
            getHook.style.webkitTransform = transform;
            getHook.style.webkitTransformOrigin = origin;

        })
    }
    // arcText(getSelector('.t-constructorStickerTextOne div'), 127, 1); // Call Arc Text Function Top Direction
    // arcText(getSelector('.t-constructorStickerTextTwo div'), 127, -1); // Call Arc Text Function Bottom Direction

    // Quantity Control Function

    function closestV (elements, find) {
        elements.map(function (element) {
            return element.closest(find);
        })
    }

    function quantityControl(t, checkClass, findClass) {
        var b = t;
        var getInput = b.parentNode.parentNode.querySelector('input');
        if (b.classList.contains(checkClass)) {
            var getPlusNewVal = parseInt(getInput.value) + 1;
        } else {
            if (getInput.value > 0) {
                var getPlusNewVal = parseInt(getInput.value) - 1;
            } else {getPlusNewVal = 0;}
        }
        getInput.value = getPlusNewVal;
        checkNull(b, getInput, findClass);
    }
    // Add Checking Data Attr
    function addDataCheck(t, checkClass, ch) {
        var b = t;
        var getInput = ch ==='qty'?b.parentNode.parentNode.querySelector('input'):b;
        var getQ = ch ==='qty'?b.parentNode.parentNode.parentNode.parentNode.querySelector(checkClass):b.parentNode.parentNode.parentNode.querySelector(checkClass);
        if (parseInt(getInput.value) === 0 || getInput.value === '') {
            getQ.setAttribute('data-check', 'false');
        } else {
            getQ.setAttribute('data-check', 'true');
        }
    }
    // Check null function
    function checkNull(getThis, getInput, findClass) {
        var getMainParent = getThis.parentNode.parentNode.parentNode.parentNode.querySelector(findClass);
        if (parseFloat(getInput.value) === parseFloat(0)) {
            getMainParent.style.opacity = '0.5';
        } else {
            getMainParent.style.opacity = '1';
        }
    }
    // Focus Function
    function checkNullNewFocus(t, findClass) {
        var b = t;
        var getC = b.parentNode.parentNode.parentNode.querySelector(findClass);
        var numberPattern = new RegExp('^\\d*\\.?\\d+$');
        if(b.value.match(numberPattern)) {
            if (b.value === '' || parseInt(b.value) === parseInt(0)) {
                getC.style.opacity = '.5';
                b.value = 0;
            } else {
                getC.style.opacity = '1';
            }
        } else {
            getC.style.opacity = '.5';
            b.value = 0;
        }
    }
    // Value in top of card KeyUp
    function setNullTopCard(t, findQClass) {
        var b = t;
        var numberPattern = new RegExp('^\\d*\\.?\\d+$');
        var getQ = b.parentNode.parentNode.parentNode.querySelector(findQClass);
        if(b.value.match(numberPattern)) {
            if (b.value === '') {getQ.innerText = '0';} else {getQ.innerText = b.value;}
        } else {getQ.innerText = '0';}
    }
    function pickColorAndImgs(t, elem, ev, getAllClicks) {
        var b = t;
        var getDataVal = ev === 'color'?b.dataset.color:b.dataset.img;
        var getAllEls = getAll(elem);
        function classCtrl(nList, cl, thisClick) {
            callHook(nList, function (i) {nList[i].classList.remove(cl);});
            if(!thisClick.classList.contains(cl)) {thisClick.classList.add(cl);}
        }
        callHook(getAllEls, function (i) {
            if (ev === 'color') {
                classCtrl(getAllClicks, 'active', b);
                if (getAllEls[i].style.backgroundColor !== getDataVal) {getAllEls[i].style.backgroundColor = getDataVal;}
            } else {
                classCtrl(getAllClicks, 'active', b);
                if(getAllEls[i].style.backgroundImage !== getDataVal) {
                    getAllEls[i].style.backgroundImage = 'url("'+ getDataVal +'")';
                }
            }
        })
    }
    function catchText(t, output, c, check) {
        var b = t;
        var getAllOut = getAll(output);
        function checkFields(f, a, b) {f.value.length>0?a():b();}
        if (b.value.length <= 20) {
            callHook(getAllOut, function (i) {
                if (i === 0) {
                    if (check === 'top') {
                        checkFields(b, function () {
                            getSelector(c).innerText = b.value;
                            arcText(getSelector(c), 127, 1); // Call Arc Text Function Top Direction
                        }, function () {
                            clearFS(b, getAllOut[i]);
                        });
                    } else {
                        checkFields(b, function () {
                            getSelector(c).innerText = b.value;
                            arcText(getSelector(c), 127, -1); // Call Arc Text Function Bottom Direction
                        }, function () {
                            clearFS(b, getAllOut[i]);
                        });
                    }
                } else {getAllOut[i].innerText = b.value;}
            })
        } else {b.value = b.value.substr(0, 20);}
    }
    function clearFS(t, clearSection) {
        var b = t;
        var getLength = b.value.length;
        if (getLength <= 0) {clearSection.innerText = '';}
    }
    function catchFont(t, containers) {
        var b = t;
        var getAllContainers = getAll(containers);
        callHook(getAllContainers, function (i) {
            getAllContainers[i].setAttribute('data-font', b.dataset.value)
        })
    }

    function checkForNullNew(cards) {
        callHook(cards, function (i) {
            console.log(cards[i].matches('input'))
        });
    }
    
    
    function switchContainers (t, refContainer, direction) {
        var b = t;
        var getElements = refContainer.children[0];
        var createBtn = createElem('button', 't-addCartBtn t-btn');
        createBtn.setAttribute('disabled', 'true');
        createBtn.appendChild(createElem('span'));
        createBtn.querySelector('span').innerText = 'Добавить в корзину';
        function workRemove(elem, cl) {
            elem.classList.remove(cl);
            elem.style.display='none';
            console.log(elem);
        }
        function workAdd(elem, cl) {
            elem.classList.add(cl);
            elem.style.display='block';
        }
        function goForward(element, getClass) {
            if(!element.classList.contains(getClass)) {
                workRemove(element.nextElementSibling, getClass);
                workAdd(element, getClass);
                b.previousElementSibling.style.display='block';
            } else {
                workRemove(element, getClass);
                workAdd(element.nextElementSibling, getClass);
                b.style.display='none';
                insertAfter(createBtn,b);
            }
        }
        function goBack(element, getClass) {
            if(element.classList.contains(getClass)) {
                workRemove(element, getClass);
                b.style.display='none';
            } else {
                workRemove(element.nextElementSibling, getClass);
                b.nextElementSibling.nextElementSibling.parentNode.removeChild(b.nextElementSibling.nextElementSibling);
                workAdd(element, getClass);
                b.nextElementSibling.style.display='block';
            }
        }
        if(direction === 'forward') {
            goForward(getElements, 'active');
        } else {
            goBack(getElements, 'active');
        }
    }

    // All Constructor Events
    //Variables
    var getListOptions = getAll('.t-inputItem .t-listOptions li');
    var getButtons = getAll('.t-constructorStickerCardQuantityBtn');
    var getColorPick = getAll('.t-constructorMainColorPicker li');
    var getImgPick = getAll('.t-constructorMainImgPicker li');
    var getQWrapper = getAll('.t-constructorStickerCardQuantityWr input');
    var getFirstField = getSelector('.t-constructorFirstTextField input');
    var getSecondField = getSelector('.t-constructorSecondTextField input');
    var getQCont = getAll('.t-constructorStickerCardQuantityWr');
    var getNextButton = getSelector('.t-constructorNextButton');
    var getPrevButton = getSelector('.t-constructorPrevButton');
    var getSettingsWrapper = getSelector('.t-constructorMainStickersSettingsWrapper');


    getNextButton.addEventListener('click', function () {
        switchContainers(this, getSettingsWrapper, 'forward');
    }, false);
    getPrevButton.addEventListener('click', function () {
        switchContainers(this, getSettingsWrapper);
    }, false);

    callHook(getListOptions, function (i) {
        getListOptions[i].addEventListener('click', function (e) {
            catchFont(this, '.t-constructorStickerCardHolder', 't-');
        }, false);
    });
    callHook(getButtons, function (i) {
        getButtons[i].addEventListener('click', function (e) {
            var check = 't-plus'?'t-plus':'t-minus';
            quantityControl(this, check, '.t-constructorStickerCard'); // Quantity Control Function Call
            addDataCheck(this, '.t-constructorStickerCardHTop', 'qty');
            // checkForNullNew(getQCont);
        }, false);
    });
    callHook(getColorPick, function (i) {
        getColorPick[i].addEventListener('click', function () {
            pickColorAndImgs(this, '.t-constructorStickerCard', 'color', getColorPick);
        },false)
    });
    callHook(getImgPick, function (i) {
        getImgPick[i].addEventListener('click', function () {
            pickColorAndImgs(this, '.t-constructorStickerCard .t-constructorStickerImg div', '' , getImgPick);
        },false)
    });
    callHook(getQWrapper, function (i) {
        getQWrapper[i].addEventListener('keyup', function () {
            addDataCheck(this, '.t-constructorStickerCardHTop');
        });
    });
    getFirstField.addEventListener('keyup', function () {
        catchText(this, '.t-constructorStickerTextOne span, .t-constructorStickerTextOne div', '.t-constructorStickerTextOne div', 'top')
    }, false);
    getSecondField.addEventListener('keyup', function () {
        clearFS(this, '.t-constructorStickerTextTwo span, .t-constructorStickerTextTwo div');
        catchText(this, '.t-constructorStickerTextTwo span, .t-constructorStickerTextTwo div', '.t-constructorStickerTextTwo div');
    }, false);
    callHook(getQWrapper, function (i) {
        getQWrapper[i].addEventListener('focusout', function () {
            checkNullNewFocus(this, '.t-constructorStickerCard');
            addDataCheck(this, '.t-constructorStickerCardHTop');
            // checkForNullNew(getQCont);
        });
    });
    // All Constructor Events End
});

// Constructor End
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).on('load', function () {
    $('html, body').animate({scrollTop:0}, 10);
    $('body').removeClass('t-animeOne');
    $('.t-astronaut').removeClass('t-blockHidden');
    $('.t-figureContainer').removeClass('t-blockHidden');
    $('.t-loadingLogo').removeClass('t-blockHidden');
    setTimeout(function () {
        $('.background').removeClass('topBackground');
    },1900);
    setTimeout(function () {
        $('.t-jumboWrapper').removeClass('t-blockHidden');
        $('.t-jumboWrapper').addClass('t-showThis');
    },2000);
    setTimeout(function () {
        $('.t-jumboInfoHeader, .t-jumboInfoFooter').removeClass('t-blockHidden');
    },2100);
    setTimeout(function () {
        $('.t-jumboInfoBody').removeClass('t-blockHidden');
    },2300);
    setTimeout(function () {
        $('.t-allCategories').removeClass('t-blockHidden');
        $('.t-allCategories').addClass('t-showThis');
    },3000);
    setTimeout(function () {
        $('.t-brands').removeClass('t-blockHidden');
        $('.t-brands').addClass('t-showThis');
        $('body').removeClass('t-windowLoading');
        $('body').removeClass('fixed');
    },3100);
    setTimeout(function () {
        $('header').removeClass('t-blockHidden');
    },3200);
    setTimeout(function () {
        $('.background').removeClass('animation');
    },5900);

    // var getFrame = document.querySelector('.t-frame');
    // function randomVa() {
    //    var num = Math.random() * 12;
    //     getFrame.style.borderRadius = num + 'px';
    // }
    // function randomFrame() {
    //     var getFrame = document.querySelector('.t-frame');
    //     var offsetLeft = Math.random() * (window.innerWidth - getFrame.clientWidth);
    //     // random num for top offset
    //     var offsetTop = Math.random() * (window.innerHeight - getFrame.clientHeight);
    //
    //     console.log(offsetLeft, offsetTop);
    //
    //     getFrame.style.left = offsetLeft + 'px';
    //     getFrame.style.top = offsetTop + 'px';
    //     getFrame.style.transform = 'rotate('+ offsetTop +'deg)';
    //     getFrame.style.transform = 'skew('+ offsetTop +'deg, '+ offsetLeft+'deg)';
    //     getFrame.style.borderRadius = offsetTop + 'px';
    // }
    // randomFrame();
    // setInterval(function () {
    //     randomVa();
    // },3000)


    // Accordeon

    var getAccordBtn = $('.t-openAccordItem');
    var getAccordContent = $('.t-accordItemContent');

    $('body').on('click', '.t-openAccordItem', function () {
        if($('body').hasClass('animate')){
            return false;
        }
        $('body').addClass('animate');
        if ($(this).parent().hasClass('isActive')){
            $(this).next(getAccordContent).slideUp(400);
            $(this).parent().removeClass('isActive');
        } else {
            $(getAccordBtn).not(this).next(getAccordContent).slideUp(400);
            $(getAccordBtn).not(this).parent().removeClass('isActive');

            $(this).next(getAccordContent).slideDown(400);
            $(this).parent().addClass('isActive');
        }
        setTimeout(function () {
            $('body').removeClass('animate');
        }, 400);
    });



});


// Cart Ctrl

$(function () {
   $('.t-addToCart').on('click', function () {
      $(this).each(function () {
          var getNameGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsNameMain').html();
          var getImgGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsImgMain').attr('src');
          var getPriceGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsPriceMain').html();
          var smallCartItem = '<li class="t-smallCartItem">' +
                                  '<div class="t-smallCartItemImg"><img src="'+ getImgGoods +'"></div>' +
                                  '<div class="t-smallCartItemPriceAndName">' +
                                        '<h4 class="t-smallCartItemName">'+ getNameGoods +'</h4>' +
                                        '<span class="t-smallCartPrice">'+ getPriceGoods +'</span>' +
                                  '</div>' +
                              '</li>';
          $('.t-smallCartBody').append(smallCartItem);
          console.log(getNameGoods, getImgGoods, getPriceGoods)
      });
      if($('.t-smallCartItem').length > 0) {
          var getCartBodyLe = $('.t-smallCartItem').length;
          $('.t-smallCartBody').addClass('t-smallCartBodyActive');
          $('.t-smallCartTitleInfo').text('Товаров - '+ getCartBodyLe);
          $('.t-smallCartTotalPrice').addClass('activeTotal');
          $('.t-smallCartBtnInfo').attr('href', '/cart.html');
          $('.t-smallCartBtnInfo span').text('Перейти в корзину');
          $('.t-smallCartOpen').addClass('t-hasGoodsInCart');
      } else {
          $('.t-smallCartOpen').removeClass('t-hasGoodsInCart');
      }
      var totalPriceCount = 0;
      $('.t-smallCartPrice').each(function () {
          var eachPrice = parseInt($(this).text());
          totalPriceCount+= eachPrice;
      });
      $('.t-smallCartTotalPrice').text(addSpace(totalPriceCount + ' ' + '₽'));
   });
});