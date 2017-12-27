// Price range slider
$(function() {
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
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500000,
        values: [ 0, 500000 ],
        slide: function( event, ui ) {
            $('.t-amountStart').text(addSpace(ui.values[0]) + " ₽");
            $('.t-amountEnd').text(addSpace(ui.values[1]) + " ₽");
        }
    });
    $("#amount").val("₽" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ₽" + $( "#slider-range" ).slider( "values", 1 ) );

    $(".t-aboutGoodsTabs").tabs({
        show: { effect: "fade", duration: 400 },
        hide: { effect: "fade", duration: 400 }
    });
});

// Check all checkboxes

$('#allBrands').on('change', function () {
    $('.t-checkbox').prop('checked', this.checked);
});

$('.t-checkbox').on('change', function () {
    if($('.t-checkbox').length == $('.t-checkbox:checked').length) {
        $('#allBrands').prop('checked', true);
    } else {
        $('#allBrands').prop('checked', false);
    }
});

// Rotate Sorting Arrow

$('.t-sortArrowDown').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('t-sortArrowUp');
});


$(document).ready(function(){
    // Init OWL Carousel
    $(".owl-carousel").owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 700
    });

    // $('.slideContainder').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 5,
    // });
    $('.t-allCategoriesSlider').reviewsSlider();
    // Init simple Parallax

    $(window).scroll(function(){
        parallax();
        var pos = $('.t-bottomInfo').offset().top;
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (pos < windowTop + 900) {
            $('.t-moonGradient').css('opacity', '1');
        } else {
            $('.t-moonGradient').css('opacity', '0');
        }

        var footerOffset =  $('#footer').offset().top - 400;
        if(footerOffset <= (windowTop + windowHeight)) {
            $('.t-moon').css('bottom','+' + ((windowTop + windowHeight - footerOffset)/2) + 'px');
        }
        if(window.location.pathname === '/'){
            var sliderOffset = $('.t-jumboWrapper, .t-standartMainContainer').offset().top - 50;
            if(sliderOffset <= windowTop) {
                $('.t-figuresControls').css('opacity','-' + ((windowTop - sliderOffset)) + '');
            } else {
                $('.t-figuresControls').css('opacity','+' + ((windowTop + sliderOffset)) + '');
            }
        }
    });

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.background').css('top',-(scrolled*0.15)+'px');
        $('.t-astronaut').css('top',-(scrolled*0.3)+'px');
    }
});

$(window).on('load', function () {
    setTimeout(function () {
        $('.background').removeClass('topBackground');
    },1900);
    setTimeout(function () {
        $('body').removeClass('t-windowLoading');
        $('body').removeClass('t-animeOne');
    },2000);
    setTimeout(function () {
        $('.t-jumboInfoHeader').removeClass('addOpacity');
        $('.t-jumboInfoFooter').removeClass('addOpacity');
    },2100);
    setTimeout(function () {
        $('.t-jumboInfoBody').removeClass('addOpacity');
    },2300);
    setTimeout(function () {
        $('.t-astronaut').removeClass('animation');
        $('.t-loadingLogo').removeClass('animation');
        $('body').removeClass('fixed');
    },3100);
    setTimeout(function () {
        $('header').removeClass('hideHeader');
    },4000);
    setTimeout(function () {
        $('.background').removeClass('animation');
    },5600);

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
});

// Call Review Dialog

$('.t-addReview').on('click', function () {

});