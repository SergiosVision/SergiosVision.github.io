const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tiny';
const ESC_KEY = 27;

function setDetails (imageUrl, titleText) {
    'use strict';

    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb (thumbnail) {
    'use strict';

    return thumbnail.getAttribute('data-image-url');
}

function  titleFromThumb (thumbnail) {
    'use strict';

    return thumbnail.getAttribute('data-image-title');
}

function setDeatilsFromThumb (thumbnail) {
    'use strict';

    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';

    thumb.addEventListener('click', (e) => {
        e.preventDefault();
        setDeatilsFromThumb(thumb);
        showDetails();
    });

}

function getThumbnailsArray () {
    'use strict';

    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails () {
    'use strict';

    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails () {
    'use strict';
    let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 500);
}

function addKeyPressHandler () {
    'use strict';

    document.body.addEventListener('keyup', (e) => {
        e.preventDefault();
        console.log(e.keyCode);
        if (e.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function  initializeEvents () {
    'use strict';

    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();