// Header sticky Start
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 350) {
        $(".sgp-header__nav").addClass("sticky");
        $(".sgp-minicart").addClass("sticky");
        $(".sgp-header__top-nav").addClass("sticky-soomth");
        $(".sgp-calc-postage__result").addClass("sgp-calc-postage__result--sticky");
        $(".sgp-quick-chat, .sgp-quick-tool").addClass("show");

    } else {
        $(".sgp-header__nav").removeClass("sticky");
        $(".sgp-minicart").removeClass("sticky");
        $(".sgp-header__top-nav").removeClass("sticky-soomth");
        $(".sgp-calc-postage__result").removeClass("sgp-calc-postage__result--sticky");
        $(".sgp-quick-chat, .sgp-quick-tool").removeClass("show");
    }
    if ((window.matchMedia("screen and (min-width: 601px)").matches) && ($(window).scrollTop() > 25)) {
        $(".sgp-notice").hide();
    } else {
        $(".sgp-notice").show();
    }
    if ($(window).scrollTop() > 500) {
        $(".sgp-calc-postage__sticky").addClass("active");
    } else {
        $(".sgp-calc-postage__sticky").removeClass("active");
    }
});
// Header sticky End

// Header menu dropdown tab Start
// $(".sgp-header__menu-drop-link--tab").click(function() {
//     $(this).parent().closest(".sgp-header__menu-drop").find(".sgp-header__menu-drop-col--tab-expan").removeClass("active");
//     let id = $(this)[0].getAttribute("data-id");
//     $(".sgp-header__menu-drop-col--tab-expan[data-content=" + id + "]").addClass("active");
// });
// Header menu dropdown tab End

// mega menu start

$(".sgp-header__menu-btn-icon--hamberger").click(function() {
    $(".sgp-header__mega-menu").addClass("active");
    $("body").css("overflow", "hidden");
    $(".sgp-header__mega-home-menu, .sgp-header__catgry").removeClass("hide");
});

$(".sgp-header__mega-menu-close").click(function() {
    $(".sgp-header__mega-menu").removeClass("active");
    $(".sgp-header__mega-sub-menu-outer").removeClass("active");
    $("body").removeAttr("style");
    $(".sgp-header__mega-sub-menu--one, .sgp-header__mega-sub-menu--two, .sgp-header__mega-sub-menu--three, .sgp-header__mega-sub-menu--one .sgp-header__menu-link").removeClass("active");
});


// menu quick links
$(".sgp-header__qick-btn").click(function() {
    $(this).parent().toggleClass("active");
});

$(".sgp-header__mega-home-menu .sgp-header__menu-link").click(function() {
    var data = $(this).next(".sgp-toggle_menu-level-section").html();
    if (typeof data != "undefined") {
        $('.sgp-header__mega-sub-menu-outer').html(data);
        $('.sgp-header__mega-sub-menu-outer').addClass("active");
    }
    $(".sgp-header__catgry").addClass("hide");
    $(this).closest(".sgp-header__mega-home-menu").addClass("hide");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__mega-sub-menu-outer[data-content=" + id + "]").addClass("active");
});

setInterval(function() {
    $(".sgp-header__mega-sub-menu-outer .sgp-header__menu-link.menu_level_1").click(function() {
        var data = $(this).next(".sgp-header__home-head-sub-list").html();
        var data_title = $(this).text();
        if (typeof data != "undefined") {
            $('.sgp-header__mega-sub-menu-outer .sgp-header__mega-sub-menu--two ul').html(data);
            $('.sgp-header__mega-sub-menu-outer .sgp-header__mega-sub-menu--two .sgp-header__mega-sub-title span').text(data_title);
            $('.sgp-header__mega-sub-menu--two').addClass("active");
        }
    });
}, 1000);

setInterval(function() {
    $(".sgp-header__mega-sub-menu-outer .sgp-header__menu-link.menu_level_2").click(function() {
        var data = $(this).next(".sgp-header__home-head-sub-list").html();
        var data_title = $(this).text();
        if (typeof data != "undefined") {
            $('.sgp-header__mega-sub-menu-outer .sgp-header__mega-sub-menu--three ul').html(data);
            $('.sgp-header__mega-sub-menu-outer .sgp-header__mega-sub-menu--three .sgp-header__mega-sub-title span').text(data_title);
            $('.sgp-header__mega-sub-menu--three').addClass("active");
        }
    });
}, 1000);

