$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('.navbar').addClass('stickymenu');
        }
        else {
            $('.navbar').removeClass('stickymenu');
        }
    });
});