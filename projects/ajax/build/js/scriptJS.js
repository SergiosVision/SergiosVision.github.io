var searchFieldMain = document.querySelector('#search');
searchFieldMain.addEventListener('keyup', function () {
    var searchField = document.querySelector('#search').value;
    var expression = new RegExp(searchField, "i");
    var request = new XMLHttpRequest();
    
    request.open('GET', 'js/data.json');
    request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul class="searchResults">';
                for (var key in items){
                    if ((items[key].name.search(expression) != - 1) || (items[key].bio.search(expression) != - 1) || (items[key].reknown.search(expression) != - 1)) {
                        output += '<li>';
                        output += '<h2>' + items[key].name + '</h2>';
                        output += '<img src="images/' + items[key].shortname + '_tn.jpg" alt="' + items[key].name + '" />';
                        output += '<p>' + items[key].bio + '</p>';
                        output += '<span>' + items[key].reknown + '</span>';
                        output += '</li>';
                    }
                }
            output += '</ul>';
            var update = document.querySelector('#update');
            update.innerHTML = output;
        }
    }
    request.send();
}, false);