$(".sgp-header__mega-sub-menu--one .sgp-header__menu-link").click(function() {
    $(".sgp-header__mega-sub-menu--one .sgp-header__menu-link").removeClass("active");
    $(".sgp-header__mega-sub-menu--three").removeClass("active");
    $(".sgp-header__mega-sub-menu--two .sgp-header__menu-link").removeClass("active");
    $(this).addClass("active");
    $(this).parent().closest(".sgp-header__mega-sub-menu-outer").find(".sgp-header__mega-sub-menu--two").removeClass("active");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__mega-sub-menu--two[data-content=" + id + "]").addClass("active");
});

$(".sgp-header__mega-sub-menu--two .sgp-header__menu-link").click(function() {
    $(".sgp-header__mega-sub-menu--two .sgp-header__menu-link").removeClass("active");
    $(this).addClass("active");
    $(this).parent().closest(".sgp-header__mega-sub-menu-outer").find(".sgp-header__mega-sub-menu--three").removeClass("active");
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-header__mega-sub-menu--three[data-content=" + id + "]").addClass("active");
});

setInterval(function() {
    $(".sgp-header__mega-menu-back--one").click(function() {
        $(this).parent().closest(".sgp-header__mega-sub-menu-outer").removeClass("active");
        $(".sgp-header__mega-home-menu, .sgp-header__catgry").removeClass("hide");
        $(".sgp-header__mega-sub-menu").removeClass("active");
    });
}, 1000);

setInterval(function() {
    $(".sgp-header__mega-menu-back--two").click(function() {
        $(this).parent().removeClass("active");
    });
}, 1000);

setInterval(function() {
    $(".sgp-header__mega-menu-back--three").click(function() {
        $(this).parent().removeClass("active");
    });
}, 1000);

if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(".sgp-header__mega-menu").on("scroll", function() {
        if ($(".sgp-header__mega-menu").scrollTop() > 50) {
            $(".sgp-header__mega-menu-close").addClass("hide");
        } else {
            $(".sgp-header__mega-menu-close").removeClass("hide");
        }
    });
};

if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(".sgp-header__mega-sub-menu--one").on("scroll", function() {
        if ($(".sgp-header__mega-sub-menu--one").scrollTop() > 50) {
            $(".sgp-header__mega-menu-close").addClass("hide");
        } else {
            $(".sgp-header__mega-menu-close").removeClass("hide");
        }
    });
};

if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(".sgp-header__mega-sub-menu--two").on("scroll", function() {
        if ($(".sgp-header__mega-sub-menu--two").scrollTop() > 50) {
            $(".sgp-header__mega-menu-close").addClass("hide");
        } else {
            $(".sgp-header__mega-menu-close").removeClass("hide");
        }
    });
};

if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(".sgp-header__mega-sub-menu--three").on("scroll", function() {
        if ($(".sgp-header__mega-sub-menu--three").scrollTop() > 50) {
            $(".sgp-header__mega-menu-close").addClass("hide");
        } else {
            $(".sgp-header__mega-menu-close").removeClass("hide");
        }
    });
};

// mega menu end

// Quick tool start
$(".sgp-quick-tool__btn").click(function() {
    $(this).parent().toggleClass("active");
});
$(".sgp-quick-tool__popup-close").click(function() {
    $(".sgp-quick-tool").removeClass("active");
});
// Quick tool end

// Accordion start
$(".sgp-accordion__btn").click(function() {
    $(".sgp-accordion .card").toggleClass("active");
    $(this).parent().closest(".card").addClass("active");
});
// Accordion end

// postage calculate mobile dropdown
$(document).on("click", function() {
    $(".sgp-calc-postage__result").removeClass("active");
});
$(".sgp-calc-postage__result-box-head").click(function(e) {
    $(".sgp-calc-postage__result").toggleClass("active");
    e.stopPropagation();
});

$(".sgp-compare__detail-wrapp .sgp-compare__prdct-row").click(function() {
    let id = $(this)[0].getAttribute("data-id");
    $(".sgp-compare__prdct-item .sgp-compare__prdct-row[data-id=" + id + "]").toggleClass("active");
});
// custom accordion start
$(".sgp-accordion-custom__label").click(function() {
    let currentId = $(this).parent()[0].getAttribute("data-acc");
    if (($(this).parent().closest(".sgp-accordion-custom").hasClass("active"))) {
        $(".sgp-accordion-custom[data-acc=" + currentId + "]").removeClass("active");
    } else {
        $(".sgp-accordion-custom").removeClass("active");
        $(".sgp-accordion-custom[data-acc=" + currentId + "]").addClass("active");
    }
});
// custom accordion end

