$(document).ready(function () {

    // FormStyler init

    if ($('select').hasClass('t-selectService')) {
        $('.t-selectService, select').styler();
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

    $(window).on('resize', function () {
        checkResize(890, '.t-tab .t-contentInfo', '.t-mobileContentInfoWrapper')
    });

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

    // Main Slider Control

    if(window.location.pathname === '/') {
        $(window).bind("DOMMouseScroll mousewheel wheel", function (event) {
            if($('.t-wrapper').hasClass('t-dialogActive')) {
                return false;
            } else {
                if($('body').hasClass('animate'))
                    return false;

                $('body').addClass('animate');
                if (event.originalEvent.deltaY < 0) {
                    if ($('.t-contentWrapperMain').hasClass('active')) {
                        if (!$('.t-groundContent').hasClass('t-none')) {
                            $('.t-tabsSwitch .t-middleText.active').next().click();
                        }
                    } else{
                        $('.t-jumbotron').addClass('t-none');
                        $('.t-contentWrapperMain').removeClass('t-none').addClass('active');
                        $('.t-headerLogoWrapper').addClass('t-logoColorful');
                        $('.t-languageWrapper').addClass('t-languageWrapperBlack');
                        $('.t-headerNavigationList').addClass('t-blackLinks');
                        $('.t-headerNavigationList .t-navigationNumber, .t-headerNavigationList .t-navigationEmail').addClass('t-none');
                        $('.t-headerNavigationList .t-leaveRequest').removeClass('t-none');
                        $('.t-controlHandler').addClass('active');
                    }
                } else {
                    if ($('.t-tabsSwitch li:first-child').hasClass('active')) {
                        $('.t-jumbotron').removeClass('t-none');
                        $('.t-contentWrapperMain').addClass('t-none').removeClass('active');
                        $('.t-headerLogoWrapper').removeClass('t-logoColorful');
                        $('.t-languageWrapper').removeClass('t-languageWrapperBlack');
                        $('.t-headerNavigationList').removeClass('t-blackLinks');
                        $('.t-headerNavigationList .t-leaveRequest').addClass('t-none');
                        $('.t-headerNavigationList .t-navigationNumber, .t-headerNavigationList .t-navigationEmail').removeClass('t-none');
                        $('.t-controlHandler').removeClass('active');
                    } else{
                        if (!$('.t-groundContent').hasClass('t-none')) {
                            $('.t-middleText.active').prev().click();
                        }
                    }
                }
                setTimeout(function () {
                    $('body').removeClass('animate')
                }, 1000);
            }
        });
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
    function callDialog(selector, thisClass, whereAdd, time) {
        if ($(whereAdd).hasClass('t-dialogActive')) {
            return false;
        }

        $(whereAdd).append('<div class="t-overlay" style="display: none;"><div class="t-closeDialog"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fillCloser" fill="#FFF"/><defs><path id="path0_fillCloser" fill-rule="evenodd" d="M.27.27a.923.923 0 0 1 1.306 0L12 10.695 22.424.27a.923.923 0 1 1 1.306 1.306L13.305 12 23.73 22.424a.923.923 0 1 1-1.306 1.306L12 13.305 1.576 23.73A.923.923 0 1 1 .27 22.424L10.695 12 .27 1.576A.923.923 0 0 1 .27.27z"/></defs></svg></div></div></div>').addClass('t-dialogActive');
        $('.t-overlay').fadeIn(300);
        setTimeout(function () {
            $(selector).removeClass(thisClass);
        }, time)
    }
    // Close Dialog Function
    function closeDialog(selector, thisClass, whereAdd) {
        $(selector).addClass(thisClass);
        $(selector).find('form').each(function (i, data) {
            data.reset();
            $(data).find('button').prop('disabled', true);
        });

        $('.t-overlay').fadeOut(300);

        setTimeout(function () {
            $('.t-overlay').remove();
            $(whereAdd).removeClass('t-dialogActive');
        }, 300)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Call Dialogs

    $('.t-writeToManagerBtn').on('click', function (e) {
        e.preventDefault();
        callDialog('.t-feedBackDialog', 't-none', '.t-wrapper', 250);
    });

    $('.t-makeOrderBtn').on('click', function (e) {
        e.preventDefault();
        callDialog('.t-makeOrderDialog', 't-none', '.t-wrapper', 250);
    });

    $('body').on('click', '.t-closeDialog', function (e) {
        e.preventDefault();
        closeDialog('.t-feedBackDialog, .t-makeOrderDialog', 't-none', '.t-wrapper');
    });


    // Simple Validation

    
    function simpleUnlock(formSelector, button, checkClass ) {
        var emptyFields = false;

        if ($(formSelector).hasClass(checkClass)) {
            if ($('.'+ checkClass + '> input').val() === '') {
                emptyFields = true;
            }

            if (emptyFields) {
                $(button).prop('disabled', true);
            } else {
                $(button).prop('disabled', false);
            }

        } else {
            $(formSelector + '> input').each(function () {
                if ($(this).val() === '') {
                    emptyFields = true;
                }
            });

            if (emptyFields) {
                $(button).prop('disabled', true);
            } else {
                $(button).prop('disabled', false);
            }
        }
    }

    // Form In Contacts Section

    $('.t-contactsFormWrapper .t-contactsForm > .t-formItem > input').on('keyup', function (e) {
        // 1) Указываем основной селектор к инпуту, 2) Указываем разблокируемую кнопку, 3) Класс для проверки, если нужно проверить только одно поле.
        simpleUnlock('.t-contactsFormWrapper .t-contactsForm > .t-formItem', '.t-contactsFormWrapper .t-sendContactsBtn', 't-formEmailOrPhone');
    });

    $('.t-feedBackDialog .t-feedBackForm > .t-formItem > input').on('keyup', function (e) {
        // 1) Указываем основной селектор к инпуту, 2) Указываем разблокируемую кнопку, 3) Класс для проверки, если нужно проверить только одно поле.
        simpleUnlock('.t-feedBackDialog .t-feedBackForm > .t-formItem', '.t-feedBackDialog .t-sendContactsBtn', 't-formEmailOrPhone');
    });

    $('.t-makeOrderDialog .t-makeOrderForm > .t-formItem > input').on('keyup', function (e) {
        // 1) Указываем основной селектор к инпуту, 2) Указываем разблокируемую кнопку.
        simpleUnlock('.t-makeOrderDialog .t-makeOrderForm > .t-formItem', '.t-sendOrderBtn');
    });

});
