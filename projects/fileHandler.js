// Add  preview img

function fileHandler (evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('image.*')) {
        $('.wrapper').append("<div class='popup--form-send' style='background-color: red;'><span>You can add only pictures</span></div>");
        setTimeout(function () {
            $('.popup--form-send').addClass('active-message');
        }, 500);

        setTimeout(function () {
            $('.popup--form-send').removeClass('active-message');
        }, 6000)
        setTimeout(function () {
            $('.popup--form-send').remove();
        }, 7000);
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            var outputContaoner = document.querySelector('#output');
            outputContaoner.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
        };
    })(f);
    reader.readAsDataURL(f);
}

if (window.location.pathname == '/wizard') {
    document.getElementById('file').addEventListener('change', fileHandler, false);
}
