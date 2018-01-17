// Price range slider
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

$(function() {
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

    $('.t-insideImg').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: false,
        closeOnBgClick: false,
        image: {
            markup: '<div class="mfp-figure">'+
                        '<button class="t-closeBtn"></button>'+
                        '<div class="mfp-img"></div>'+
                        '<div class="mfp-counter"></div>'+
                    '</div>',
            tError: '<a href="%url%">Изображение</a> не может быть загружено.'
        },
        gallery: {
            enabled: true,
            tCounter: '%curr% из %total%',
            navigateByImgClick: false
        },
        callbacks: {
            open: function() {
                $('body').append('<div class="t-overlay"></div>');
            },
            close: function() {
                $('.t-overlay').remove();
            }
        }
    });
    $(document).on('click', '.t-closeBtn, .t-overlay', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

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
    $('html, body').animate({scrollTop:0}, 10);
    $('body').removeClass('t-animeOne');
    $('.t-astronaut').removeClass('t-blockHidden');
    $('.t-figureContainer').removeClass('t-blockHidden');
    $('.t-loadingLogo').removeClass('t-blockHidden');
    setTimeout(function () {
        $('.background').removeClass('topBackground');
    },1900);
    setTimeout(function () {
        $('.t-jumboWrapper').removeClass('t-blockHidden');
        $('.t-jumboWrapper').addClass('t-showThis');
    },2000);
    setTimeout(function () {
        $('.t-jumboInfoHeader, .t-jumboInfoFooter').removeClass('t-blockHidden');
    },2100);
    setTimeout(function () {
        $('.t-jumboInfoBody').removeClass('t-blockHidden');
    },2300);
    setTimeout(function () {
        $('.t-allCategories').removeClass('t-blockHidden');
        $('.t-allCategories').addClass('t-showThis');
    },3000);
    setTimeout(function () {
        $('.t-brands').removeClass('t-blockHidden');
        $('.t-brands').addClass('t-showThis');
        $('body').removeClass('t-windowLoading');
        $('body').removeClass('fixed');
    },3100);
    setTimeout(function () {
        $('header').removeClass('t-blockHidden');
    },3200);
    setTimeout(function () {
        $('.background').removeClass('animation');
    },5900);

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

$('.t-reviewsDialog').dialog({
    autoOpen: false,
    width: 640,
    modal: true,
    draggable: false,
    open: function(event, ui) {
        $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
        $('.ui-widget-overlay').addClass('t-dialogOverlay');
    },
    create: function (event, ui) {
        $(event.target).parent().css('position', 'fixed');
    },
    show: {
        effect: "fade",
        duration: 400
    },
    hide: {
        effect: "fade",
        duration: 300
    }
});
$('body').on('click', '.t-addReview', function (e) {
    e.preventDefault();
    $(".t-reviewsDialog").dialog("open");
});
$('body').on('click', '.t-reviewsDialogClose, .t-dialogOverlay', function (e) {
    e.preventDefault();
    $(".t-reviewsDialog").dialog("close");
    $('.t-reviewsForm').trigger('reset');
});

// Sticky Header

$(window).on('scroll', function () {
    if($(window).scrollTop() >= 184) {
        if ($('.headerClone').length === 0) {
            $('header').addClass('t-stickyHeader');
            $('.brand-logo').addClass('t-activeLogos');
        }
    } else {
        $('header').removeClass('t-stickyHeader');
        $('.brand-logo').removeClass('t-activeLogos');
    }
});

// Rating Range Script

$('.t-reviewsDialogRating li').on('mouseover', function () {
    var star = parseInt($(this).data('value'), 10); // The star currently selected

    $(this).parent().children('li.t-ratingStarControl').each(function(e){
        if (e < star) {
            $(this).addClass('t-activeRating');
        }
        else {
            $(this).removeClass('t-activeRating');
        }
    });
}).on('mouseout', function(){
    $(this).parent().children('li.t-ratingStarControl').each(function(e){
        $(this).removeClass('t-activeRating');
    });
});

$('.t-reviewsDialogRating li').on('click', function(){
    var star = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.t-ratingStarControl');

    for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('t-selectedStar');
    }

    for (i = 0; i < star; i++) {
        $(stars[i]).addClass('t-selectedStar');
    }
});


// Open menu, Open Search Bar, Open Cart

$('.t-catalogWrap').on('click', function (e) {
    e.preventDefault();
    $('.t-catalog').toggleClass('activeMenu');
});

