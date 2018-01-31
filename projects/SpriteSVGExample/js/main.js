$('.menu-icon2').mouseenter(function () {
    console.log($('#logo-text'));
    $('#logo-text path').css('fill', 'blue');
});
$('.menu-icon2').mouseout(function () {
    $('#logo-text path').css('fill', '#fff');
});