// custom select dropdown start
$(document).on("click", function(e) {
    $(".sgp-custom-select").removeClass("active");
});
$(".sgp-custom-select").click(function(e) {
    e.stopPropagation();
});
$(".sgp-custom-select__value").click(function(e) {
    if (!$(this).parent().hasClass("active")) {
        $(".sgp-custom-select").removeClass("active");
    }
    $(this).parent().toggleClass("active");
    e.stopPropagation();
});

$(".sgp-custom-select__item").click(function() {
    $(this).parent().closest(".sgp-custom-select").find(".sgp-custom-select__value").text($(this).text());
    $(".sgp-custom-select").removeClass("active");
});
// custom select dropdown end

// postage popup start
$(document).on("click", function() {
    $(".spg-postal-popup").removeClass("active");
});
$(".spg-postal-popup").click(function(e) {
    e.stopPropagation();
});
$(".spg-postal-popup .sgp-link-btn").click(function() {
    if (!$(this).parent().hasClass("active")) {
        $(".spg-postal-popup").removeClass("active");
    }
    $(this).parent().toggleClass("active");
});
$(".spg-postal-popup .spg-postal-popup__close").click(function() {
    $(".spg-postal-popup").removeClass("active");
});
// postage popup end

// Notice Bar Close End
$(document).ready(function() {
    var noticeBar = document.querySelector(".sgp-notice")
    if ((window.matchMedia("(min-width: 601px)").matches) && noticeBar) {
        $("body").addClass("sgp-notice__active");
    } else {
        $("body").removeClass("sgp-notice__active");
    }
    $(".sgp-notice__close-btn").click(function() {
        $(".sgp-notice").addClass("hide");
        $("body").removeClass("sgp-notice__active");
    });

    /****************************** Stickybar(blue strip) Start ******************************/
    // Cache selectors
    var stickyBar = $(".sgp-sticky-bar"),
        header = $("header"),
        stickyBarHeight = stickyBar.outerHeight(),
        // All list items
        menuItems = stickyBar.find(".sgp-sticky-bar__item"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
    // Bind to scroll
    $(window).scroll(function() {
        $('.scrolledIntoView').each(function() {
            if ((isScrolledIntoView(this) === true) || menuItems.hasClass("active")) {
                stickyBar.addClass('active');
            } else {
                stickyBar.removeClass('active');
            }
        });
        // Get container scroll position
        var fromTop = $(this).scrollTop() + stickyBarHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) {
                return this;
            }
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems.removeClass("active");
        menuItems.filter("[href='#" + id + "']").addClass("active");
    });

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var elemTop = $(elem).offset().top + $(elem).height();
        return ((elemTop <= docViewTop));
    }
    /****************************** Stickybar(blue strip) End ******************************/

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
                adaptiveHeight: true,
            }
        }, ]
    });
});
// Notice Bar Close End

// Home Banner Slider settings Start
var $sgpBannerStatus = $('.sgp-banner__pagenation');
var $sgpBannerItem = $('.sgp-banner__slider');

$sgpBannerItem.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if (!slick.$dots) {
        return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    $sgpBannerStatus.html("<span class='sgp-banner__pagenation-bold'>0" + i + "</span>&nbsp;&nbsp;/&nbsp;&nbsp;0" + (slick.$dots[0].children.length));

});

$(".sgp-banner__slider").slick({
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

// SG-locate Slider settings start
$(".sgp-locate__inner").slick({
    arrows: true,
    prevArrow: $('.sgp-locate__prev'),
    nextArrow: $('.sgp-locate__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    infinite: true,
    slide: '.sgp-locate__item',
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true
        }
    }]
});
// SG-locate Slider settings End

