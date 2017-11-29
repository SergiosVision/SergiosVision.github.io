var getSearchField = document.querySelector('#search');
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
    },100);
}
deleteEmptyLinks();

getSearchField.addEventListener('keyup', function () {
    callRequest();
    deleteEmptyLinks();
});