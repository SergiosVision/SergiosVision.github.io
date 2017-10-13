// jQuery Scripts

// Focus forms
$('.form--set input').focus(function () {
   $(this).parent().addClass('focus'); 
}).blur(function () {
    if ($(this).val() === '')
        $(this).parent().removeClass('focus'); 
});

// Activate buttons
 $('.form--set input').on('keyup', function () {
    if ($(this).val() != '') {
        $(this).closest('.login--container').find('button').prop("disabled", false);
    } else {
        $(this).closest('.login--container').find('button').prop("disabled", true);
    }
 });

// Toggle mobile menu
$('.hamburger').on('click', function () {
    $('#navigation').toggleClass('show--mobile-nav');
    $('.hamburger').toggleClass('open');
});

// Show modal
$('.forgot--password, .popup--item').on('click', function (e) {
   e.preventDefault();
   if (!$('body').hasClass('show--modal')){
       $('body').addClass('show--modal fixed');
   } else {
       $('body').removeClass('show--modal fixed');
   }
});

var radio_template;
$('.cover--image, .read--more').on('click', function (e) {
    e.preventDefault();
    if (!$('body').hasClass('show--modal-big')){
        $('body').addClass('show--modal-big fixed');
        radio_template = $(this).closest('.theme--card').find('input[type=radio]');
    } else {
        $('body').removeClass('show--modal-big fixed');
    }
});

$('.popup--item').on('click', function (e) {
    e.preventDefault();
    if (!$('body').hasClass('show--modal-bigPlugins')){
        $('body').addClass('show--modal-bigPlugins fixed');
    } else {
        $('body').removeClass('show--modal-bigPlugins fixed');
    }
});

$('.overlay, .iremember--account, .select--theme-btn').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('show--modal fixed');
    $('body').removeClass('show--modal-big fixed');
    $('body').removeClass('show--modal-bigPlugins fixed');
});


// Check all checkboxes
$('.category--title input').on('click', function () {
    var group = $(this).attr('data-group'),
        isChecked = !!($(this).prop('checked'));
    $('input[data-plugin="' + group + '"]').prop('checked', isChecked);
});

$('.category--btn input').on('click', function () {
    var group = $(this).attr('data-plugin'),
        siblings = $(this).attr('data-plugin', group),
        isChecked = true;
    siblings.each(function(idx, el){
        if(!$(el).prop('checked')) {
            isChecked = false;
            return;
        }
    });

    $('.category--title input[data-group="' + group + '"]').prop('checked', isChecked);
});

// Wizard
$(document).ready(function() {
    // $('.tab-content .tab-pane').eq(0).addClass("active");
});


// Select Themes
$('.select--theme .blueBtn, .wizard .blueBtn, .select--theme-btn').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.theme--card').find('input').prop("checked", true);
        $('.tab-pane.active').fadeOut(300);
        setTimeout(function () {
            var new_tab = $('.tab-pane.active'),
                new_bar = $('.progress--bar li.active');
            if ($('.tab-pane.active').next().hasClass('auth')){
                new_tab = new_tab.next().next();
                new_bar = new_bar.next().next();
            } else {
                new_tab = new_tab.next();
                new_bar = new_bar.next();
            }
            $('.progress--bar li.active').removeClass('active');
            new_bar.addClass('active');
            $('.tab-pane.active').removeClass('active');
            new_tab.fadeIn(300);
            setTimeout(function () {
                new_tab.addClass('active');
            }, 300)
        }, 300);
});

$('.backBtn').on('click', function (e) {
    e.preventDefault();
    $('.tab-pane.active').fadeOut(300);
    setTimeout(function () {
        var new_tab = $('.tab-pane.active'),
            new_bar = $('.progress--bar li.active');
        if ($('.tab-pane.active').prev().hasClass('auth')){
            new_tab = new_tab.prev().prev();
            new_bar = new_bar.prev().prev();
        } else {
            new_tab = new_tab.prev();
            new_bar = new_bar.prev();
        }
        $('.progress--bar li.active').removeClass('active');
        new_bar.addClass('active');

        $('.tab-pane.active').removeClass('active');
        new_tab.fadeIn(300);
        setTimeout(function () {
            new_tab.addClass('active');
        }, 300)
    }, 300);
});


$('.select--theme-btn').on('click', function (e) {
    e.preventDefault();
    radio_template.prop("checked", true);
});


// Popup Help
$('.popup--help-btn').on('click', function () {
   $('.popup--help-content').addClass('show-popup-content');
});

$('.circle--close').on('click', function () {
    $('.popup--help-content').removeClass('show-popup-content');
});


// Select Plugins
var pluginId = $('.category--btn input').data('plugin');

$('.category--btn').on('click', function () {
    if ($('.category--btn input:checked')){
        $(this).closest('.category--item').find('input[name=data-plugin]').val(pluginId);
    }
});

// Save and Change passoword controls
$('.content--account-change a').on('click', function (e) {
     e.preventDefault();
    $('.content--account-change').addClass('account--form-hide');
    $('.content--account-save').addClass('account--form-show');
    $('.conetnt--change-password').addClass('account--form-show');
});

$('.content--account-save a').on('click', function (e) {
    e.preventDefault();
    $('.content--account-change').removeClass('account--form-hide');
    $('.content--account-save').removeClass('account--form-show');
    $('.conetnt--change-password').removeClass('account--form-show');
});

// Accordeon
var getAccordBtn = $('.open--accord-item');
var getAccordContent = $('.accord--item-content');


$(getAccordBtn).click(function () {
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

// Smooth scroll
$('.howItWorks').on('click', function (e) {
    if (this.hash !== ''){
        e.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    }
});

// Native JavaScript