// SG-locate Slider settings start
$(".sgp-life-post__slider").slick({
    arrows: true,
    prevArrow: $('.sgp-life-post__prev'),
    nextArrow: $('.sgp-life-post__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    infinite: true,
    slide: '.sgp-masthead__wrapper',
    responsive: [
        //     breakpoint: 1023,
        //     settings: {
        //         dots: true
        //     }
        // },
        {
            breakpoint: 1023,
            settings: {
                dots: true
            }
        }
    ]
});
// SG-locate Slider settings End

$(function () {
    $('.sgp-pers-featured__slider').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            arrows: true,
            dots: true,
            prevArrow: $('.sgp-pers-featured__prev'),
            nextArrow: $('.sgp-pers-featured__next'),
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 300,
            infinite: true,
            slide: ".sgp-tile",
            responsive: [{
                breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                breakpoint: 600,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                }, {
                breakpoint: 567,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
});
//Personal home featured news slider ends

//Policy Information and Downloads slider Start
$(function () {
    $('.sgp-policy-info__slider').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            arrows: true,
            dots: true,
            prevArrow: $('.sgp-policy-info__prev'),
            nextArrow: $('.sgp-policy-info__next'),
            slidesToScroll: 1,
            slidesToShow: 4,
            speed: 300,
            infinite: true,
            slide: ".sgp-tile",
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        dots: true
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
});
//Policy Information and Downloads slider ends

// Services slider start
$(".sgp-service__slider").slick({
    arrows: false,
    responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                slide: ".sgp-tile"
            }
        },
        {
            breakpoint: 567,
            settings: {
                dots: true,
                slide: ".sgp-tile"
            }
        }
    ]
});
if ((window.matchMedia("(max-width: 767px)").matches)) {
    $(window).resize(function() {
        $('.sgp-service__slider')[0].slick.refresh();
    });
}
// Services slider end

//Send and recieve featured service slider Start
$(".sgp-snd-rec__featured-slider").slick({
    arrows: true,
    dots: true,
    prevArrow: $('.sgp-snd-rec__featured-prev'),
    nextArrow: $('.sgp-snd-rec__featured-next'),
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    infinite: true,
    slide: ".sgp-tile-bg",
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 567,
        settings: {
            slidesToShow: 1
        }
    }]
});
//Send and recieve featured service slider ends

//Personal home social feed slider start
$(".sgp-pers-social__slider").slick({
    arrows: true,
    dots: true,
    prevArrow: $('.sgp-pers-social__prev'),
    nextArrow: $('.sgp-pers-social__next'),
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 300,
    infinite: true,
    slide: ".sgp-tile",
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true
        }
    }, {
        breakpoint: 567,
        settings: {
            slidesToShow: 1
        }
    }]
});
//Personal home social feed slider end

//Send and recieve two slider start
$(".sgp-snr-reg-serv__slider").slick({
    arrows: true,
    dots: true,
    prevArrow: $('.sgp-snr-reg-serv__prev'),
    nextArrow: $('.sgp-snr-reg-serv__next'),
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 300,
    infinite: true,
    slide: ".sgp-tile",
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true
        }
    }, {
        breakpoint: 567,
        settings: {
            slidesToShow: 1
        }
    }]
});

$(function () {
    $('.sgp-service-announce__slider').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            arrows: true,
            prevArrow: $('.sgp-service-announce__prev'),
            nextArrow: $('.sgp-service-announce__next'),
            dots: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 300,
            infinite: false,
            slide: ".sgp-tile",
            responsive: [{
                breakpoint: 600,
                settings: {
                    dots: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
});

$(function () {
    $('.sgp-useful-links__slider').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            arrows: true,
            prevArrow: $('.sgp-useful-links__prev'),
            nextArrow: $('.sgp-useful-links__next'),
            dots: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 300,
            infinite: false,
            slide: ".sgp-tile",
            responsive: [{
                breakpoint: 600,
                settings: {
                    dots: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
});

//service-announce slider end

// Relevant Queries slider start
$(".sgp-arrow-center__slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    slide: ".sgp-tile",
    prevArrow: ".sgp-arrow-center__prev",
    nextArrow: ".sgp-arrow-center__next",
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});
// Relevant Queries slider end

// Bg Overlay Tiles Box Start
$(".sgp-tile-box__slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    slide: ".sgp-tile-bg",
    prevArrow: ".sgp-tile-box__prev",
    nextArrow: ".sgp-tile-box__next",
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true
            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});
// Bg Overlay Tiles Box End

// Masthead image slider Start
$(".sgp-masthead__img-slider").slick({
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    slide: ".sgp-masthead__img",
    infinite: false
});
// Masthead image slider End

//Personalised home featured news slider Start
$(".sgp-basic-serv__slider").slick({
    arrows: true,
    dots: false,
    prevArrow: $('.sgp-basic-serv__prev'),
    nextArrow: $('.sgp-basic-serv__next'),
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    infinite: true,
    responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});
//Personal home featured news slider ends

//send and recieve tracked mail slider starts
$(".sgp-snr-steps__wrapper").slick({
    arrows: false,
    responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                slide: ".sgp-snr-steps__box"
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                slide: ".sgp-snr-steps__box"
            }
        },
        {
            breakpoint: 567,
            settings: {
                dots: true,
                slide: ".sgp-snr-steps__box"
            }
        }
    ]
});

//gallery image slider settings
$(".sgp-gallery-slider-settings").slick({
    slide: ".sgp-gallery-slider__item",
    arrows: true,
    dots: false,
    prevArrow: $('.sgp-gallery-slider__prev'),
    nextArrow: $('.sgp-gallery-slider__next'),
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    infinite: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    }, ]
});
//popup gallery image slider settings
$(".sgp-gallery-popup-slider").slick({
    slide: ".sgp-gallery-slider__item",
    arrows: true,
    dots: false,
    prevArrow: $('.sgp-gallery-popup__prev'),
    nextArrow: $('.sgp-gallery-popup__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    infinite: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true,
            arrows: false,
        }
    }, ]
});

