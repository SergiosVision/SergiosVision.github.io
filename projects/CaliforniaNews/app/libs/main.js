$('.form--set input').focus(function () {
   $(this).parent().addClass('focus'); 
}).blur(function () {
    if ($(this).val() === '')
        $(this).parent().removeClass('focus'); 
})

$('.form--set input').on('keyup', function () {
   if ($('.form--set input').val() != '') {
       $('.signin--button').removeAttr('disabled')
   } else {
       $('.signin--button').attr('disabled', 'disable');
   }
});

$('.popup--item').on('click', function () {
    $(this).find('#popup').toggleClass('show-popup');
});