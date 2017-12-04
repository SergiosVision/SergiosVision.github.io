var getSearchField = document.querySelector('#search');
var getResetBtn = document.querySelector('.resetBtn');
var getScrollTopBtn = document.querySelector('.scrollTopBth');
var getUpdateContainer = document.querySelector('#update');
var codeExample = document.querySelector('.codeExample');
var getNavigationContainer = document.querySelector('.navigation ul');
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
            var navOutput = '';
            var a = false;
            for(var key in items) {
                if ((items[key].name.search(expression) != - 1) || (items[key].bio.search(expression) != - 1) || (items[key].reknown.search(expression) != - 1) || (items[key].demo.search(expression) != - 1)) {
                    a = true;
                    output += '<li class="blocksAnim" id="'+ items[key].shortname +'">';
                    output += '<h2>'+ items[key].name +'</h2>';
                    output += '<img src="images/'+ items[key].shortname +'_tn.jpg" alt="'+ items[key].name +'"/>';
                    output += '<p>'+ items[key].bio +'</p>';
                    output += '<span class="demo">Demo <a target="_blank" class="websiteLink" href="'+ items[key].link +'">'+ items[key].demo +'</a></span>';
                    output += '<span class="reknown">'+ items[key].reknown +'</span>';
                    output += '</li>';
                }
                navOutput += '<li><a href="#'+ items[key].shortname +'">' + items[key].name + '</a></li>'
            }
            output += '</ul>';
            if(a) {
                getUpdateContainer.innerHTML = output;
                getNavigationContainer.innerHTML = navOutput;
                codeExample.style.display = 'block';
                document.querySelector('#update li').classList.remove('blocksAnim');
                var getBlocks = document.querySelectorAll('.searchResults li').length;
                document.querySelector('.spikersValue span').innerHTML = getBlocks;
                document.querySelector('.spikersValue .dontSee').innerHTML = 'If you dont see blocks, just make scroll'
            }
            else {
                getUpdateContainer.innerHTML = '<h1 class="notFound">Nothing found on your request</h1>';
                codeExample.style.display = 'none';
                document.querySelector('.spikersValue span').innerHTML =  '0';
                document.querySelector('.spikersValue .dontSee').innerHTML = '';

            }
        })
        .catch(function (error) {
            getUpdateContainer.innerHTML = '<h1 class="connectionProblems">Connection error. Try again later</h1>' +
                                           '<h2 class="connectionProblems secondErrMsg">'+ error.message +'</h2>';
            document.querySelector('.spikersValue span').innerHTML =  '0';
            document.querySelector('.spikersValue .dontSee').innerHTML = '';
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

// Smooth Show Blocks

function setBlocksAnimation() {
    setTimeout(function () {
        var getAnimBlocks = document.querySelectorAll('.searchResults li');
        window.addEventListener('scroll', function () {
            Array.prototype.forEach.call(getAnimBlocks, function (response) {
                var position = response.offsetTop;
                var windowTop = getBody.scrollTop || getBodySecond.scrollTop;

                if (window.innerWidth >= 1600) {
                    if (position < windowTop + 600) {
                        if (!response.classList.contains('blocksAnim')) {
                            document.querySelector('#update li').classList.remove('showBlocks');
                        } else {
                            response.classList.add('showBlocks');
                        }
                    }
                } else {
                    if (position < windowTop + 300) {
                        if (!response.classList.contains('blocksAnim')) {
                            document.querySelector('#update li').classList.remove('showBlocks');
                        } else {
                            response.classList.add('showBlocks');
                        }
                    }
                }
            })
        });
    }, 1000)
}
setBlocksAnimation(); // Call  Smooth Show Blocks

// Scroll Spy

function callScrollSpy() {
    setTimeout(function () {
        var getSections = document.querySelectorAll('.searchResults li');
        var sections = {};
        var getNavLinks = document.querySelector('.navigation ul li a');
        getNavLinks.classList.add('active');

        Array.prototype.forEach.call(getSections, function (e) {
            if (window.innerWidth >= 769) { // Get offste Top for each li
                // console.log(sections[e.id] = e.offsetTop - 100);
                sections[e.id] = e.offsetTop - 100;
            } else {
                // console.log(sections[e.id] = e.offsetTop - 30);
                sections[e.id] = e.offsetTop - 30;
            }
        });
        window.addEventListener('scroll', function () {
            var scrollPosition = getBody.scrollTop || getBodySecond.scrollTop;

            for (var i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelector('.active').setAttribute('class', ' ');
                    document.querySelector('.navigation a[href*=' + i + ']').setAttribute('class', 'active');
                }
            }

        });
    }, 1000);
}
callScrollSpy(); // Call Scroll Spy


// Smooth Scroll

function callSmoothScroll() {
    setTimeout(function () {
        // Feature Test
        if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

            // Function to animate the scroll
            var smoothScroll = function (anchor, duration) {

                // Calculate how far and how fast to scroll
                var startLocation = window.pageYOffset;
                var endLocation = anchor.offsetTop;
                var distance = endLocation - startLocation;
                var increments = distance/(duration/16);
                var stopAnimation;

                // Scroll the page by an increment, and check if it's time to stop
                var animateScroll = function () {
                    window.scrollBy(0, increments);
                    stopAnimation();
                };

                // If scrolling down
                if ( increments >= 0 ) {
                    // Stop animation when you reach the anchor OR the bottom of the page
                    stopAnimation = function () {
                        var travelled = window.pageYOffset;
                        if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                            clearInterval(runAnimation);
                        }
                    };
                }
                // If scrolling up
                else {
                    // Stop animation when you reach the anchor OR the top of the page
                    stopAnimation = function () {
                        var travelled = window.pageYOffset;
                        if ( travelled <= (endLocation || 0) ) {
                            clearInterval(runAnimation);
                        }
                    };
                }

                // Loop the animation function
                var runAnimation = setInterval(animateScroll, 8);

            };

            // Define smooth scroll links
            var scrollToggle = document.querySelectorAll('.navigation a');

            // For each smooth scroll link
            [].forEach.call(scrollToggle, function (toggle) {

                // When the smooth scroll link is clicked
                toggle.addEventListener('click', function(e) {

                    // Prevent the default link behavior
                    e.preventDefault();

                    // Get anchor link and calculate distance from the top
                    var dataID = toggle.getAttribute('href');
                    var dataTarget = document.querySelector(dataID);
                    var dataSpeed = toggle.getAttribute('data-speed');

                    // If the anchor exists
                    if (dataTarget) {
                        // Scroll to the anchor
                        smoothScroll(dataTarget, dataSpeed || 500);
                    }

                }, false);

            });

        }
    }, 1000);
}
callSmoothScroll(); // Call Smooth Scroll


getSearchField.addEventListener('keyup', function () { // Calling this function when change happen in input keyup
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
    callScrollSpy(); // Call Scroll Spy
    callSmoothScroll(); // Call Smooth Scroll
    setBlocksAnimation(); // Call  Smooth Show Blocks
});

getSearchField.addEventListener('change', function () { // Calling this function when change happen in input
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
    callScrollSpy(); // Call Scroll Spy
    callSmoothScroll(); // Call Smooth Scroll
    setBlocksAnimation(); // Call  Smooth Show Blocks
});

getResetBtn.addEventListener('click', function () { // Reset button
    getSearchField.value = '';
    getSearchField.focus();
    callRequest(); // Call Fetch request
    deleteEmptyLinks(); // Deleting Links if they empty
    callDisableButton(); // Call button disable
    callScrollSpy(); // Call Scroll Spy
    callSmoothScroll(); // Call Smooth Scroll
    setBlocksAnimation(); // Call  Smooth Show Blocks
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