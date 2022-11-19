$(function() {
    /* Плавный переход по стрелке */
    $('.scroll-to').on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 0
        }, 800);
    });

    /* Настройки слайдера */
    $('.review__form').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    /* Всплывающее модальное окно при нажатии на кнопку */
    $('#btn').click(function() {
        $('#exampleModal').arcticmodal();
    });

})
