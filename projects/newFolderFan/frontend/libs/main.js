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

function postXhr (url, data, csrf, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(JSON.parse(xhr.responseText)); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('X-CSRF-TOKEN', csrf);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
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
                // secondEl.style.bottom = (startPoint + (getScrollTop + getWinHeight - getElNewPos)/.9) + 'px';
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

    // Insert After Function
    function insertAfter(elem, refElem) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if(next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }

    // Wrap Element Function
    function wrpF(query, tag) {
        callHook(query, function (i) {
            var crt = document.createElement(tag);
            var getClass = query[i].getAttribute('class');
            crt.classList.add(getClass+'Wrapper');
            query[i].parentNode.insertBefore(crt, query[i]);
            crt.appendChild(query[i]);
        })
    }
    wrpF(getAll('.t-customOptions'), 'div'); // Call Wrap Element Function

    // Create Element Function
    function createElem(tag, addCl) {
        var createElem = document.createElement(tag);
        if (addCl === undefined) {
            return createElem;
        } else {
            createElem.classList.addMany(addCl);
            return createElem;
        }
    }
    // Add Many Classes function
    DOMTokenList.prototype.addMany = function(classes) {
        var array = classes.split(' ');
        for (var i = 0, length = array.length; i < length; i++) {
            this.add(array[i]);
        }
    };
    // Check input fields on null
    function checkInputsNull(elemArr, count, all, a, b) {
        callHook(elemArr, function (i) {
            if(+elemArr[i].value === 0){count++;}
        });
        if (all === 'all') {
            count === elemArr.length?a():b();
        } else {
            count === elemArr.length - 1?a():b();
        }
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
                    fadeOutV(this.nextSibling);
                } else {
                    this.classList.add('active');
                    fadeInV(this.nextSibling);
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


    function getPosition(element) {
        var position = {
            top: element.offsetTop,
            left: element.offsetLeft
        };
        return position;
    }

    (function (t, findEl) {
        var scrollLeft = 0, scrollTarget = 0, scrollValue = 0;
        var b = getSelector(t);
        var grabCards = b.querySelectorAll(findEl);
        var getLastEl = grabCards[grabCards.length - 1];
        var getLeftPos = getPosition(getLastEl).left;
        var widthLastEl = getLastEl.getBoundingClientRect().width;
        var limitPosition = getLeftPos + widthLastEl - window.innerWidth;
        function scrollThis(event) {
            scrollTarget += event.deltaY * 1;
            scrollTarget = Math.round(Math.max(scrollLeft, Math.min(scrollTarget, limitPosition)));
            scrollValue += (scrollTarget - scrollValue) * .3;
            b.children[0].style.transform = 'translate3d(' + -scrollValue + 'px, 0 ,0)';
        }
        b.addEventListener('mouseover', function (ev) {
            document.body.style.overflow = 'hidden';
        }, false);

        b.addEventListener('mouseout', function (ev) {
            document.body.style.overflow = 'auto';
        }, false);
        
        b.addEventListener('mousewheel', function (event) {
            scrollThis(event);
        }, false);
    })('.t-jumbotronBottomContentSection', '.t-goodCard');



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

    // Main Check Zero Function Check click on buttons
    function mainCheckZeroFunction (t, checkClass, wrpCard) {
        var b = t;
        var getInput = b.parentNode.parentNode.querySelector('input');
        var getAllInputs = wrpCard.getElementsByTagName('input');
        var getQ = b.parentNode.parentNode.parentNode.parentNode.querySelector('div');
        var zero_count = 0;
        if(b.classList.contains(checkClass)) {
            getInput.value = parseInt(getInput.value) + 1;
        } else {
            if(getInput.value > 0) {
                getInput.value = parseInt(getInput.value) - 1;
                checkInputsNull(getAllInputs, zero_count, 'all', function () {
                    callHook(getAllInputs, function (i) {
                        if(+getAllInputs[i].value === 0) {
                            getInput.value = 1;
                        }
                    });
                },function () {});
            }
        }
        if (+getInput.value === 0) {
            getQ.setAttribute('data-check', 'false');
            getQ.querySelector('div').style.opacity = '0.5';
        } else {
            getQ.setAttribute('data-check', 'true');
            getQ.querySelector('div').style.opacity = '1';
        }
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
    // Focus Function
    function checkNullNewFocus(t,findClass,wrpCard) {
        var b = t;
        var numberPattern = new RegExp('^\\d*\\.?\\d+$');
        var getAllInputs = wrpCard.getElementsByTagName('input');
        var zero_count = 0;
        checkInputsNull(getAllInputs, zero_count, 'all', function () {
            callHook(getAllInputs, function (i) {
                if(+getAllInputs[i].value === 0) {b.value = 1;}
            });
            return false;
        }, function () {
            if(b.value.match(numberPattern)) {
                if (b.value === '' || parseInt(b.value) === parseInt(0)) {
                    b.parentNode.parentNode.parentNode.querySelector(findClass).style.opacity = '.5';
                    b.value = 0;
                    b.parentNode.parentNode.parentNode.querySelector('div').setAttribute('data-check', 'false');
                } else {
                    b.parentNode.parentNode.parentNode.querySelector(findClass).style.opacity = '1';
                    b.parentNode.parentNode.parentNode.querySelector('div').setAttribute('data-check', 'true');
                }
            } else {
                b.parentNode.parentNode.parentNode.querySelector(findClass).style.opacity = '1';
                b.value = 1;
                b.parentNode.parentNode.parentNode.querySelector('div').setAttribute('data-check', 'true');
            }
        });
    }
    // Pick Color And Image Function
    function pickColorAndImgs(t, elem, ev, getAllClicks) {
        var b = t;
        var getDataVal = ev === 'color'?b.dataset.color:b.dataset.img;
        var getAllEls = getAll(elem);
        function classCtrl(nList, cl, thisClick) {
            callHook(nList, function (i) {nList[i].classList.remove(cl);});
            if(!thisClick.classList.contains(cl)) {thisClick.classList.add(cl);}
        }
        getXhr(''+ getDataVal +'', function (data) {
            var createElemEnt = createElem('div');
            createElemEnt.innerHTML = data;
            if (ev !== 'color') {
                callHook(getAllEls, function (i) {
                    classCtrl(getAllClicks, 'active', b);
                    getAllEls[i].innerHTML = '';
                    if(getAllEls[i].innerHTML === '') {
                        getAllEls[i].insertAdjacentHTML('beforeend', data);
                    }
                })

            }
        });
        callHook(getAllEls, function (i) {
            if (ev === 'color') {
                classCtrl(getAllClicks, 'active', b);
                if (getAllEls[i].style.backgroundColor !== getDataVal) {getAllEls[i].setAttribute('fill', getDataVal);}
            }
        })
    }
    // Catch Text Function
    function catchText(t, output, c, check) {
        var b = t;
        var getAllOut = getAll(output);
        function checkFields(f, a, b) {f.value.length>0?a():b();}
        if (b.value.length <= 20) {
            callHook(getAllOut, function (i) {
                if (i === 0) {
                    if (check === 'top') {
                        checkFields(b, function () {
                            getSelector(c).innerHTML = b.value;
                            // arcText(getSelector(c), 127, 1); // Call Arc Text Function Top Direction
                        }, function () {
                            clearFS(b, getAllOut[i]);
                        });
                    } else {
                        checkFields(b, function () {
                            getSelector(c).innerHTML = b.value;
                            // arcText(getSelector(c), 127, -1); // Call Arc Text Function Bottom Direction
                        }, function () {
                            clearFS(b, getAllOut[i]);
                        });
                    }
                } else {
                    getAllOut[i].innerHTML = b.value;
                }
            })
        } else {b.value = b.value.substr(0, 20);}
    }
    // Clear All Stickers Function
    function clearFS(t, clearSection) {
        var b = t;
        var getLength = b.value.length;
        if (getLength <= 0) {clearSection.innerHTML = '';}
    }
    // Catch Font Function
    function catchFont(t, containers) {
        var b = t;
        var getAllContainers = getAll(containers);
        callHook(getAllContainers, function (i) {
            getAllContainers[i].setAttribute('data-font', b.dataset.value)
        })
    }
    // Constructor Steps Switcher
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
    // Constructor Steps Switcher End

    // Switch Category By Data Attributes

    function switchCategory(t, items) {
        var b = t;
        var getAllItems = getAll(items);
        if (b.dataset.value === 'all') {
            callHook(getAllItems, function (i) {
                getAllItems[i].style.display = 'flex';
            })
        } else {
            var elements = getAll(items+'[data-category="'+ b.dataset.value +'"]');
            callHook(getAllItems, function (i) {getAllItems[i].style.display = 'none';});
            callHook(elements, function (i) {elements[i].style.display = 'flex';});
        }
    }


    function destroyConstructor() {
        var defaultColor = '#73D9E5';
        var defaultIcon = '';
        var stickerCard = getAll('.t-constructorStickerCard');
        var getQuantity = getAll('.t-constructorStickerCardQuantityWr input');
        var stickerText = getAll('.t-constructorStickerCard svg .textSvgTwo, .t-constructorStickerCard svg .textSvgOne');
        var setDataCheck = getAll('.t-constructorStickerCardHTop');
        var getIconHolder = getAll('.t-constructorStickerCard .t-groupIconHolder');
        var getTextInputs = getAll('.t-constructorMainTextEditCard input');
        var getListOptions = getAll('.t-constructorMainWrappper .t-listOptions');
        var getPad = getAll('.t-padColor');
        var getAllLiTagsInConstructor = getAll('.t-constructorDefaultPicker li');
        var fontData = getAll('.t-constructorStickerCardHolder');
        var getAllSelectLists = getAll('.t-constructorMainWrappper .t-customOptionsWrapper');
        var getSettingsContainer = getSelector('.t-constructorMainStickersSettingsWrapper').children;
        var buttonsHolder = getSelector('.t-constructorMainStickersButtonsWrapper').children;
        callHook(getQuantity, function (i) {getQuantity[i].value = '1';});
        callHook(stickerText, function (i) {stickerText[i].innerHTML = '';});
        callHook(setDataCheck, function (i) {setDataCheck[i].setAttribute('data-check', 'true')});
        callHook(stickerCard, function (i) {stickerCard[i].style.opacity = '1';});
        callHook(getIconHolder, function (i) {getIconHolder[i].innerHTML = ''});
        callHook(getTextInputs, function (i) {getTextInputs[i].value = ''});
        callHook(getListOptions, function (i) {getListOptions[i].style.display = 'none'});
        callHook(getPad, function (i) {getPad[i].setAttribute('fill', defaultColor)});
        callHook(fontData, function (i) {fontData[i].removeAttribute('data-font')});
        callHook(getAllLiTagsInConstructor, function (i) {
            getAllLiTagsInConstructor[i].classList.remove('active');
            getAllLiTagsInConstructor[i].style.display='flex';
        });
        callHook(getAllSelectLists, function (i) {
            var getFirstOptions = getAllSelectLists[i].querySelector('.t-options');
            var findStyledSelectBox = getAllSelectLists[i].querySelector('.t-styledSelectorBox');
            var findOriginalSelect = getAllSelectLists[i].querySelector('select');
            findOriginalSelect.value = getFirstOptions.dataset.value;
            findStyledSelectBox.innerText = getFirstOptions.innerText;
        });
        callHook(getSettingsContainer, function (i) {
            if(getSettingsContainer[i].classList.contains('active')) {
                getSettingsContainer[i].classList.remove('active');
                getSettingsContainer[i].style.display='none';
            }
        });
        callHook(buttonsHolder, function (i) {
            if (buttonsHolder[i].matches('.t-addCartBtn')){getSelector('.t-addCartBtn').parentNode.removeChild(getSelector('.t-addCartBtn'));}
            getSelector('.t-constructorNextButton').style.display='block';
            getSelector('.t-constructorPrevButton').style.display='none';
        });
        getSelector('.t-constructorSuperMainWrapper').style.display='none';
        getSelector('.t-overlay').style.display='none';
    }

    // Constructor Variables
    var getListOptions = getAll('.t-inputItem .t-listOptions li');
    var getButtons = getAll('.t-constructorStickerCardQuantityBtn');
    var getColorPick = getAll('.t-constructorMainColorPicker li');
    var getImgPick = getAll('.t-constructorMainImgPicker li');
    var getQWrapper = getAll('.t-constructorStickerCardQuantityWr input');
    var getFirstField = getSelector('.t-constructorFirstTextField input');
    var getSecondField = getSelector('.t-constructorSecondTextField input');
    var getNextButton = getSelector('.t-constructorNextButton');
    var getPrevButton = getSelector('.t-constructorPrevButton');
    var getSettingsWrapper = getSelector('.t-constructorMainStickersSettingsWrapper');
    var getCardContainer = document.getElementById('t-constructorMainStickersPreview');
    var getConstructorImages = getAll('.t-constructorImgPickerCategory .t-customOptionsWrapper .t-options');
    var getCloseBtn = getSelector('.t-closeConstructor');

    // All Constructor Events
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
            mainCheckZeroFunction(this, check, getCardContainer);
        }, false);
    });
    callHook(getColorPick, function (i) {
        getColorPick[i].addEventListener('click', function () {
            pickColorAndImgs(this, '.t-constructorStickerCard .t-padColor', 'color', getColorPick);
        },false)
    });
    callHook(getImgPick, function (i) {
        getImgPick[i].addEventListener('click', function () {
            pickColorAndImgs(this, '.t-constructorStickerCard .t-groupIconHolder', '' , getImgPick);
        },false)
    });
    callHook(getQWrapper, function (i) {
        getQWrapper[i].addEventListener('keyup', function () {

        });
    });
    getFirstField.addEventListener('keyup', function () {
        clearFS(this, '.svgSticker .textSvgOne, .svgStickerOne .textSvgOne');
        catchText(this, '.svgSticker .textSvgOne', '.svgStickerOne .textSvgOne', 'top')
    }, false);
    getSecondField.addEventListener('keyup', function () {
        clearFS(this, '.svgSticker .textSvgTwo, .svgStickerOne .textSvgTwo');
        catchText(this, '.svgSticker .textSvgTwo', '.svgStickerOne .textSvgTwo');
    }, false);
    callHook(getQWrapper, function (i) {
        getQWrapper[i].addEventListener('focusout', function () {
            checkNullNewFocus(this, '.t-constructorStickerCard', getCardContainer);
            addDataCheck(this, '.t-constructorStickerCardHTop', 'qty');
        });
    });
    callHook(getConstructorImages, function (i) {
        getConstructorImages[i].addEventListener('click', function (e) {
            switchCategory(this, '.t-constructorMainImgPicker li');
        }, false);
    });
    getCloseBtn.addEventListener('click', function () {
        destroyConstructor();
    }, false);

    getSelector('.t-makeStickerCard').addEventListener('click', function (e) {
        e.preventDefault();
        getSelector('.t-overlay').style.display='block';
        getSelector('.t-constructorSuperMainWrapper').style.display='block';
    }, false);

    // All Constructor Events End


    var getCartIcon = getAll('.svgSticker');
    function test(element) {
        function utoa(str) {return window.btoa(unescape(encodeURIComponent(str)));}
        var s = new XMLSerializer().serializeToString(element);
        var encodedData = utoa(s);
        console.log('data:image/svg+xml;base64,' + encodedData);
    }

    getPrevButton.addEventListener('click', function (e) {
        callHook(getCartIcon, function (i) {
           test(getCartIcon[i]);
        });
    }, false);

    function getXhr(url, success, data) {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) { success(this.responseText); }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        return xhr;
    }


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