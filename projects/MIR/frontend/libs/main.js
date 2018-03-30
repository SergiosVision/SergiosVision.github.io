// Variables For Fake Loader

var getLoader = document.querySelector('.t-loader'),
    getOutputSection = document.querySelector('.t-loaderPercentageOutput'),
    progressBar = document.querySelector('.t-greenProgressBar'),
    getLoaderElWrapper = document.querySelector('.t-loaderSuperWrapper');

// FadeOut Function

function fadeOutVj(el, time) {
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            setTimeout(function () {
                requestAnimationFrame(fade);
            },time)
        }
    })();
}


// Variables for animations

var getHeader = document.querySelector('header'),
    getJumbotron = document.querySelector('.t-jumbotronContainer'),
    getControlSection = document.querySelector('.t-controlSection'),
    getAllEvCards = getJumbotron.querySelectorAll('.t-jumbotronContainerRight .t-jumbotronEventsCard'),
    frame = document.querySelector('.t-frame'),
    hold = 300;


// Hold Animation Function

function holdFunc(selector, removingClass) {
    selector.forEach(function (data, i) {
        setTimeout(function () {
            data.classList.remove(removingClass);
        },i*hold);
    })
}

// Main Animation Function

function animateFunction(timeFirst, secondTime, removingClass, secondRemovingClass) {
    setTimeout(function () {
        getHeader.classList.remove(removingClass);
        getControlSection.classList.remove(removingClass);
    },timeFirst);
    getJumbotron.querySelector('.t-jumbotronContainerLeft').classList.remove(removingClass);
    holdFunc(getAllEvCards, 't-none'); // Call Hold Function
    setTimeout(function () {
        frame.classList.remove(secondRemovingClass);
    }, secondTime);
    setTimeout(function () {
        getAllEvCards.forEach(function (data, i) {
            data.classList.remove('t-animation');
        });
        getJumbotron.querySelector('.t-jumbotronContainerLeft').classList.remove('t-animation');
    },1200)
}

// Fake Loader Start

function fakeLoading(loader, output, bar) {
    var startPoint = 0, time,
        getBody = document.querySelector('body');
    time = setInterval(function () {
        startPoint = startPoint + 1;
        output.innerHTML = startPoint;
        bar.style.width = startPoint + '%';
        if (startPoint === 100) {
            clearInterval(time);
            startPoint = 0;
            fadeOutVj(getLoaderElWrapper, 30);
            setTimeout(function () {
                fadeOutVj(getLoader, 30); // Call FadeOut Function
                animateFunction(600, 630, 't-none', 't-frameHidden'); // Call Animation Function
            },350);
            setTimeout(function () {
                getBody.classList.remove('t-loading');
                loader.parentNode.removeChild(loader);
            },1200)
        }
    },15);
}