$('.t-openSerachBar').on('click', function (e) {
    e.preventDefault();
    $('.t-searchBar').addClass('activeSearch');
    $('.t-openSerachBar svg').addClass('active');
});

$('.t-inputSerach').on('keyup', function () {
    if ($(this).val().length >= 1) {
        $('.t-openSerachBar svg').addClass('t-fillBlack');
    } else {
        $('.t-openSerachBar svg').removeClass('t-fillBlack');
    }
});

$('.t-smallCartOpen').on('click', function () {
    $('.t-smallCart').addClass('activeCart');
});

$('body').on('click','.t-closeBtnSmallCart', function () {
    $('.t-smallCart').removeClass('activeCart');
});

$('body').on('click', '.t-smallCloseBtnCtrlSearch', function (s) {
    $('.t-searchBar').removeClass('activeSearch');
    $('.t-openSerachBar svg').removeClass('active');
    $('.t-openSerachBar svg').removeClass('t-fillBlack');
    $('.t-input').val('');
});

$(document).on('click', function(e) {
    if (!$(e.target).closest(".t-catalog").length) {
        $('.t-catalog').removeClass('activeMenu');
        $('.t-menuList li').removeClass('hover');
        $('.t-menuList li').removeClass('hoverSec');
        $('.t-menuList li').removeClass('hover_nextSec');
        $('.t-menuList li').removeClass('hover_next');
    }
    if(!$(e.target).closest('.t-smallCartOpen').length) {
        $('.t-smallCart').removeClass('activeCart');
    }
});


// Cart Ctrl

$(function () {
   $('.t-addToCart').on('click', function () {
      $(this).each(function () {
          var getNameGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsNameMain').html();
          var getImgGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsImgMain').attr('src');
          var getPriceGoods = $(this).closest('.t-GoodsCardMain').find('.t-goodsPriceMain').html();
          var smallCartItem = '<li class="t-smallCartItem">' +
                                  '<div class="t-smallCartItemImg"><img src="'+ getImgGoods +'"></div>' +
                                  '<div class="t-smallCartItemPriceAndName">' +
                                        '<h4 class="t-smallCartItemName">'+ getNameGoods +'</h4>' +
                                        '<span class="t-smallCartPrice">'+ getPriceGoods +'</span>' +
                                  '</div>' +
                              '</li>';
          $('.t-smallCartBody').append(smallCartItem);
          console.log(getNameGoods, getImgGoods, getPriceGoods)
      });
      if($('.t-smallCartItem').length > 0) {
          var getCartBodyLe = $('.t-smallCartItem').length;
          $('.t-smallCartBody').addClass('t-smallCartBodyActive');
          $('.t-smallCartTitleInfo').text('Товаров - '+ getCartBodyLe);
          $('.t-smallCartTotalPrice').addClass('activeTotal');
          $('.t-smallCartBtnInfo').attr('href', '/cart');
          $('.t-smallCartBtnInfo span').text('Перейти в корзину');
          $('.t-smallCartOpen').addClass('t-hasGoodsInCart');
      } else {
          $('.t-smallCartOpen').removeClass('t-hasGoodsInCart');
      }
      var totalPriceCount = 0;
      $('.t-smallCartPrice').each(function () {
          var eachPrice = parseInt($(this).text());
          totalPriceCount+= eachPrice;
      });
      $('.t-smallCartTotalPrice').text(addSpace(totalPriceCount + ' ' + '₽'));
   });
});


// Menu Ctrl