$('.modal').on('shown.bs.modal', function(e) {
    $('.sgp-gallery-popup-slider').slick('setPosition');
    $('.sgp-gallery-popup-slider').addClass('open');
});
$('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
        $('.sgp-snr-steps__wrapper').slick('setPosition', 0);
        $('.sgp-snr-steps__wrapper').resize();
    })
    //send and recieve tracked mail slider end

//key featured slider starts
$('.sgp-snr-steps__wrapper--color-tile').slick({
    arrows: false,
    responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                slide: ".sgp-snr-steps__box-color"
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                slide: ".sgp-snr-steps__box-color"
            }
        },
        {
            breakpoint: 567,
            settings: {
                dots: true,
                slide: ".sgp-snr-steps__box-color"
            }
        }
    ]
});
$(window).on('resize', function() {
    $('.sgp-snr-steps__wrapper--color-tile').slick('resize');
    $('.sgp-pers-featured__slider').slick('resize');
    $('.sgp-snr-steps__wrapper').slick('resize');
    $('.sgp-useful-links__slider').slick('resize');
});
//key featured tracked mail slider end

//Value added service slider starts
$(".sgp-val-added__slider").slick({
    dots: false,
    arrows: true,
    prevArrow: $('.sgp-val-added__prev'),
    nextArrow: $('.sgp-val-added__next'),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 400,
    infinite: true,
    slide: '.sgp-val-added__item',
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true,
        }
    }]
});

//Value added service slider end

//rate tile slider start
$(".sgp-rate-tile-slider").slick({
    arrows: true,
    dots: false,
    prevArrow: $('.sgp-rate-tile__prev'),
    nextArrow: $('.sgp-rate-tile__next'),
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 300,
    infinite: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true,
            slidesToShow: 1
        }
    }]
});
//rate tile slider end

// Store PDP - recommended items slider start
$(".sgp-store-recom__slider").slick({
    arrows: true,
    dots: true,
    prevArrow: $('.sgp-store-recom__prev'),
    nextArrow: $('.sgp-store-recom__next'),
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    infinite: true,
    slide: ".sgp-tile",
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true
        }
    }, {
        breakpoint: 1023,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 567,
        settings: {
            slidesToShow: 1
        }
    }]
});
$(function () {
    $('.sgp-useful-links__slider').each(function(num, elem) {
        elem = $(elem);
        elem.slick({
            arrows: true,
            prevArrow: $('.sgp-useful-links__prev'),
            nextArrow: $('.sgp-useful-links__next'),
            dots: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 300,
            infinite: false,
            slide: ".sgp-tile",
            responsive: [{
                breakpoint: 600,
                settings: {
                    dots: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
});
// Store PDP - recommended items slider ends

// Comparison slider setting strat
$('.sgp-compare__slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: $('.sgp-compare__prev'),
    nextArrow: $('.sgp-compare__next'),
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    slide: '.sgp-compare__prdct-item',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
    }]
});
// Comparison slider setting end

// About awards year slider settings start
$('.sgp-awards-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    asNavFor: '.sgp-awards-slider-nav',
    prevArrow: $('.sgp-awards-slider__prev'),
    nextArrow: $('.sgp-awards-slider__next'),
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: true,
        }
    }]
});
$('.sgp-awards-slider-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.sgp-awards-slider-for',
    dots: false,
    infinite: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
});
$(window).on('orientationchange', function() {
    $('.sgp-awards-slider-for, .sgp-awards-slider-nav').slick('resize');
});
// About awards year slider settings end

