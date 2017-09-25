$(window).on('load', function () {
    load();
})

function load(){
    $('body').fadeIn();
    $("[data-fancybox]").fancybox({
        live: false
    });
}