if(window.location.pathname === '/') {
    window.onload = function () {
        fakeLoading(getLoader, getOutputSection, progressBar)
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function (outputKey) {
    var truck = '<div class="t-truck t-loaderItem" data-tab="ground" data-index="2">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillTruck" transform="translate(2 10)"/><defs><path id="path0_fillTruck" fill-rule="evenodd" d="M43.196.02A1 1 0 0 0 42 1v14h-1V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h2.764a2.997 2.997 0 0 0 4.736-.341 2.997 2.997 0 0 0 4.736.341H32.5c.082 0 .162-.01.239-.029.55.63 1.359 1.029 2.261 1.029.889 0 1.687-.386 2.236-1h12.528c.55.614 1.347 1 2.236 1 .889 0 1.687-.386 2.236-1H58a1 1 0 0 0 1-1V6.46a4 4 0 0 0-3.215-3.923L43.196.02zM49 21a3 3 0 0 1 6 0h2v-7.105l-8.11-.901a1 1 0 1 1 .22-1.988l7.89.877V6.459a2 2 0 0 0-1.608-1.96L44 2.218V16a1 1 0 0 1-1 1H2v4h1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h18a3 3 0 0 1 6 0h11zM39 4v11H2V4h37zM10 21a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm28 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm18-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></defs></svg>\n' +
        '        </div>';
    var tanker = '<div class="t-tanker t-loaderItem" data-tab="water" data-index="3">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillTanker" transform="translate(2 8)"/><defs><path id="path0_fillTanker" fill-rule="evenodd" d="M3.212.385A1 1 0 0 1 4 0h16a1 1 0 0 1 .99.854L22.936 14H25V9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v4.658c.334-.13.655-.297.957-.498l3.432-2.288a6 6 0 0 1 2.785-.983l9.736-.885a1 1 0 0 1 .948 1.51l-7.253 12.088A7 7 0 0 1 46.603 26H8.073a5 5 0 0 1-4.831-3.712L.034 10.258A1 1 0 0 1 1 9h4.22l.615-2.464-1.282-.641a1 1 0 0 1-.523-.653l-1-4a1 1 0 0 1 .182-.857zM41.476 15.88a7.003 7.003 0 0 0 2.59-1.056l3.432-2.288a4 4 0 0 1 1.857-.655l7.774-.707-6.239 10.399A5 5 0 0 1 46.603 24H8.073a3 3 0 0 1-2.899-2.227L3.958 17.21l8.846 1.77a1 1 0 1 0 .392-1.962l-9.813-1.962L2.302 11h9.164c1.403 0 2.763.492 3.84 1.39l1.829 1.524A9 9 0 0 0 22.896 16H41a.995.995 0 0 0 .476-.12zM40 14v-4H27v4h13zM19.137 2l.296 2H14a1 1 0 0 0 0 2h5.73l1.14 7.7a6.996 6.996 0 0 1-2.455-1.323l-1.828-1.523A8 8 0 0 0 11.466 9H7.28l.69-2.758a1 1 0 0 0-.524-1.137L5.86 4.311 5.28 2h13.856z"/></defs></svg>\n' +
        '        </div>';
    var plane = '<div class="t-plane t-loaderItem" data-tab="air" data-index="1">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillPlane" transform="translate(2 8)"/><defs><path id="path0_fillPlane" fill-rule="evenodd" d="M1 0a1 1 0 0 0-.864 1.504l6.74 11.553-.786 1.73a1 1 0 0 0 .648 1.378l12.024 3.264L12.4 24.2A1 1 0 0 0 13 26h8a1 1 0 0 0 .447-.105L33.237 20h13.992c3.617 0 7.192-.785 10.476-2.301l.44-.203c1.265-.584 1.423-2.319.285-3.122a29.361 29.361 0 0 0-5.904-3.225.999.999 0 0 0-.323-.128A29.358 29.358 0 0 0 41.5 9H20.603a8 8 0 0 1-4.93-1.7L6.616.212A1 1 0 0 0 6 0H1zm48.42 12.172A27.357 27.357 0 0 0 41.5 11H20.602a10 10 0 0 1-6.163-2.125L5.655 2H2.741l6.123 10.496a1 1 0 0 1 .046.918l-.513 1.129 12.865 3.492A1 1 0 0 1 21.6 19.8L16 24h4.764l11.789-5.895 6-3a1 1 0 0 1 .894 1.79L37.237 18h9.992a23 23 0 0 0 9.638-2.117l.139-.064a27.368 27.368 0 0 0-4.981-2.713l-3.578 1.789a1 1 0 0 1-.894-1.79l1.867-.933z"/></defs></svg>\n' +
        '        </div>';

    var arr = [truck, plane, tanker];
    var empty = '';

    for(var i = 0; i < 4; i++) {
        $.each(arr, function (key, value) {
            empty += ''+ value +'';
        });
    }
    $(outputKey).html(empty);
})('.t-loader .t-visualLoaderHolder');

$(document).ready(function () {

    // FormStyler init

    if ($('select').hasClass('t-selectService')) {
        $('.t-selectService').styler();
    }
    

    if(window.location.pathname !== '/' && window.location.pathname !== '/aboutCompany.html' && window.location.pathname !== '/services.html') {
        $('.t-headerLogoWrapper').addClass('t-logoColorful');
        $('.t-languageWrapper').addClass('t-languageWrapperBlack');
        $('.t-headerNavigationList').addClass('t-blackLinks');
        $('.t-barsWrapper').addClass('t-barsBlue');
    }


    // Main Slider

    // Ground Slide Activate

    $('body').on('click', '.t-controlItem.t-truck', function (e) {
        e.preventDefault();

        if ($('body').hasClass('workAnim'))
            return false;

        $('body').addClass('workAnim');

        if (!$(this).hasClass('t-clone')) {
            $('.t-controlItemsHolder').removeClass('t-waterActive').removeClass('t-airActive');
        }
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
        $('.t-airContent, .t-waterContent').addClass('t-none');
        $('.t-groundContent').removeClass('t-none');
        $('.t-controlItemsHolder').removeClass('t-airActive').removeClass('t-waterActive').removeClass('t-planeCloneActive');

        setTimeout(function () {
            $('body').removeClass('workAnim');
        },1300)
    });

    // Air Slide Activate

    $('body').on('click', '.t-controlItem.t-plane', function (e) {
        e.preventDefault();
        if ($('body').hasClass('workAnim'))
            return false;

        $('body').addClass('workAnim');

        if (!$(this).hasClass('t-clone')) {
            $('.t-controlItemsHolder').addClass('t-airActive');
        } else {
            $('.t-controlItemsHolder').addClass('t-planeCloneActive').removeClass('t-airActive');
            setTimeout(function () {
                $('.t-controlItemsHolder').addClass('t-removeTransition');
                $('.t-controlItem').addClass('t-removeTransition');
            },1000);
            setTimeout(function () {
                $(".t-plane:not(.t-clone)").addClass('active');
                $('.t-controlItemsHolder').removeClass('t-planeCloneActive').addClass('t-airActive');
            }, 1100);
            setTimeout(function () {
                $('.t-controlItemsHolder').removeClass('t-removeTransition');
                $('.t-controlItem').removeClass('t-removeTransition');
            }, 1200)
        }
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
        $('.t-groundContent, .t-waterContent').addClass('t-none');
        $('.t-airContent').removeClass('t-none');
        $('.t-controlItemsHolder').removeClass('t-waterActive');

        setTimeout(function () {
            $('body').removeClass('workAnim');
        },1300)
    });

    // Tanker Slide Activate

    $('body').on('click', '.t-controlItem.t-tanker', function (e) {
        e.preventDefault();
        if ($('body').hasClass('workAnim'))
            return false;

        $('body').addClass('workAnim');

        if (!$(this).hasClass('t-clone')) {
            $('.t-controlItemsHolder').addClass('t-waterActive');
        } else {
            $('.t-controlItemsHolder').addClass('t-waterCloneActive').removeClass('t-waterActive');
            setTimeout(function () {
                $('.t-controlItemsHolder').addClass('t-removeTransition');
                $('.t-controlItem').addClass('t-removeTransition');
            },1000);
            setTimeout(function () {
                $(".t-tanker:not(.t-clone)").addClass('active');
                $('.t-controlItemsHolder').removeClass('t-waterCloneActive').addClass('t-waterActive');
            }, 1100);
            setTimeout(function () {
                $('.t-controlItemsHolder').removeClass('t-removeTransition');
                $('.t-controlItem').removeClass('t-removeTransition');
            }, 1200)
        }
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
        $('.t-groundContent, .t-airContent').addClass('t-none');
        $('.t-waterContent').removeClass('t-none');
        $('.t-controlItemsHolder').removeClass('t-airActive').removeClass('t-planeCloneActive');


        setTimeout(function () {
            $('body').removeClass('workAnim');
        },1300)
    });

    // Ground Tabs
    
    function checkResize(size, firstSelector, secondSelector) {
        var getInArr = [];
        var output = '';
        if (window.matchMedia('(max-width: '+ size +'px)').matches) {

            if ($('.t-mobileContentInfo').hasClass('active')) {
                return false
            }

            $(firstSelector).addClass('t-none');
            $(secondSelector).removeClass('t-none').addClass('active');
            $(firstSelector).each(function (i, data) {
                var getText = $(data).text();
                getInArr.push(getText);
            });
            $.each(getInArr,function (key, value) {
                output += '<p class="t-mobileContentInfo t-fontTwenty" data-tabId="">'+ value +'</p>';
            });

            $(secondSelector).html(output);

            $('.t-mobileContentInfo:nth-child(1)').attr('data-tabId', '3');
            $('.t-mobileContentInfo:nth-child(2)').attr('data-tabId', '0');
            $('.t-mobileContentInfo:nth-child(3)').attr('data-tabId', '1');
            $('.t-mobileContentInfo:nth-child(4)').attr('data-tabId', '2');
            $('.t-mobileContentInfo').hide();


            setTimeout(function () {
                $('.t-mainList > li[data-tab="0"]').trigger('click');
            },410)

        } else {
            $(firstSelector).removeClass('t-none');
            $(secondSelector).addClass('t-none').removeClass('active').html('');
        }
    }
    checkResize(890, '.t-tab .t-contentInfo', '.t-mobileContentInfoWrapper');

    $('.t-tabsSwitch li').click(function(e){
        e.preventDefault();
        if ($('body').hasClass('working')) {
            return false
        }

        var getTabs = $(this).attr('data-tab');

        $('body').addClass('working');

        $('.t-tabsSwitch li').removeClass('active');
        $('.t-tab').fadeOut(400).removeClass('active');
        $('.t-mobileContentInfo').hide().removeClass('active');

        $(this).addClass('active');
        if ($('.t-mobileContentInfoWrapper').hasClass('active')) {
            $('.t-tab[data-tabId='+ getTabs +'], ' +
                '.t-mobileContentInfo[data-tabId='+ getTabs +']').fadeIn(400).addClass('active');

        } else {
            $('.t-tab[data-tabId='+ getTabs +']').fadeIn(400).addClass('active');
        }
        if (getTabs === '3') {
            $('.t-truckAndTrainHolder .t-truck').fadeOut(400);
            setTimeout(function () {
                $('.t-truckAndTrainHolder .t-train').css('position', 'static');
            },400)
        } else {
            $('.t-truckAndTrainHolder .t-train').removeAttr('style');
            $('.t-truckAndTrainHolder .t-truck').fadeIn(400);
        }
        setTimeout(function () {
            $('body').removeClass('working');
        }, 400)
    });

    ////////////////////////////////////////////////////////////////////////////////

    function mainSwitcher(param) {
        function backSettingsHolder() {
            $('.t-jumbotron').removeClass('t-none');
            $('.t-contentWrapperMain').addClass('t-none').removeClass('active');
            $('.t-headerLogoWrapper').removeClass('t-logoColorful');
            $('.t-languageWrapper').removeClass('t-languageWrapperBlack');
            $('.t-headerNavigationList').removeClass('t-blackLinks');
            $('.t-barsWrapper').removeClass('t-barsBlue');
            $('.t-headerNavigationList .t-leaveRequest').addClass('t-none');
            $('.t-headerNavigationList .t-navigationNumber, .t-headerNavigationList .t-navigationEmail').removeClass('t-none');
            $('.t-controlHandler').removeClass('active');
        }
        if (param) {
            if ($('.t-contentWrapperMain').hasClass('active')) {
                if (!$('.t-groundContent').hasClass('t-none')) {
                    $('.t-tabsSwitch .t-middleText.active').next().click();

                    $('.t-tabsSwitch .t-middleText').each(function (i, data) {
                        if($(this).hasClass('active')) {
                            $('.t-tabsSwitchMobileHolder .t-tabsSwitchMobile').text($(this).text());
                        }
                    });
                }
            } else{
                $('.t-jumbotron').addClass('t-none');
                $('.t-contentWrapperMain').removeClass('t-none').addClass('active');
                $('.t-headerLogoWrapper').addClass('t-logoColorful');
                $('.t-languageWrapper').addClass('t-languageWrapperBlack');
                $('.t-headerNavigationList').addClass('t-blackLinks');
                $('.t-barsWrapper').addClass('t-barsBlue');
                $('.t-headerNavigationList .t-navigationNumber, .t-headerNavigationList .t-navigationEmail').addClass('t-none');
                $('.t-headerNavigationList .t-leaveRequest').removeClass('t-none');
                $('.t-controlHandler').addClass('active');
            }
        } else {
            if ($('.t-tabsSwitch li:first-child').hasClass('active')) {
                backSettingsHolder();
            } else{
                if (!$('.t-groundContent').hasClass('t-none')) {
                    $('.t-middleText.active').prev().click();

                    $('.t-tabsSwitch .t-middleText').each(function (i, data) {
                        if($(this).hasClass('active')) {
                            $('.t-tabsSwitchMobileHolder .t-tabsSwitchMobile').text($(this).text());
                        }
                    });
                }
            }
            if($('.t-groundContent').hasClass('t-none')) {
                backSettingsHolder();
            }
        }
    }

    // Main Slider Control

    var getMidText = $('.t-tabsSwitch .t-middleText.active').text();
    if($('.t-tabsSwitch .t-middleText').hasClass('active')) {
        $('.t-tabsSwitchMobileHolder .t-tabsSwitchMobile').text(getMidText);
    }

    if(window.location.pathname === '/') {
        $('.t-wrapper').addClass('mainPageActive');
        $(window).bind("DOMMouseScroll mousewheel wheel", function (event) {
            if($('.t-wrapper').hasClass('t-dialogActive') || $('.t-headerNavigation').hasClass('t-activeMobileMenu') || $('body').hasClass('t-loading')) {
                return false;
            } else {
                if($('body').hasClass('animate'))
                    return false;

                $('body').addClass('animate');
                mainSwitcher(event.originalEvent.deltaY < 0);
                setTimeout(function () {
                    $('body').removeClass('animate')
                }, 1000);
            }
        });

        //  Mobile Ctrl
        if(device.mobile()) {

            var initialPoint;
            var finalPoint;

            window.addEventListener('touchstart', function (event) {
                initialPoint = event.changedTouches[0];
            }, false);

            window.addEventListener('touchmove', function (event) {

                finalPoint = event.changedTouches[0];
                var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
                var yAbs = initialPoint.pageY - finalPoint.pageY;

                if ($('.t-wrapper').hasClass('t-dialogActive') || $('.t-headerNavigation').hasClass('t-activeMobileMenu') || $('body').hasClass('t-loading')) {
                    return false;
                } else {
                    if ($('body').hasClass('animate'))
                        return false;

                    $('body').addClass('animate');
                    mainSwitcher(yAbs < 0);
                    setTimeout(function () {
                        $('body').removeClass('animate')
                    }, 1000);
                }

            });

        }


    }

    // Accordeon

    var getAccordBtn = $('.t-openAccordItem');
    var getAccordContent = $('.t-accordItemContent');

    $('body').on('click', '.t-openAccordItem', function () {
        if($('body').hasClass('animate')){
            return false;
        }
        $('body').addClass('animate');
        if ($(this).hasClass('is-active')){
            $(this).next(getAccordContent).slideUp(400);
            $(this).removeClass('is-active');
        } else {
            $(getAccordBtn).not(this).next(getAccordContent).slideUp(400);
            $(getAccordBtn).not(this).removeClass('is-active');

            $(this).next(getAccordContent).slideDown(400);
            $(this).addClass('is-active');
        }
        setTimeout(function () {
            $('body').removeClass('animate');
        }, 400);
    });



    // Dialog Controls

    // Open Dialog Function
    function callDialog(selector, thisClass, whereAdd, time, overlay) {
        if ($(whereAdd).hasClass('t-dialogActive')) {
            return false;
        }

        $(whereAdd).addClass('t-dialogActive');

        $(overlay).fadeIn(300);

        setTimeout(function () {
            $(selector).removeClass(thisClass);
        }, time)
    }
    // Close Dialog Function
    function closeDialog(selector, thisClass, whereAdd, overlay) {
        $(selector).addClass(thisClass);
        $(selector).find('form').each(function (i, data) {
            data.reset();
            $(data).find('button').prop('disabled', true);
        });

        $(overlay).fadeOut(300);

        setTimeout(function () {
            $(whereAdd).removeClass('t-dialogActive');
        }, 300)
    }



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Call Dialogs

    $('.t-writeToManagerBtn, .t-contactsWriteUs').on('click', function (e) {
        e.preventDefault();
        callDialog('.t-feedBackDialog', 't-none', '.t-wrapper', 250, '.t-overlay');
    });

    $('.t-makeOrderBtn').on('click', function (e) {
        e.preventDefault();
        callDialog('.t-makeOrderDialog', 't-none', '.t-wrapper', 250, '.t-overlay');
    });

    $('body').on('click', '.t-closeDialog', function (e) {
        e.preventDefault();
        closeDialog('.t-feedBackDialog, .t-makeOrderDialog', 't-none', '.t-wrapper', '.t-overlay');
    });


    // Simple Validation

    function simpleUnlock(formSelector, button, checkClass) { // 1) Клсасс Айтема Формы, 2) Разблокируемая кнопка, 3) Проверяемый класс.
        var emptyFields = false;
        $(formSelector).each(function (i, data) {
            if(!$(this).hasClass(checkClass) && $(this).find('input').val() === '') {
                emptyFields = true;
            }
        });
        if (emptyFields) {
            $(button).prop('disabled', true);
        } else {
            $(button).prop('disabled', false);
        }
    }

    // Form In Contacts Section

    $('.t-feedBackDialog .t-feedBackForm > .t-formItem > input').on('keyup', function (e) {
        // 1) Указываем основной селектор к инпуту, 2) Указываем разблокируемую кнопку, 3) Проверяемый класс.
        simpleUnlock('.t-feedBackDialog .t-feedBackForm > .t-formItem', '.t-feedBackDialog .t-sendContactsBtn', 't-notNecessary');
    });

    $('.t-makeOrderDialog .t-makeOrderForm .t-formItem > input').on('keyup', function (e) {
        // 1) Указываем основной селектор к инпуту, 2) Указываем разблокируемую кнопку, 3) Проверяемый класс.
        simpleUnlock('.t-makeOrderDialog .t-makeOrderForm .t-formItem', '.t-sendOrderBtn', 't-notNecessary');
    });
    


    //  Mobile Menu Ctrl

    $('header .t-barsWrapper').on('click', function (e) {
        e.preventDefault();
        if(!$('.t-headerNavigation').hasClass('t-activeMobileMenu')) {
            $('.t-headerNavigation').addClass('t-activeMobileMenu');
        }
    });

    $('.t-mobileMenuHeader .t-closeWrapper').on('click', function (e) {
        e.preventDefault();

        if($('.t-headerNavigation').hasClass('t-activeMobileMenu')) {
            $('.t-headerNavigation').addClass('t-anim');
            setTimeout(function () {
                $('.t-headerNavigation').removeClass('t-activeMobileMenu');
                $('.t-headerNavigation').removeClass('t-anim');
            }, 300)
        }

    });

    // Sub Mobile Menu CTRL
    
    function subMobileMenu(size, selector, outputSelector) {

        if(window.matchMedia('(max-width: '+ size +'px)').matches) {

            $('select' + outputSelector).parent().removeClass('t-none');

            if ($('select' + outputSelector).parent().hasClass('t-subMenuReady')) {

                return false;
            }

            var arr = [];
            var obj = {};
            var output = '';

            $(selector).each(function (i, data) {
                obj = {
                    getClassName: $(this).attr('class'),
                    getThisText: $(this).text(),
                    getThisLink: $(this).find('a').attr('href')
                };
                arr.push(obj);
            });

            $.each(arr, function (key, value) {
                var getClass = value.getClassName;
                var getText = value.getThisText;
                var getLink = value.getThisLink;
                output += '<option value="'+ getLink +'" class="'+ getClass +' t-optionMenuItem">'+ getText +'</option>';
            });

            $(outputSelector).append(output).parent().addClass('t-subMenuReady');

            $('.t-optionMenuItem').each(function (i, data) {
                if($(data).hasClass('undefined')) {
                    $(this).attr('class', 't-optionMenuItem');
                }
                if($(data).hasClass('active')) {
                    $(this).attr('selected', 'selected');
                }
            })

        } else {

            $('select' + outputSelector).parent().addClass('t-none');

            $(outputSelector).html('');

            $('select' + outputSelector).parent().removeClass('t-subMenuReady');

        }
    }
    // Call SubMobile Menu

    subMobileMenu(768, '.t-simpleRightSideMenu li', '.t-mobileSubMenu');

    // Make SubMenu Working

    $('.t-mobileSubMenu').on('change', function () {
        var getValueFromThis = $(this).val();
        window.location.pathname = getValueFromThis;
    });

    // Resize Event

    $(window).on('resize', function () {
        checkResize(890, '.t-tab .t-contentInfo', '.t-mobileContentInfoWrapper'); //Tabs Resize
        subMobileMenu(768, '.t-simpleRightSideMenu li', '.t-mobileSubMenu'); // Call SubMobile Menu

    });


// Add Items In Bottom Control Section

(function (outputKey) {
    var truck = '<div class="t-truck t-controlItem t-defaultState" data-tab="ground" data-index="2">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillTruck" transform="translate(2 10)"/><defs><path id="path0_fillTruck" fill-rule="evenodd" d="M43.196.02A1 1 0 0 0 42 1v14h-1V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h2.764a2.997 2.997 0 0 0 4.736-.341 2.997 2.997 0 0 0 4.736.341H32.5c.082 0 .162-.01.239-.029.55.63 1.359 1.029 2.261 1.029.889 0 1.687-.386 2.236-1h12.528c.55.614 1.347 1 2.236 1 .889 0 1.687-.386 2.236-1H58a1 1 0 0 0 1-1V6.46a4 4 0 0 0-3.215-3.923L43.196.02zM49 21a3 3 0 0 1 6 0h2v-7.105l-8.11-.901a1 1 0 1 1 .22-1.988l7.89.877V6.459a2 2 0 0 0-1.608-1.96L44 2.218V16a1 1 0 0 1-1 1H2v4h1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h18a3 3 0 0 1 6 0h11zM39 4v11H2V4h37zM10 21a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm28 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm18-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></defs></svg>\n' +
        '        </div>';
    var tanker = '<div class="t-tanker t-controlItem t-defaultState" data-tab="water" data-index="3">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillTanker" transform="translate(2 8)"/><defs><path id="path0_fillTanker" fill-rule="evenodd" d="M3.212.385A1 1 0 0 1 4 0h16a1 1 0 0 1 .99.854L22.936 14H25V9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v4.658c.334-.13.655-.297.957-.498l3.432-2.288a6 6 0 0 1 2.785-.983l9.736-.885a1 1 0 0 1 .948 1.51l-7.253 12.088A7 7 0 0 1 46.603 26H8.073a5 5 0 0 1-4.831-3.712L.034 10.258A1 1 0 0 1 1 9h4.22l.615-2.464-1.282-.641a1 1 0 0 1-.523-.653l-1-4a1 1 0 0 1 .182-.857zM41.476 15.88a7.003 7.003 0 0 0 2.59-1.056l3.432-2.288a4 4 0 0 1 1.857-.655l7.774-.707-6.239 10.399A5 5 0 0 1 46.603 24H8.073a3 3 0 0 1-2.899-2.227L3.958 17.21l8.846 1.77a1 1 0 1 0 .392-1.962l-9.813-1.962L2.302 11h9.164c1.403 0 2.763.492 3.84 1.39l1.829 1.524A9 9 0 0 0 22.896 16H41a.995.995 0 0 0 .476-.12zM40 14v-4H27v4h13zM19.137 2l.296 2H14a1 1 0 0 0 0 2h5.73l1.14 7.7a6.996 6.996 0 0 1-2.455-1.323l-1.828-1.523A8 8 0 0 0 11.466 9H7.28l.69-2.758a1 1 0 0 0-.524-1.137L5.86 4.311 5.28 2h13.856z"/></defs></svg>\n' +
        '        </div>';
    var plane = '<div class="t-plane t-controlItem t-defaultState" data-tab="air" data-index="1">\n' +
        '             <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillPlane" transform="translate(2 8)"/><defs><path id="path0_fillPlane" fill-rule="evenodd" d="M1 0a1 1 0 0 0-.864 1.504l6.74 11.553-.786 1.73a1 1 0 0 0 .648 1.378l12.024 3.264L12.4 24.2A1 1 0 0 0 13 26h8a1 1 0 0 0 .447-.105L33.237 20h13.992c3.617 0 7.192-.785 10.476-2.301l.44-.203c1.265-.584 1.423-2.319.285-3.122a29.361 29.361 0 0 0-5.904-3.225.999.999 0 0 0-.323-.128A29.358 29.358 0 0 0 41.5 9H20.603a8 8 0 0 1-4.93-1.7L6.616.212A1 1 0 0 0 6 0H1zm48.42 12.172A27.357 27.357 0 0 0 41.5 11H20.602a10 10 0 0 1-6.163-2.125L5.655 2H2.741l6.123 10.496a1 1 0 0 1 .046.918l-.513 1.129 12.865 3.492A1 1 0 0 1 21.6 19.8L16 24h4.764l11.789-5.895 6-3a1 1 0 0 1 .894 1.79L37.237 18h9.992a23 23 0 0 0 9.638-2.117l.139-.064a27.368 27.368 0 0 0-4.981-2.713l-3.578 1.789a1 1 0 0 1-.894-1.79l1.867-.933z"/></defs></svg>\n' +
        '        </div>';

    var arr = [truck, plane, tanker];
    var empty = '';

    for(var i = 0; i < 4; i++) {
        $.each(arr, function (key, value) {
            empty += ''+ value +'';
        });
    }
    $(outputKey).html(empty);
    $('.t-controlItem:nth-child(10)').addClass('active');
    $('.t-controlItem:not(:nth-child(9), :nth-child(10), :nth-child(11))').each(function (i, data) {
        $(this).addClass('t-clone')
    });
})('.t-controlItemsHolder');

});
