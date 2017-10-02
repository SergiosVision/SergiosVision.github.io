$(window).on('load', function () {
    load();
});

var getBlock = $('#hidden--block');

function load(){
    $('body').fadeIn();
    $("[data-fancybox]").fancybox({
        live: false
    });

    if (!getBlock.hasClass('show')){
        getBlock.addClass('show');
        $('.wrapper').addClass('show');
    }
}


$(function () {
   function getCookie (actionsName) {
       var results = document.cookie.match ('(^|;) ?' + actionsName + '=([^;]*)(;|$)');
       if (results){
           return (unescape (results[2]));
       } else {
           return null;
       }
   };

   function checkCookie () {
      var textCookie = getCookie('messagetext'),
          currentText = $('.hidden--block h3').text();
      if(textCookie == currentText) {
          $('.hidden--block').hide(0);
          $('.wrapper').removeClass('show');
          getBlock.addClass('show');
      }

   };

   checkCookie();

   $('#times').click(function () {
       var currentText = $('.hidden--block h3').text(),
           date = new Date();
       date.setTime(date.getTime() + (10 * 1000));
       document.cookie = "messagetext="+currentText+"; expires="+date.toGMTString()+"; path=/";
       if (getBlock.hasClass('show')){
           getBlock.removeClass('show');
           $('.wrapper').removeClass('show');
       }
   });

});