var newEl = false;
$(document).on('mousemove', 'nav', function(eventObject){
    if($(eventObject.target).parent().hasClass('hover_next') && newEl){
        newEl = false;
        $('nav .hover').removeClass('hover');
        $(eventObject.target).parent().addClass('hover');
    } else{
        if(newEl){
            newEl = false;
            $('nav .hover_next').removeClass('hover_next');
        }
    }

    var hover = $('nav').find('.hover');
    if(hover.length > 0){
        var ul = hover.find('ul:first');
        var xp = [hover.offset().left]; // Массив X-координат полигона
        var yp = [hover.offset().top]; // Массив Y-координат полигона

        if( hover.offset().top > ul.offset().top ){
            xp.push(ul.offset().left);
            yp.push(ul.offset().top);
        } else{
            xp.push(hover.offset().left + hover.outerWidth());
            yp.push(hover.offset().top);
        }

        xp.push(ul.offset().left + ul.outerWidth());
        xp.push(ul.offset().left + ul.outerWidth());
        yp.push(ul.offset().top);
        yp.push(ul.offset().top + ul.outerHeight());

        if( (hover.offset().top + hover.outerHeight()) > (ul.offset().top + ul.outerHeight()) ){
            xp.push(hover.offset().left + hover.outerWidth());
            yp.push(hover.offset().top + hover.outerHeight());
        } else{
            xp.push(ul.offset().left);
            yp.push(ul.offset().top + ul.outerHeight());
        }

        xp.push(hover.offset().left);
        yp.push(hover.offset().top + hover.outerHeight());

        function inPoly(x,y){
            var npol = xp.length;
            var j = npol - 1;
            var c = 0;
            for (i = 0; i < npol;i++){
                if ((((yp[i]<=y) && (y<yp[j])) || ((yp[j]<=y) && (y<yp[i]))) &&
                    (x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i])) {
                    c = !c
                }
                j = i;
            }
            return c;
        }
        var result = inPoly(eventObject.pageX,eventObject.pageY);
        if(result !== true){
            newEl = false;
            if (!$('.t-menuListSecondLevel li').hasClass('hoverSec')) {
                $('nav .hover').removeClass('hover');
            } else {
                return false
            }
        } else{
            if($(eventObject.target).hasClass('t-droppedMenu') && !$(eventObject.target).parent().hasClass('hover')){
                $('nav .hover_next').removeClass('hover_next');
                $(eventObject.target).parent().addClass('hover_next');
                setTimeout(function () {
                    newEl = true;
                }, 200)
            }
        }
    } else{
        if($(eventObject.target).hasClass('t-droppedMenu')){
            $('nav .hover_next').removeClass('hover_next');
            $(eventObject.target).parent().addClass('hover');
            newEl = false;
        }
    }
});

var newElSec = false;
$(document).on('mousemove', 'nav', function(eventObject){
    if($(eventObject.target).parent().hasClass('hover_nextSec') && newElSec){
        newElSec = false;
        $('nav .hoverSec').removeClass('hoverSec');
        $(eventObject.target).parent().addClass('hoverSec');
    } else{
        if(newElSec){
            newElSec = false;
            $('nav .hover_nextSec').removeClass('hover_nextSec');
        }
    }

    var hover = $('nav').find('.hoverSec');
    if(hover.length > 0){
        var ul = hover.find('ul:first');
        var xp = [hover.offset().left]; // Массив X-координат полигона
        var yp = [hover.offset().top]; // Массив Y-координат полигона

        if( hover.offset().top > ul.offset().top ){
            xp.push(ul.offset().left);
            yp.push(ul.offset().top);
        } else{
            xp.push(hover.offset().left + hover.outerWidth());
            yp.push(hover.offset().top);
        }

        xp.push(ul.offset().left + ul.outerWidth());
        xp.push(ul.offset().left + ul.outerWidth());
        yp.push(ul.offset().top);
        yp.push(ul.offset().top + ul.outerHeight());

        if( (hover.offset().top + hover.outerHeight()) > (ul.offset().top + ul.outerHeight()) ){
            xp.push(hover.offset().left + hover.outerWidth());
            yp.push(hover.offset().top + hover.outerHeight());
        } else{
            xp.push(ul.offset().left);
            yp.push(ul.offset().top + ul.outerHeight());
        }

        xp.push(hover.offset().left);
        yp.push(hover.offset().top + hover.outerHeight());

        function inPoly(x,y){
            var npol = xp.length;
            var j = npol - 1;
            var c = 0;
            for (i = 0; i < npol;i++){
                if ((((yp[i]<=y) && (y<yp[j])) || ((yp[j]<=y) && (y<yp[i]))) &&
                    (x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i])) {
                    c = !c
                }
                j = i;
            }
            return c;
        }
        var result = inPoly(eventObject.pageX,eventObject.pageY);
        if(result !== true){
            newElSec = false;
            $('nav .hoverSec').removeClass('hoverSec');
        } else{
            if($(eventObject.target).hasClass('t-droppedMenuSec') && !$(eventObject.target).parent().hasClass('hoverSec')){
                $('nav .hover_nextSec').removeClass('hover_nextSec');
                $(eventObject.target).parent().addClass('hover_nextSec');
                setTimeout(function () {
                    newElSec = true;
                }, 200)
            }
        }
    } else{
        if($(eventObject.target).hasClass('t-droppedMenuSec')){
            $('nav .hover_nextSec').removeClass('hover_nextSec');
            $(eventObject.target).parent().addClass('hoverSec');
            newElSec = false;
        }
    }
});