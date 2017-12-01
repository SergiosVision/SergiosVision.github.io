var getSearchField = document.querySelector('#search');
var getResetBtn = document.querySelector('.resetBtn');
var getScrollTopBtn = document.querySelector('.scrollTopBth');
var getUpdateContainer = document.querySelector('#update');
var getBody = document.body;
var getBodySecond = document.documentElement;

// Function init Call button disable

function callDisableButton() {
    if (getSearchField.value == '') {
        getResetBtn.setAttribute('disabled', true);
    } else {
        getResetBtn.removeAttribute('disabled');
    }
}
callDisableButton(); // Call button disable

// Function init Fetch request

function callRequest() {
    var getValueForm = document.querySelector('#search').value;
    var expression = new RegExp(getValueForm, 'i');
    fetch('js/data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var items = data;
            var output = '<ul class="searchResults">';
            var a = false;
            for(var key in items) {
                if ((items[key].name.search(expression) != - 1) || (items[key].bio.search(expression) != - 1) || (items[key].reknown.search(expression) != - 1)) {
                    a = true;
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
            if(a) {
                getUpdateContainer.innerHTML = output;
            }
            else {
                getUpdateContainer.innerHTML = '<h1 class="notFound">Nothing found on your request</h1>';
            }
        })
        .catch(function (error) {
            getUpdateContainer.innerHTML = '<h1 class="connectionProblems">Connection error. Try again later</h1>' +
                                           '<h2 class="connectionProblems secondErrMsg">'+ error.message +'</h2>';
        })
}
callRequest();

// Function init Deleting Links if they empty

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
deleteEmptyLinks(); // Deleting Links if they empty

getSearchField.addEventListener('keyup', function () { // Calling this function when change happen in input keyup
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
});

getSearchField.addEventListener('change', function () { // Calling this function when change happen in input
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
});

getResetBtn.addEventListener('click', function () { // Reset button
    getSearchField.value = '';
    getSearchField.focus();
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
});

// Show Scroll button

window.addEventListener('scroll', function () {
   if (getBody.scrollTop > 200 || getBodySecond.scrollTop > 200) { // Use two body tags for all browsers
       getScrollTopBtn.classList.add('showButton');
   } else {
       getScrollTopBtn.classList.remove('showButton');
   }
});

//Smooth scroll vanilla

var clearThisInterval = 0; // Needed to cancel the scrolling when we're at the top of the page

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
        clearInterval(clearThisInterval);
    }

    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 5 milliseconds
    clearThisInterval = setInterval(scrollStep, 5);
    getScrollTopBtn.setAttribute('disabled', true);
    setTimeout(function () {
        getScrollTopBtn.removeAttribute('disabled');
    }, 2200);
}

// When the DOM is loaded, this click handler is added to our scroll button
getScrollTopBtn.addEventListener('click',scrollToTop);