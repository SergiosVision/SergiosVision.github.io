$(document).ready(function(){
    $('#form').submit(function(){
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            alert('Thanks for Order! We are contact with you soon!');
            $(this).find('input').val('');
        });
        return false;
    });
});