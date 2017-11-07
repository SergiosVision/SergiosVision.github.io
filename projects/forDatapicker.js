$('body').on('click', '#ui-datepicker-div td a', function () {
    var year = $(this).parent().data('year'),
    month = $(this).parent().data('month') + 1,
    day = $(this).text();

    var getLink = '/acivity/' + id + '?date=' + year + '-' + month + '-' + day;

    window.location = getLink;

});