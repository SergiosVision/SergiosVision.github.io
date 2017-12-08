try {
    var imageLoader = document.getElementById('filePhoto');
    var getErrorImage = document.querySelector('.image-error');
    // imageLoader.addEventListener('change', handleImage, false);
    imageLoader.addEventListener('change', catchFileNames, false);

    function catchFileNames() {
        var files = imageLoader.files;
        var getDragContainer = document.querySelector('.dragAnDropInfo');
        getDragContainer.innerHTML = '<p>Click or drag the file to replace</p>';
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /^image\//;
            if (file.type.match(imageType)) {
                getDragContainer.innerHTML += '<p class="fileName">' + files[i].name + '</p>';
                getErrorImage.innerHTML = '';
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
            getDragContainer.innerHTML = '<p>Click or drag the file to replace</p>';
        } else {
            imageLoader.files = files;
        }
        //this code line fires your 'handleImage' function (imageLoader change event)
    }
}
catch
    (error)
{

}