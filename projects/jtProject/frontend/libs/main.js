svg4everybody();

$(document).ready(function () {
    // jQuery('.t-scrollContainer').scrollbar();

    function Lim() {
        var pos = $('.t-newsCardWrapper').last().position().left + $('t-newsCardWrapper').last().width() - $(window).width() - 50;
        return pos;
    }
    var pos = Lim();

    var sp = 0, //SectionPosition. эта координата двигает наш wrapper за счёт position left.
        width = $(window).width(), //берём ширину экрана. нужно для определения правой границы.
        wDelta = 100, //множитель скролла
        wrapperWidth = 0,
        _xDouble = $('.t-newsCardWrapper:last-child').index(),
        x = 0; //ширина wrappera. нужна для определения правой границы.
    console.log(_xDouble)

    if (window.matchMedia('(min-width: 961px)').matches) {
        $('body').on('mousewheel', hscroll);
        $(document).on('keydown', hscroll);
    function hscroll(event) {
            if (window.matchMedia('(max-width: 960px)').matches) {
                return;
            }
            var deltaY = 0,
                section = $('.t-newsCardWrapper');
            if (event.type.toLowerCase() == "mousewheel") {
                if (event.deltaY > 0) {
                    deltaY = 1;
                } else {
                    deltaY = -1
                }
            } else if ((event.type.toLowerCase() == "keydown") && (event.target.nodeName.toLowerCase() == 'body')) {
                if (event.which == 38) {
                    deltaY = 1;
                } else if (event.which == 40) {
                    deltaY = -1
                } else {
                    return;
                }
            }

            if (!$('.b-popup').is(':visible')) {
                sp -= deltaY * wDelta;
            }

            //определаем границы скролла
            if (sp < 0) {
                sp = 0;
            } else if (sp > Lim()) {
                sp = Lim();
            }

            //меняем позицию wrappera
            $('.t-mainCardsHolder').css('transform', 'translate(' + -sp + 'px, 0)');

        }

    }
});