var getBtn = document.querySelector('#btn');
getBtn.addEventListener('click', function () {
    var request = new XMLHttpRequest();

    request.open('GET', 'data.json');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
                for (var key in items){
                    output += '<li>' + items[key].name + '</li>';
                }
            output += '</ul>'

        var update = document.querySelector('#update');
        update.innerHTML = output;
      };
    }
    request.send(); 
}, false);