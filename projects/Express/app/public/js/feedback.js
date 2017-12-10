$(function() {
    $.getJSON('api', updateFeedback);

    $('.feedback-form').submit(function(e) {
        e.preventDefault();
        var data = {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        };
        $.post('api', data, updateFeedback);
        $('#feedback-form-name').val('');
        $('#feedback-form-title').val('');
        $('#feedback-form-message').val('');
    });

    $('.feedback-messages').on('click', function(e) {
        if (e.target.className == 'glyphicon glyphicon-remove') {
            $.ajax({
                url: 'api/' + e.target.id,
                type: 'DELETE',
                success: updateFeedback
            }); //ajax
        } // the target is a delete button
    }); //feedback messages

    function updateFeedback(data) {
        var output = '';
        var a = false;
        $.each(data,function(key, item) {
            a = true;
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
        });
        if (a) {
            $('.feedback-messages').html(output);
        } else {
            $('.feedback-messages').html('<h1 style="color: red; font-size: 18px; text-align: center; text-transform: uppercase; margin-top: 40px;">Not Found</h1>');
        }
    }
});