// jQuery Scripts

$('.form--set input').focus(function () {
   $(this).parent().addClass('focus'); 
}).blur(function () {
    if ($(this).val() === '')
        $(this).parent().removeClass('focus'); 
})

 $('.form--set input').on('keyup', function () {
    if ($(this).val() != '') {
        $(this).closest('.login--container').find('button').prop("disabled", false);
    } else {
        $(this).closest('.login--container').find('button').prop("disabled", true);
    }
 });

// $('.popup--item').on('click', function () {
//     $(this).find('#popup').toggleClass('show-popup');
// });

$('.select--theme .blueBtn').on('click', function (e) {
    e.preventDefault();
        $(this).closest('.theme--card').find('input').prop( "checked", true );
    //}
});


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


var getAccordBtn = $('.open--accord-item');
var getAccordContent = $('.accord--item-content');
var getAccordIcon = $('.open--accord-item span');

$(getAccordBtn).click(function () {
    if ($(this).hasClass('is-active')){
        $(this).next(getAccordContent).slideUp(400);
        $(this).removeClass('is-active');
    } else {
        $(getAccordBtn).not(this).next(getAccordContent).slideUp(400);
        $(getAccordBtn).not(this).removeClass('is-active');

        $(this).next(getAccordContent).slideDown(400);
        $(this).addClass('is-active');
    }
});

// Native JavaScript

