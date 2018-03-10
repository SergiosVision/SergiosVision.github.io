var vm = new Vue({
    el: '#slideCtrl',
    data: {
        active: 1
    },
    methods: {
        move: function (amount){
            var newActive;
            const newIndex = this.active + amount;

            const count = this.$el.dataset.count;

            if (newIndex === 4) newActive = 3;
            if (newIndex === 0) newActive = 1;
            this.active = newActive || newIndex;
        }
    },
    computed: {

    }
});


$(document).ready(function () {

    $('.fullPage').fullpage();
    $('.fp-tableCell').removeClass();

    // Accordeon

    var getAccordBtn = $('.t-openAccordItem');
    var getAccordContent = $('.t-accordItemContent');

    $('body').on('click', '.t-openAccordItem', function () {
        if($('body').hasClass('animate')){
            return false;
        }
        $('body').addClass('animate');
        if ($(this).hasClass('is-active')){
            $(this).next(getAccordContent).slideUp(400);
            $(this).removeClass('is-active');
        } else {
            $(getAccordBtn).not(this).next(getAccordContent).slideUp(400);
            $(getAccordBtn).not(this).removeClass('is-active');

            $(this).next(getAccordContent).slideDown(400);
            $(this).addClass('is-active');
        }
        setTimeout(function () {
            $('body').removeClass('animate');
        }, 400);
    });



    // Simple Validation


});
