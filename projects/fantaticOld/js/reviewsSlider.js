(function() {
    $.fn.reviewsSlider = function (set_options) {
        var options = $.extend({
            visible: 5,
            active: 0
        }, set_options);

        return this.each(function() {
            var $container = $(this);
            var $wrapper = $container.find('.swiper-wrapper');
            //var $pagination = $container.find('.swiper-pagination');
            var $items = $container.find('.swiper-slide');
            var slide_count = 0;

            if($items.length > 1){

                initialization();

                $('body').on('click', '.swiper-pagination span', function(e){
                    e.preventDefault();

                    if($(this).hasClass('active'))
                        return false;

                    var index = $(this).data('index');

                    goSlide(index, $(this));
                });

            } else{
                return false; // если один элемент
            }

            $('.t-allCatSliderBtn').on('click',function (e) {
                e.preventDefault();
                var nextSlide = '';
                if ($(this).hasClass('t-nextBtn')) {
                    nextSlide = $wrapper.find('.active').next();
                } else {
                    nextSlide = $wrapper.find('.active').prev();
                }
                goSlide(nextSlide.data('index'), nextSlide);
            });


            function initialization(){
                var slide_count_clone = slide_count;

                //$pagination.html('<div class="swiper-pagination-wrapper"></div>');
                //$pagination = $pagination.find('.swiper-pagination-wrapper');

                var clone_slide = '';
                $items.each(function (i) {
                    $(this).attr('data-index', i);
                    if( i === options.active )
                        $(this).addClass('active');

                    clone_slide += '<div class="clone swiper-slide" data-index="' + i + '">' + $(this).html() + '</div>';
                });

                //$pagination.find('span:nth-child('+ (options.active+1) +')').addClass('active');

                do{
                    $wrapper.prepend(clone_slide);
                    $wrapper.append(clone_slide);

                    slide_count_clone = $wrapper.find('.swiper-slide').length;
                } while(slide_count_clone < (options.visible * 2));

                // var slide_position = $wrapper.find('.swiper-slide.active').position().left;
                // $wrapper.css('transform', 'translate(-'+ slide_position +'px, 0)');

                slideOpacity(function () {
                    var $slide_position = $wrapper.width()/2.1 - $wrapper.find('.active').position().left - $wrapper.find('.active').outerWidth()/2.1;
                    $wrapper.css('transform', 'translate('+ $slide_position +'px, 0)');
                });
            }

            function slideOpacity(callback){
                $wrapper.find('.active').css({
                    'opacity': '1',
                    'width': '224px',
                    'height': 'auto',
                    'pointer-events': 'all',
                });

                var opacity_step = 2,
                    opacity = 8,
                    width = 84,
                    width_step = 42,
                    slide_active = $wrapper.find('.active');

                while (true){
                    if(!slide_active.next().length)
                        break;

                    slide_active = slide_active.next();

                    slide_active.css({
                        'opacity': '0.' + opacity,
                        'width': width + 'px',
                        'height': width + 'px',
                        'pointer-events': 'all'
                    });

                    if(opacity === 0)
                        slide_active.css({
                            'pointer-events': 'none',
                        });

                    width -= width_step;
                    opacity -= opacity_step;

                    if(opacity < 6)
                        opacity = 0;
                    if(width < 0)
                        width = 0;
                }
                opacity_step = 2;
                opacity = 8;
                width = 84;
                width_step = 42;
                slide_active = $wrapper.find('.active');
                while (true){
                    if(!slide_active.prev().length)
                        break;

                    slide_active = slide_active.prev();

                    slide_active.css({
                        'opacity': '0.' + opacity,
                        'width': width + 'px',
                        'height': width + 'px',
                        'pointer-events': 'all',
                    });

                    if(opacity === 0)
                        slide_active.css({
                            'pointer-events': 'none',
                        });

                    width -= width_step;
                    opacity -= opacity_step;

                    if(opacity < 6)
                        opacity = 0;
                    if(width < 0)
                        width = 0;
                }

                if (callback) {
                    callback();
                }
            }

            function goSlide(index, $paginate){
                $wrapper.find('.active').removeClass('active');
                $paginate.addClass('active');

                slideOpacity(function () {
                    var $wrapper_position = $wrapper.width()/2.1 - $paginate.position().left - $paginate.outerWidth()/2.1;
                    $wrapper.css( {
                        transition: "transform 0.2s",
                        transform:  'translate('+ $wrapper_position +'px, 0)'
                    } );

                    setTimeout( function() {
                        $wrapper.css( { transition: "none" } );

                        if($paginate.hasClass('clone')){
                            $paginate.removeClass('active');
                            $wrapper.find('div[data-index="'+ index +'"]:not(.clone)').addClass('active');

                            slideOpacity(function () {
                                var $wrapper_position = $wrapper.width()/2.1 - $wrapper.find('.active').position().left - $wrapper.find('.active').outerWidth()/2.1;
                                $wrapper.css('transform', 'translate('+ $wrapper_position +'px, 0)');
                            });
                        }
                    }, 200 );


                    // $items.animate({
                    //     'opacity': '0'
                    // }, 500, function () {
                    //     $wrapper.find('.swiper-slide.active').removeClass('active');
                    //     $wrapper.find('.swiper-slide[data-index="'+ index +'"]').addClass('active');
                    //
                    //     var slide_position = $wrapper.find('.swiper-slide.active').position().left;
                    //     $items.css({
                    //         'transform': 'translate('+ slide_position +'px, 0)'
                    //     });
                    //
                    //     setTimeout(function () {
                    //         $items.animate({
                    //             'opacity': '1'
                    //         }, 500);
                    //     }, 100);
                    // })
                });
            }
        });
    }
})();