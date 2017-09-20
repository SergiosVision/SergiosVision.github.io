$('#search').keyup(function(){
    var searchField = $('#search').val();
    var expression = new RegExp(searchField, "i");
    $.getJSON('js/data.json', function(data){
        var output = '<ul class="searchResults">';
            $.each(data, function(key, val){
                if ((val.name.search(expression) != -1) || (val.bio.search(expression) != -1)) {
                    output += '<li>';
                    output += '<h2>' + val.name + '</h2>';
                    output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
                    output += '<p>' + val.bio + '</p>';
                    output += '<span>' + val.reknown + '</span>';
                    output += '</li>';
                }
            });

        output += '</ul>';
        $('#update').html(output);
    }); // Get Json
});