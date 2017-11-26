(function () {
    // Переменные. Берем мета теги. Также контент на нужной странице

    var YndexServices = ['vkontakte','facebook','odnoklassniki','moimir','gplus','twitter','viber','whatsapp','skype','telegram'], // Массив с сервисами от Яндекс.
        getMainTitle = document.querySelector('title'),
        getMetaNameitle = document.querySelector('meta[name="title"]'),
        getMetaNameDesc = document.querySelector('meta[name="description"]'),
        getMetaUrl = document.querySelector('meta[property="og:url"]'),
        getMetaImage = document.querySelector('meta[property="og:image"]'),
        getMetaImageSec = document.querySelector('meta[itemprop="image"]'),
        getMetaTitle = document.querySelector('meta[property="og:title"]'),
        getMetaDesc = document.querySelector('meta[property="og:description"]'),
        getMetaTwitterTitle = document.querySelector('meta[property="twitter:title"]'),
        getMetaTwitterDesc = document.querySelector('meta[property="twitter:description"]'),
        getMetaTitleSec = document.querySelector('meta[itemprop="name"]'),
        getMetaDescSec = document.querySelector('meta[itemprop="description"]'),
        getYndexDiv = document.querySelector('.ya-share2'),
        getYndexTitle = document.querySelector('article h1').innerText,
        getYndexDesc = document.querySelector('article h3').innerText,
        getImgae = document.querySelector('article img').getAttribute('src'),
        getUrl = window.location.href;
    getMetaUrl.setAttribute('content', getUrl);

    // Пример кода ниже для того чтобы можно было разбить ссылку на нужные части.

    // getUrl = getUrl.split('/');
    // var newArr = [];
    // var createNewUrl = 'http://' + newArr.concat(getUrl[2] + '/' + getUrl[3] + '/' + getImgae);

    // Заполняем данные

    var createNewUrl = getUrl + getImgae; // Соединяем ссылку для формирования картинки. В некоторых случаях нужно воспользоваться методом выше.
    getMainTitle.innerText = getYndexTitle;
    getMetaNameitle.setAttribute('content', getYndexTitle);
    getMetaNameDesc.setAttribute('content', getYndexDesc);
    getMetaImage.setAttribute('content', createNewUrl);
    getMetaImageSec.setAttribute('content', createNewUrl);
    getMetaTitle.setAttribute('content', getYndexTitle);
    getMetaDesc.setAttribute('content', getYndexDesc);
    getMetaTwitterTitle.setAttribute('content', getYndexTitle);
    getMetaTwitterDesc.setAttribute('content', getYndexDesc);
    getMetaTitleSec.setAttribute('content', getYndexTitle);
    getMetaTitleSec.setAttribute('content', getYndexTitle);
    getMetaDescSec.setAttribute('content', getYndexDesc);
    getYndexDiv.setAttribute('data-services',YndexServices);
    getYndexDiv.setAttribute('data-title',getYndexTitle);
    getYndexDiv.setAttribute('data-title:facebook',getYndexTitle);
    getYndexDiv.setAttribute('data-title:gplus',getYndexTitle);
    getYndexDiv.setAttribute('data-image',createNewUrl);
    getYndexDiv.setAttribute('data-description',getYndexDesc);
    getYndexDiv.setAttribute('data-description:facebook',getYndexDesc);
    getYndexDiv.setAttribute('data-description:gplus',getYndexDesc);
    getYndexDiv.setAttribute('data-description:vkontakte',getYndexDesc);
})();