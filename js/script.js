$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

    // burger
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__ul').toggleClass('active');
    });
    // /burger

    // parallax
    var mainScene = $('.main__right').get(0);

    if ($(window).width() > 992.98) {
        var mainParallaxInstance = new Parallax(mainScene);
    }
    $(window).on('resize', function () {
        if ($(window).width() > 992.98) {
            var mainParallaxInstance = new Parallax(mainScene);
        }
    });

    var servicesScene = $('.services__right').get(0);

    if ($(window).width() > 992.98) {
        var servicesParallaxInstance = new Parallax(servicesScene, {
            scalarY: 110.0
        });
    }
    $(window).on('resize', function () {
        if ($(window).width() > 992.98) {
            var servicesParallaxInstance = new Parallax(servicesScene, {
                scalarY: 110.0
            });
        }
    });

    var stepsScene = $('.steps__circles').get(0);

    if ($(window).width() > 992.98) {
        var stepsParallaxInstance = new Parallax(stepsScene, {
            scalarY: 60.0
        });
    }
    $(window).on('resize', function () {
        if ($(window).width() > 992.98) {
            var stepsParallaxInstance = new Parallax(stepsScene, {
                scalarY: 60.0
            });
        }
    });

    // /parallax

    // accordeon
    $('.services__left-top').click(function () {
        if ($(this).next().hasClass('active')) {
            $(this).next().removeClass('active');
            $('.services__left-text').slideUp();
            return;
        }
        $('.services__left-text').slideUp();
        $(this).next().slideDown();
        $('.services__left-text').removeClass('active');
        $(this).next().addClass('active');
    });
    // /accordeon
    AOS.init({
        duration: 900,
        offset: 300,
        disable: function () {
            var maxWidth = 1182.98;
            return window.innerWidth < maxWidth;
        }
    });

    // счётчик при скролле
    let aosFlag = false;
    $(document).scroll(function () {
        if ($('.about__right').hasClass('aos-animate')) {
            if (aosFlag == false) {
                // счётчик
                $('.about__item-offer').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                // /счётчик
                aosFlag = true;
            }
            else {
                return;
            }
        }
    });
    // /счётчик при скролле
});