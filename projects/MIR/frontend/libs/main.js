// var vm = new Vue({
//     el: '#slideCtrl',
//     data: {
//         active: 1
//     },
//     methods: {
//         move: function (amount){
//             var newActive;
//             const newIndex = this.active + amount;
//
//             const count = this.$el.dataset.count;
//
//             if (newIndex === 4) newActive = 3;
//             if (newIndex === 0) newActive = 1;
//             this.active = newActive || newIndex;
//         }
//     },
//     computed: {
//
//     }
// });


$(document).ready(function () {

   // if (window.location.pathname === '/') {
   //     $('.fullPage').fullpage();
   //     $('.fp-tableCell').removeClass();
   // }

    // $('.t-mobileTabsCtrl').on('change', function () {
    //     var getVal = $(this).val();
    //     $('.t-tabsContiner').hide();
    //     $(getVal).fadeIn(400);
    //
    // });


    // Main Slider

    $('body').on('click', '.t-controlItem.t-truck', function (e) {
        e.preventDefault();
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
    });


    $('body').on('click', '.t-controlItem.t-plane', function (e) {
        e.preventDefault();
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
    });

    $('body').on('click', '.t-controlItem.t-tanker', function (e) {
        e.preventDefault();
        var getData = $(this).data('tab');
        $('.t-jumbotron').attr('data-bg',getData);
        $('.t-controlItem').removeClass('active');
        $(this).addClass('active');
    });

    // Ground Tabs

    $('.t-tabsSwitch li').click(function(e){
        e.preventDefault();
        if ($('body').hasClass('working')) {
            return false
        }

        var getTabs = $(this).attr('data-tab');

        $('body').addClass('working');

        $('.t-tabsSwitch li').removeClass('active');
        $('.t-tab').fadeOut(400).removeClass('active');

        $(this).addClass('active');
        $("#"+getTabs).fadeIn(400).addClass('active');
        if (getTabs === 'four') {
            $('.t-truckAndTrainHolder .t-truck').fadeOut(400);
        } else {
            $('.t-truckAndTrainHolder .t-truck').fadeIn(400);
        }
        setTimeout(function () {
            $('body').removeClass('working');
        }, 400)
    });

    if(window.location.pathname === '/') {
        $(window).bind("DOMMouseScroll mousewheel wheel", function (event) {
            if($('body').hasClass('animate'))
                return false;

            $('body').addClass('animate')

            if($('.t-wrapper').hasClass('t-dialogActive')) {
                return false;
            }
            if (event.originalEvent.deltaY < 0) {
                if ($('.t-contentContainer').hasClass('active')) {
                    if($('.t-groundContent').hasClass('active')) {
                        $('.t-middleText.active').next().click();
                    }
                } else{
                    $('.t-jumbotron').addClass('t-none');
                    $('.t-contentWrapperMain').removeClass('t-none').addClass('active');
                    $('.t-headerLogoWrapper').addClass('t-logoColorful');
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
                    $('.t-headerNavigationList').removeClass('t-blackLinks');
                    $('.t-headerNavigationList .t-leaveRequest').addClass('t-none');
                    $('.t-headerNavigationList .t-navigationNumber, .t-headerNavigationList .t-navigationEmail').removeClass('t-none');
                    $('.t-controlHandler').removeClass('active');
                } else{
                    if($('.t-groundContent').hasClass('active')) {
                        $('.t-middleText.active').prev().click();
                    }
                }
            }

            setTimeout(function () {
                $('body').removeClass('animate')
            }, 1000);
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
    })


    // Clone Bottom Btn Controls

    // var clone_slide = '';
    // var active = 0;
    // $('.t-controlItem').each(function (i) {
    //     $(this).attr('data-index', i);
    //     if( i === active )
    //         $(this).addClass('active');
    //
    //
    // });

    // Simple Validation


});
