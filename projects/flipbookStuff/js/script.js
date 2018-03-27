$(document).ready(function () {
    $.fn.size = function () {
        return this.length;
    };

    $('.call-book').on('click', function (e) {
        e.preventDefault();
        $('#modal').addClass('magazineWork');
        var getDataImages = $(this).data('images');
        var arrayImages = calcSource(getDataImages);
        var modalWindow = $('#modal');
        openBook(arrayImages, modalWindow);
    });

    $('.closeBtn').on('click', function (e) {
        e.preventDefault();
        if($('#modal').hasClass('magazineWork')) {
            $('#modal').removeClass('magazineWork').html('');
        }


    });
    
    function openBook(arrayImages, modalWindow) {
        modalWindow.onebook(arrayImages,{skin:['light','dark'], border: 0, language: 'ru'});
    }

    function calcSource(data) {
        var newArr = data.split(',');
        return newArr;
    }
    
});