//Business help tile slider starts
$(".sgp-help-tile__slider").slick({
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
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, ]
});
//Business help tile slider ends

// About our milestones slider settings start
$('.sgp-milestones-slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.sgp-milestones-slider-nav',
    prevArrow: $('.sgp-milestones-slider__prev'),
    nextArrow: $('.sgp-milestones-slider__next'),
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 600,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
$('.sgp-milestones-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sgp-milestones-slider-for',
    dots: false,
    infinite: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$(window).on('orientationchange', function() {
    $('.sgp-milestones-slider-for, .sgp-milestones-slider-nav').slick('resize');
});
// About our milestones slider settings end

// About divident history slider settings start
$('.sgp-history-slider-for').slick({
    dots: false,
    infinite: false,
    arrows: true,
    asNavFor: '.sgp-history-slider-nav',
    prevArrow: $('.sgp-history-slider__prev'),
    nextArrow: $('.sgp-history-slider__next'),
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    slide: '.sgp-history-slider__column-tile',
    responsive: [{
        breakpoint: 1023,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
    }]
});
$('.sgp-history-slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.sgp-history-slider-for',
    prevArrow: $('.sgp-history-slider__prev'),
    nextArrow: $('.sgp-history-slider__next'),
    speed: 300,
    dots: false,
    infinite: false,
    focusOnSelect: true,
    slidesToScroll: 1,
    slide: '.sgp-history-slider__year',
    responsive: [{
        breakpoint: 1023,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$(".sgp-tile-box__about-slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    slide: ".sgp-tile-bg",
    prevArrow: ".sgp-tile-box__prev",
    nextArrow: ".sgp-tile-box__next",
    responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true
            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});

$(window).on('orientationchange', function() {
    $('.sgp-history-slider-for, .sgp-history-slider-nav').slick('resize');
});
// About divident history slider settings end

// Tile image slider
var tileImgSliderOptions = {
    slide: '.sgp-tile__img',
    fade: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
}
$(".sgp-tile__img-sec").slick(tileImgSliderOptions);
// window.addEventListener('resize', function(event) {
//     $(".sgp-tile__img-sec").slick.refresh();
// }, true);

// Minicart start
var miniCart = document.querySelector(".sgp-minicart__cart");
$(".sgp-minicart__strip").click(function(e) {
    $(".sgp-minicart__cart").toggleClass("active");
    $("body").toggleClass("sgp-minicart__disable-scroll");
    e.stopPropagation();
});
document.addEventListener('click', function(event) {
    var target = event.target;
    if (miniCart && (target === miniCart || miniCart.contains(target))) {
        return;
    } else {
        closeMinicart();
    }
});
$(".sgp-minicart__close").click(function() {
    closeMinicart();
});

function closeMinicart() {
    if (miniCart) {
        miniCart.classList.remove("active");
        document.querySelector("body").classList.remove("sgp-minicart__disable-scroll");
    }
}
// Minicart end

// Filter sidebar start
var filter = document.querySelector(".sgp-filter__btn");
var sideBar = document.querySelector(".sgp-filter__sidebar");
var sideBarOverlay = document.querySelector(".sgp-filter__overlay");
var body = document.querySelector("body");
// var toggler = $(".sgp-switch input");
// var togglerLabel = $(".sgp-switch");

if (filter || sideBarOverlay) {
    filter.addEventListener('click', function(e) {
        sideBar.classList.add("active");
        sideBarOverlay.classList.add("active");
        body.classList.add("modal-open");
        e.stopPropagation();
    });
    sideBarOverlay.addEventListener('click', closeSideBar);
    document.getElementsByClassName('sgp-filter__close')[0].addEventListener('click', closeSideBar);
}

function closeSideBar(e) {
    sideBar.classList.remove("active");
    sideBarOverlay.classList.remove("active");
    body.classList.remove("modal-open");
}
// Filter sidebar end

// Toggle tile view start
$(".sgp-btn__view--list").click(function() {
    let currentId = $(this)[0].getAttribute("data-list");
    $(".sgp-service__wrapper[data-view=" + currentId + "]").addClass("sgp-list-view");
    $(this).addClass("active");
    $(this).siblings(".sgp-btn__view").removeClass("active");
});
$(".sgp-btn__view--grid").click(function() {
    let currentId = $(this)[0].getAttribute("data-list");
    $(".sgp-service__wrapper[data-view=" + currentId + "]").removeClass("sgp-list-view");
    $(this).addClass("active");
    $(this).siblings(".sgp-btn__view").removeClass("active");
});
// Toggle tile view end
// Locate us filter start
$(".sgp-locate-us__load-more").click(function() {
    $(".sgp-locate-us__sec-1").toggleClass("active");

});
$(".sgp-locate-result__tile").click(function() {
    if (!$(this).hasClass("active")) {
        $(".sgp-locate-result__tile").removeClass("active");
    }
    $(this).addClass("active");
});
// Locate us filter end

// Postpal functinalities start
$(".sgp-postpal-func__btn").click(function() {
    let postpalId = $(this)[0].getAttribute("data-postpal-id");
    let postpalTarget = $(".sgp-postpal-func__tooltip[data-postpal-taget=" + postpalId + "]");
    $(".sgp-postpal-func__btn").not(this).removeClass("active");
    $(this).toggleClass("active");
    if (window.matchMedia('(min-width:600px)').matches) {
        $(this).append(postpalTarget);
        return;
    } else {
        $(".sgp-postpal-func__tooltip").not(postpalTarget).removeClass("active");
        postpalTarget.toggleClass("active");
    }
});
$(".sgp-postpal-func__tooltip").click(function(e) {
    e.stopPropagation();
});
// Postpal functinalities end

// Toggle calender event view start
var eventViewToggler = document.getElementById("calenderEventToggler");

function setEventView() {
    if (eventViewToggler.checked == true) {
        $(".sgp-events__calender").hide();
        $(".sgp-events__summary").show();
        $("label[for='calenderEventToggler']").text("Event Summary");
    } else {
        $(".sgp-events__summary").hide();
        $(".sgp-events__calender").show();
        $("label[for='calenderEventToggler']").text("Calendar Mode");
    }
}
if (window.matchMedia('(max-width:600px)').matches) {
    setEventView();
    eventViewToggler.addEventListener('change', function() {
        setEventView();
    });
}
// Toggle calender event view end

// Toggle, Checkbox and Radio js Start
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _gsap = gsap;
var to = _gsap.to;
var set = _gsap.set;
var from = _gsap.from;
var fromTo = _gsap.fromTo;

var getVar = function getVar(key) {
    var elem = arguments.length <= 1 || arguments[1] === undefined ? document.documentElement : arguments[1];
    return getComputedStyle(elem).getPropertyValue(key);
};
document.querySelectorAll('.sgp-radio').forEach(function(elem) {
    var svg = elem.querySelector('svg'),
        input = elem.querySelector('input');
    input.addEventListener('change', function(e) {
        fromTo(input, {
            '--border-width': '3px'
        }, {
            '--border-color': getVar('--c-active'),
            '--border-width': '12px',
            duration: .2
        });
        to(svg, {
            keyframes: [{
                '--top-y': '6px',
                '--top-s-x': 1,
                '--top-s-y': 1.25,
                duration: .2,
                delay: .2
            }, {
                '--top-y': '0px',
                '--top-s-x': 1.75,
                '--top-s-y': 1,
                duration: .6
            }]
        });
        to(svg, {
            keyframes: [{
                '--dot-y': '2px',
                duration: .3,
                delay: .2
            }, {
                '--dot-y': '0px',
                duration: .3
            }]
        });
        to(svg, {
            '--drop-y': '0px',
            duration: .6,
            delay: .4,
            clearProps: true,
            onComplete: function onComplete() {
                input.removeAttribute('style');
            }
        });
    });
});

document.querySelectorAll('.sgp-checkbox').forEach(function(elem) {
    var svg = elem.querySelector('svg'),
        input = elem.querySelector('input');
    input.addEventListener('change', function(e) {
        var checked = input.checked;
        if (!checked) {
            return;
        }
        fromTo(input, {
            '--border-width': '3px'
        }, {
            '--border-color': getVar('--c-active'),
            '--border-width': '12px',
            duration: .2,
            clearProps: true
        });
        set(svg, {
            '--dot-x': '14px',
            '--dot-y': '-14px',
            '--tick-offset': '20.5px',
            '--tick-array': '16.5px',
            '--drop-s': 1
        });
        to(elem, {
            keyframes: [{
                '--border-radius-corner': '14px',
                duration: .2,
                delay: .2
            }, {
                '--border-radius-corner': '5px',
                duration: .3,
                clearProps: true
            }]
        });
        to(svg, {
            '--dot-x': '0px',
            '--dot-y': '0px',
            '--dot-s': 1,
            duration: .4,
            delay: .4
        });
        to(svg, {
            keyframes: [{
                '--tick-offset': '48px',
                '--tick-array': '14px',
                duration: .3,
                delay: .2
            }, {
                '--tick-offset': '46.5px',
                '--tick-array': '16.5px',
                duration: .35,
                clearProps: true
            }]
        });
    });
});

document.querySelectorAll('.sgp-switch').forEach(function(elem) {
    var svg = elem.querySelector('svg'),
        input = elem.querySelector('input');
    input.addEventListener('pointerenter', function(e) {
        // if(elem.animated || input.checked) {
        //     return
        // }
        to(input, {
            '--input-background': getVar('--c-default-blue2'),
            duration: .2
        });
    });
    input.addEventListener('pointerleave', function(e) {
        if (elem.animated || input.checked) {
            return;
        }
        to(input, {
            '--input-background': getVar('--c-default-blue'),
            duration: .2
        });
    });
    input.addEventListener('change', function(e) {
        var _fromTo, _ref, _ref2;

        var checked = input.checked;
        var hide = checked ? 'default' : 'dot',
            show = checked ? 'dot' : 'default';
        fromTo(svg, {
            '--default-s': checked ? 1 : 0,
            '--default-x': checked ? '0px' : '8px',
            '--dot-s': checked ? 0 : 1,
            '--dot-x': checked ? '-8px' : '0px'
        }, (_fromTo = {}, _defineProperty(_fromTo, '--' + hide + '-s', 0), _defineProperty(_fromTo, '--' + hide + '-x', checked ? '8px' : '-8px'), _defineProperty(_fromTo, 'duration', .25), _defineProperty(_fromTo, 'delay', .15), _fromTo));
        fromTo(input, {
            '--input-background': getVar(checked ? '--c-default-blue2' : '--c-default-blue')
        }, {
            '--input-background': getVar(checked ? '--c-default-blue' : '--c-default-blue2'),
            duration: .35,
            clearProps: true
        });
        to(svg, {
            keyframes: [(_ref = {}, _defineProperty(_ref, '--' + show + '-x', checked ? '2px' : '-2px'), _defineProperty(_ref, '--' + show + '-s', 1), _defineProperty(_ref, 'duration', .25), _ref), (_ref2 = {}, _defineProperty(_ref2, '--' + show + '-x', '0px'), _defineProperty(_ref2, 'duration', .2), _defineProperty(_ref2, 'clearProps', true), _ref2)]
        });
    });
});
// Toggle, Checkbox and Radio js End

// Load More start
loadMoreItemCount = $(".sgp-load-more").parent().find(".sgp-load-more__item").length;
loadLimit=3;
$(".sgp-load-more").parent().find('.sgp-load-more__item:lt('+loadLimit+')').addClass("active");
$(".sgp-load-more__show").addClass("active");
$('.sgp-load-more__show').click(function () {
    loadLimit= (loadLimit+3 <= loadMoreItemCount) ? loadLimit+3 : loadMoreItemCount;
    $(this).parent().parent().find('.sgp-load-more__item:lt('+loadLimit+')').addClass("active");
    if(loadLimit == loadMoreItemCount){
        $(this).removeClass("active");
        $(this).siblings(".sgp-load-more__hide").addClass("active");
    }
});
$('.sgp-load-more__hide').click(function () {
    loadLimit=3;
    $(this).parent().parent().find('.sgp-load-more__item').not(':lt('+loadLimit+')').removeClass("active");
    $(this).siblings(".sgp-load-more__show").addClass("active");
    $(this).removeClass("active");
});
// Load more end