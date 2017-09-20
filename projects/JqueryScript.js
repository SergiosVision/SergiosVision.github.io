$(document).ready( function(){
    $("[data-fancybox]").fancybox({
        youtube : {
            controls : 1,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
    //only number
    $( '.only-number' ).bind( 'change keyup input click', function() {
        if ( this.value.match( /[^0-9]/g ) ) {
            this.value = this.value.replace( /[^0-9]/g, '' );
        }
    });
    //------------
    //menu
    $( 'nav a:not(.t-link--openCallback), .t-menu_footer a' ).on( 'click', function( e ){
        e.preventDefault();
        var href= $(this).attr( 'href' ),
            scroll = $( href ).offset().top - 100;

        $('.t-menu--open').removeClass( 'active' );
        $( 'nav' ).removeClass( 'open' );
        $('body').removeClass('fixed');

        $( 'body' ).animate({
            scrollTop: scroll
        }, 200);
    });
    $( '.t-menu--open' ).on( 'click', function( e ){
        e.preventDefault();
        if( $(this).hasClass( 'active' ) ){
            $(this).removeClass( 'active' );
            $( 'nav' ).removeClass( 'open' );
            $('body').removeClass('fixed');
        } else{
            $(this).addClass( 'active' );
            $( 'nav' ).addClass( 'open' );
            $('body').addClass('fixed');
        }
    });
    //---------
    //dialog
    $( '.t-dialog' ).dialog({
        modal: true,
        autoOpen: false,
        width: 640,
        open: function(){
            $( '.ui-widget-overlay' ).on('click', function(e){
                e.preventDefault();
                $( '.t-dialog' ).dialog( 'close' );
            });
        },
        close: function(){
            $( '#callBack-dialog' ).find( 'input[type=text]' ).val( '' );
            $( '#callBack-dialog' ).find( 'input[type=checkbox]' ).prop( 'checked', false );
        }
    }); 
    $( '.t-link--openCallback' ).on( 'click', function(e) {
        e.preventDefault();

        var id = $(this).data('id');
        $('.t-dialog').find('input[name=typeForm]').val(id);

        var product_id = $(this).data('products_id');
        $('.t-dialog').find('input[name=data-products_id]').val(product_id);

        var payment_id = $(this).data('type_payment_id');
        $('.t-dialog').find('input[name=data-type_payment_id]').val(payment_id);

        var repair_id = $(this).data('repair_apartment_id');
        $('.t-dialog').find('input[name=data-repair_apartment_id]').val(repair_id);

        var type_realty_id = $(this).data('type_realty_id');
        $('.t-dialog').find('input[name=data-type_realty_id]').val(type_realty_id);

        switch (id){
            case 'callBack':
                $('.t-dialog').find('input[name=email]').addClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case 'callBack-2':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case 'callBack-3':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case  'callBack-4':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case 'callBack-5':
                $('.t-dialog').find('input[name=email]').addClass('hideInput');
                $('.t-dialog').find('input[name=time]').removeClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case  'callBack-6':
                $('.t-dialog').find('input[name=email]').addClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').removeClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case 'callBack-7':
                $('.t-dialog').find('input[name=email]').addClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').removeClass('hideInput');
                break;
            case 'callBack-8':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case  'callBack-9':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            case 'callBack-10':
                $('.t-dialog').find('input[name=email]').removeClass('hideInput');
                $('.t-dialog').find('input[name=time]').addClass('hideInput');
                $('.t-dialog').find('input[name=room]').addClass('hideInput');
                $('.t-dialog').find('.t-input-radio').addClass('hideInput');
                break;
            default:
                break;
        }

        if($(this).hasClass('file_download')){
            var doc = $(this).attr('href');
            $('.t-dialog').find('.t-btn').attr('href', doc).attr('download', 'true').addClass('download');
        }

        $( '.t-dialog' ).dialog( 'open' );

    });
    //--------
    //callBack
    $( 'input' ).focus(function(){
        $(this).closest( '.t-input' ).removeClass( 'error' );
    });
    $(":checkbox").change(function(){
        $(this).next().removeClass('error');
    });
    $(":radio").change(function(){
        $(this).closest('.t-input-radio').removeClass( 'error' );
    });
    $( 'body' ).on( 'click', '.t-callBack .t-btn', function( e ){        

        var $form = $( this ).closest( 'form' ),
            csrfToken = $( 'meta[name="csrf-token"]' ).attr( 'content' ),
            error = validate( $form );
        if( error ){
            var formtype = $form.find('input[name=typeForm]').val();
            var url = '';

            switch (formtype){
                case 'callBack':
                    url = '/free-callback/add';
                    break;
                case 'callBack-2':
                    url = '/discount-callback/add';
                    break;
                case 'callBack-3':
                    url = '/mortgage-callback/add';
                    break;
                case  'callBack-4':
                    url = '/apartment-selection--callback/add';
                    break;
                case 'callBack-5':
                    url = '/excursion-callback/add';
                    break;
                case  'callBack-6':
                    url = '/reservation-callback/add';
                    break;
                case 'callBack-7':
                    url = '/trade-in-callback/add';
                    break;
                case 'callBack-8':
                    url = '/repair-apartment-callback/add';
                    break;
                case  'callBack-9':
                    url = '/get-discount-callback/add';
                    break;
                case 'callBack-10':
                    url = '/price-callback/add';
                    break;
                default:
                    break;
            }


            var data = {
                name: $form.find( 'input[name=name]' ).val(),
                phone: $form.find( 'input[name=phone]' ).val(),
                email: $form.find( 'input[name=email]' ).val(),
                time_start: $form.find( 'input[name=time]' ).val(),
                count: $form.find( 'input[name=room]' ).val(),
                type_realty: $form.find( 'input[name=traid]:checked' ).val(),
                products_id: $form.find( 'input[name=data-products_id]' ).val(),
                repair_apartment_id: $form.find( 'input[name=data-repair_apartment_id]' ).val(),
                type_payment_id: $form.find( 'input[name=data-type_payment_id]' ).val(),
                type_realty_id: $form.find( 'input[name=data-type_realty_id]' ).val()
            };
            $.ajax({
                url: url,
                data: { fd: data, _csrf: csrfToken },
                type: 'POST',
                success: function() {
                    if($form.find('.t-btn').hasClass('download')){
                        $( '.t-dialog' ).dialog( 'close' );
                        $('form').val('');
                        $('form').each(function () {
                            $('input:not([type=checkbox], [type=hidden])').val('');
                            $('input[type=checkbox]').prop('checked', false);
                        });
                        $( '<div class="t-dialog_succes"><h3>Готово</h3><p>Ваша заявка принята. В ближайшее время с вами свяжется менеджер.</p><a href="#close" class="t-btn t-dialogClose">Закрыть</a></div>' ).dialog({
                            modal: true,
                            autoOpen: true,
                            width: 640,
                            open: function(){
                                $( '.ui-widget-overlay, .t-dialogClose' ).on('click', function(e){
                                    e.preventDefault();
                                    $( '.t-dialog_succes' ).dialog( 'close' );
                                });
                            }
                        });
                    } else{
                        e.preventDefault();

                        $( '.t-dialog' ).dialog( 'close' );
                        $('form').val('');
                        $('form').each(function () {
                            $('input:not([type=checkbox], [type=hidden])').val('');
                            $('input[type=checkbox]').prop('checked', false);
                        });
                        $( '<div class="t-dialog_succes"><h3>Готово</h3><p>Ваша заявка принята. В ближайшее время с вами свяжется менеджер.</p><a href="#close" class="t-btn t-dialogClose">Закрыть</a></div>' ).dialog({
                            modal: true,
                            autoOpen: true,
                            width: 640,
                            open: function(){
                                $( '.ui-widget-overlay, .t-dialogClose' ).on('click', function(e){
                                    e.preventDefault();
                                    $( '.t-dialog_succes' ).dialog( 'close' );
                                });
                            }
                        });
                        return false;
                    }

                }
            });
        } else{
            e.preventDefault();
            return false;
        }
    });
    //--------
    if( device.mobile() ){
        var slidersSwiper = [];
        $( '.swiper-container' ).each(function(e,item){
            var $item = $(this);

            if($item.parent().hasClass('t-plans')){
                if($(this).hasClass('active')){
                    var swiper = new Swiper($item, {
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        spaceBetween: 0,
                        pagination: '.swiper-pagination',
                        paginationType: 'fraction'
                    });
                    slidersSwiper.push( swiper );
                }
            } else{
                var swiper = new Swiper($item, {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 0,
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction'
                });
                slidersSwiper.push( swiper );
            }
        });
        $("select").change(function(){
            var id = $(this).val();

            $(this).parent().find('div.active').removeClass('active');
            $('#'+id).addClass('active');

            if($('#'+id).hasClass('swiper-container')){

                var swiper1 = new Swiper('#'+id, {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 0,
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction'
                });
                slidersSwiper.push( swiper1 );
            }
        });
    }
        $('.t-tabs a').click(function (e) {
            e.preventDefault();
            if($(this).hasClass('active')){
               return false;
            }
            var att = $(this).attr('href');
            $(this).parent().parent().find('div.active').removeClass('active');
            $('#'+att).addClass('active');
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');

        });

});

function validate( $form ){
    var error = 0;
    $form.find( '.validate' ).each( function(){        
        if( $(this).hasClass( 'checkbox' ) ){
            if( !$(this).prop('checked') ) {
                $(this).next().addClass( 'error' );
                error++;
            }
        } else{
            if( $(this).hasClass( 'radio' ) ){
                var radio_name = $(this).attr('name');
                var radio_length = $form.find('input[name='+radio_name+']:checked').length;
                if(radio_length === 0){
                    error++;
                    $(this).closest('.t-input-radio').addClass( 'error' );
                }
            } else {
                if (!$(this).hasClass('hideInput')) {
                    var $block = $(this).closest('.t-input');
                    $block.removeClass('error');
                    if ($(this).val() === '') {
                        $block.addClass('error');
                        error++;
                    }
                }
            }
        }
    });
    if( error === 0 )
        return true;
    else
        return false;
}