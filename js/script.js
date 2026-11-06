$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });

    var $slides = $('.hero-slide');
    var $dots = $('.hero-slider-dot');
    var slideIndex = 0;
    var slideTimer = null;

    function showSlide(index) {
        if ($slides.length === 0) return;
        slideIndex = (index + $slides.length) % $slides.length;
        $slides.removeClass('active').eq(slideIndex).addClass('active');
        $dots.removeClass('active').eq(slideIndex).addClass('active');
    }

    function startTimer() {
        if ($slides.length > 1) {
            slideTimer = setInterval(function () {
                showSlide(slideIndex + 1);
            }, 3000);
        }
    }

    if ($slides.length > 1) {
        startTimer();

        $dots.on('click', function () {
            clearInterval(slideTimer);
            showSlide($(this).index());
            startTimer();
        });
    }
});

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    });
});
