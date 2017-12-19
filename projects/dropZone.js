try {
    var _URL = window.URL || window.webkitURL;
    var imageLoader = document.getElementById('filePhoto');
    var getAllThemesChecked = document.querySelectorAll('.theme--card input:checked');
    var getErrorImage = document.querySelector('.image-error');
    var getAllThemes = document.querySelectorAll('.theme--card input');
    // imageLoader.addEventListener('change', handleImage, false);
    imageLoader.addEventListener('change', catchFileNames, false);

    function checkImgSize() {
        var getDragContainer = document.querySelector('.dragAnDropInfo');
        getAllThemes.forEach(function (data) {
            if (data.checked) {
                var getHeight = data.getAttribute('data-height');
                var getWidth = data.getAttribute('data-width');

                var file, img;
                if ((file = imageLoader.files[0])) {
                    img = new Image();
                    var img_width = 0,
                        img_height = 0;

                    img.onload = function() {
                        img_width = this.width;
                        img_height = this.height;
                        console.log(getWidth , getHeight , img_width , img_height);
                        if (parseInt(getWidth) === img_width && parseInt(getHeight) === img_height) {
                            getErrorImage.innerHTML = '';
                        } else {
                            var getP = '';
                            getAllThemes.forEach(function (data) {
                                if (data.checked) {
                                    var getHeight = data.getAttribute('data-height');
                                    var getWidth = data.getAttribute('data-width');
                                    getP += '<p>«Suggested image dimensions: <span id="dropZoneWidth">' + getWidth + '</span> by <span id="dropZoneHeight">' + getHeight + '</span> pixels.»</p>';
                                }
                            });
                            getDragContainer.innerHTML = '<p>Click or drag the file to replace</p>' +
                                ''+ getP +'';
                            getErrorImage.innerHTML += ''+ getP +'';
                            document.getElementById('filePhoto').value = '';
                        }
                    };
                    img.src = _URL.createObjectURL(file);
                }
            }
        });
    }

    function catchFileNames() {
        var files = imageLoader.files;
        var getDragContainer = document.querySelector('.dragAnDropInfo');
        var getP = '';
        getAllThemes.forEach(function (data) {
            if (data.checked) {
                var getHeight = data.getAttribute('data-height');
                var getWidth = data.getAttribute('data-width');
                getP += '<p>«Suggested image dimensions: <span id="dropZoneWidth">' + getWidth + '</span> by <span id="dropZoneHeight">' + getHeight + '</span> pixels.»</p>';
            }
        });
        getDragContainer.innerHTML = '<p>Click or drag the file to replace</p>' +
                                     ''+ getP +'';
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /^image\//;
            if (file.type.match(imageType)) {
                getDragContainer.innerHTML += '<p class="fileName">' + files[i].name + '</p>';
                getErrorImage.innerHTML = '';
                checkImgSize();
            } else {
                getErrorImage.innerHTML += '<p>In this field there should be a picture</p>';
                document.getElementById('filePhoto').value = '';
            }
        }
    }
    // function handleImage (e) {
    //     var reader = new FileReader();
    //     reader.onload = function (event) {
    //         $('#uploader img').attr('src',event.target.result);
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    // }

    var dropbox;
    dropbox = document.getElementById("dragAnDrop");
    dropbox.addEventListener("dragenter", dragenter, false);
    document.addEventListener("dragover", dragover, false);
    document.addEventListener("dragleave", dragLeave, false);
    dropbox.addEventListener("drop", drop, false);
    dropbox.addEventListener('click', function () {
        imageLoader.value = null;
        imageLoader.click();
    });


    function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        dropbox.classList.remove('dragover');
    }

    function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        dropbox.classList.add('dragover');
    }

    function drop(e) {
        var getDragContainer = document.querySelector('.dragAnDropInfo');
        getErrorImage.innerHTML = '';
        e.stopPropagation();
        e.preventDefault();
        dropbox.classList.remove('dragover');
        //you can check e's properties
        //console.log(e);
        var dt = e.dataTransfer;
        var files = dt.files;
        if (files.length > 1) {
            getErrorImage.innerHTML += '<p>You can upload only one picture</p>';
            document.getElementById('filePhoto').value = '';
            var getP = '';
            getAllThemes.forEach(function (data) {
                if (data.checked) {
                    var getHeight = data.getAttribute('data-height');
                    var getWidth = data.getAttribute('data-width');
                    getP += '<p>«Suggested image dimensions: <span id="dropZoneWidth">' + getWidth + '</span> by <span id="dropZoneHeight">' + getHeight + '</span> pixels.»</p>';
                }
            });
            getDragContainer.innerHTML = '<p>Click or drag the file to replace</p>' +
                                         ''+ getP +'';
        } else {
            imageLoader.files = files;
        }
        //this code line fires your 'handleImage' function (imageLoader change event
    }
}
catch
    (error)
{

}