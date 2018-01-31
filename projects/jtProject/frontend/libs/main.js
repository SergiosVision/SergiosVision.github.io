svg4everybody();
$(function ($) {
    $.fn.horizontScrl = function (select, amount) {
        var cmp = $(this);
        amount = amount || 120;
        cmp.css('overflow', 'auto');
        $(select).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = cmp.scrollLeft();
            position += direction > 0 ? -amount : amount;
            cmp.scrollLeft(position);
            event.preventDefault();
        })
    };
});

$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
};

$(document).ready(function () {
    // jQuery('.t-scrollContainer').scrollbar();
    if(window.matchMedia('(min-width: 768px)').matches) {
        $('.t-mainCardsHolder').horizontScrl('body', 150); // Вводим скорость горизонтального скролла а также зону действия скролла
        $('.t-mainCardsHolder').on('scroll', function () {
            if ($('.t-mainCardsHolder .t-newsCardWrapper').css("marginLeft") >= 35) {
                return false
            } else {
                $('.t-mainCardsHolder .t-newsCardWrapper:not(:last-child)').css('margin-right', '35px');
            }
        });

        $('.t-mainCardsHolder').scrollEnd(function(){
            $('.t-newsCardWrapper').attr('style', '');
        }, 300);
    }

});