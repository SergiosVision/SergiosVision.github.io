var getSearchField = document.querySelector('#search');
var getResetBtn = document.querySelector('.resetBtn');
var getScrollTopBtn = document.querySelector('.scrollTopBth');
var getBody = document.body;
var getBodySecond = document.documentElement;

function callDisableButton() {
    if (getSearchField.value == '') {
        getResetBtn.setAttribute('disabled', true);
    } else {
        getResetBtn.removeAttribute('disabled');
    }
}

callDisableButton();

function callRequest() {
    var getValueForm = document.querySelector('#search').value;
    var expression = new RegExp(getValueForm, 'i');
    var request = new XMLHttpRequest();
    request.open('GET', 'js/data.json');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul class="searchResults">';
            for (var key in items) {
                if ((items[key].name.search(expression) != - 1) || (items[key].bio.search(expression) != - 1) || (items[key].reknown.search(expression) != - 1) ) {
                    output += '<li class="'+ items[key].name +'">';
                    output += '<h2>'+ items[key].name +'</h2>';
                    output += '<img src="images/'+ items[key].shortname +'_tn.jpg" alt="'+ items[key].name +'"/>';
                    output += '<p>'+ items[key].bio +'</p>';
                    output += '<span class="demo">Demo <a target="_blank" class="websiteLink" href="'+ items[key].link +'">'+ items[key].demo +'</a></span>';
                    output += '<span class="reknown">'+ items[key].reknown +'</span>';
                    output += '</li>';
                }
            }
            output += '</ul>';
            var getUpdateContainer = document.querySelector('#update');
            getUpdateContainer.innerHTML = output;
        }
    };
    request.send();
}
callRequest();

function deleteEmptyLinks() {
    setTimeout(function () {
        var getDemo = document.querySelectorAll('span.demo');
        getDemo.forEach(function (data) {
            if (data.innerText == 'Demo ') {
                data.parentNode.removeChild(data);
            }
        })
    },1000);
}
deleteEmptyLinks();

getSearchField.addEventListener('keyup', function () {
    callRequest();
    deleteEmptyLinks();
    callDisableButton();
});

getSearchField.addEventListener('change', function () {
    callRequest();
    deleteEmptyLinks();
    callDisableButton();
});

getResetBtn.addEventListener('click', function () {
    getSearchField.value = '';
    getSearchField.focus();
    callRequest();
    deleteEmptyLinks();
    callDisableButton();
});



// Show Scroll button

window.addEventListener('scroll', function () {
   if (getBody.scrollTop > 200 || getBodySecond.scrollTop > 200) {
       getScrollTopBtn.classList.add('showButton');
   } else {
       getScrollTopBtn.classList.remove('showButton');
   }
});


//Smooth scroll vanilla

var clerThisInterval = 0; // Needed to cancel the scrolling when we're at the top of the page

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
        clearInterval(clerThisInterval);
    }

    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 5 millisecons
    clerThisInterval = setInterval(scrollStep, 5);
    getBody.classList.add('working');
    if (getBody.classList.contains('working')) {
        return false;
    }
    setTimeout(function () {
        getBody.classList.remove('working');
    }, 1000)
}

// When the DOM is loaded, this click handler is added to our scroll button
getScrollTopBtn.addEventListener('click',scrollToTop);


