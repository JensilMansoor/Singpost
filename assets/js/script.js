// Header sticky Start
$(window).on("scroll", function() {

    if ($(window).scrollTop() > 350) {
        $(".sgp-header__nav").addClass("sticky");
        $(".sgp-header__top-nav").addClass("sticky-soomth");
    } else {
        $(".sgp-header__nav").removeClass("sticky");
        $(".sgp-header__top-nav").removeClass("sticky-soomth");
    }

});
// Header sticky End

// Header menu dropdown tab Start
$(".sgp-header__menu-drop-link--tab").click(function() {
    $(this).parent().closest(".sgp-header__menu-drop").find(".sgp-header__menu-drop-col--tab-expan").removeClass("active");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__menu-drop-col--tab-expan[data-content=" + id + "]").addClass("active");
});
// Header menu dropdown tab End

// mega menu start

$(".sgp-header__menu-btn-icon--hamberger").click(function() {
    $(".sgp-header__mega-menu").addClass("active");
    $("body").css("overflow", "hidden");
});

$(".sgp-header__mega-menu-close").click(function() {
    $(".sgp-header__mega-menu").removeClass("active");
    $("body").removeAttr("style");
});


// menu quick links
$(".sgp-header__qick-btn").click(function() {
    $(this).parent().toggleClass("active");
});

$(".sgp-header__mega-home-menu .sgp-header__menu-link").click(function() {
    $(".sgp-header__catgry").addClass("hide");
    $(this).parent().addClass("hide");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__mega-sub-menu-outer[data-content=" + id + "]").addClass("active");
});

$(".sgp-header__mega-sub-menu .sgp-header__menu-link").click(function() {
    $(".sgp-header__mega-sub-menu .sgp-header__menu-link").removeClass("active");
    $(this).addClass("active");
    $(this).parent().closest(".sgp-header__mega-sub-menu-outer").find(".sgp-header__mega-sub-menu").removeClass("active");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__mega-sub-menu[data-content=" + id + "]").addClass("active");
});

$(".sgp-header__mega-menu-back--one").click(function() {
    $(this).parent().closest(".sgp-header__mega-sub-menu-outer").removeClass("active");
    $(".sgp-header__mega-home-menu, .sgp-header__catgry").removeClass("hide");
});
$(".sgp-header__mega-menu-back--two").click(function() {
    $(this).parent().removeClass("active");
});

if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(".sgp-header__mega-menu").on("scroll", function() {
        if ($(".sgp-header__mega-menu").scrollTop() > 50) {
            $(".sgp-header__mega-menu-close").addClass("hide");
        } else {
            $(".sgp-header__mega-menu-close").removeClass("hide");
        }
    });
};

// mega menu end

// Notice Bar Close End
$(document).ready(function() {
    $(".sgp-notice__close-btn").click(function() {
        $(".sgp-notice").addClass("hide");
    });

    $('.sgp-notice__slider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow: $('.sgp-notice__prev'),
        nextArrow: $('.sgp-notice__next'),
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
            }
        }, ]
    });
});
// Notice Bar Close End

// Home Banner Slider settings Start
var $sgpBannerStatus = $('.sgp-banner__pagenation');
var $sgpBannerItem = $('.sgp-banner');

$sgpBannerItem.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if (!slick.$dots) {
        return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    $sgpBannerStatus.html("<span class='sgp-banner__pagenation-bold'>0" + i + "</span>&nbsp;&nbsp;/&nbsp;&nbsp;0" + (slick.$dots[0].children.length));

});

$(".sgp-banner").slick({
    dots: true,
    arrows: true,
    prevArrow: $('.sgp-banner__prev'),
    nextArrow: $('.sgp-banner__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 400,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slide: '.sgp-banner__item'
});
// Home Banner Slider settings End
// Help sec Slider settings Start
$(document).ready(function() {
    var $slider = $(".sgp-help-tile__slider");
    var $helpProgressBar = $("#helpProgress");
    var $helpProgressBarLabel = $("#helpSliderLabel");

    $slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $helpProgressBar
            .css("background-size", calc + "% 100%")
            .attr("aria-valuenow", calc);

        $helpProgressBarLabel.text(calc + "% completed");
    });

    $slider.slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, ]
    });
});
// Help sec Slider settings End

// SG-locate Slider settings start
var $locateSlider = $(".sgp-locate__inner");
var $locateProgressBar = $("#locateProgress");
var $locateProgressBarLabel = $("#locateSliderLabel");

$locateSlider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $locateProgressBar
        .css("background-size", calc + "% 100%")
        .attr("aria-valuenow", calc);

    $locateProgressBarLabel.text(calc + "% completed");
});

$locateSlider.slick({
    arrows: true,
    prevArrow: $('.sgp-locate__prev'),
    nextArrow: $('.sgp-locate__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    infinite: true,
    slide: '.sgp-locate__item',
});
// SG-locate Slider settings End