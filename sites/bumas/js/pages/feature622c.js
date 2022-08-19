jQuery(document).ready(function ($) {
    // Slider đơn vị trực thuộc
    var owlSubsidiaries = $('.f-subsidiaries .owl-carousel');
    owlSubsidiaries.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='sites/bumas/images/pages/feature/ic-prev-subsidiaries.svg'>", "<img src='sites/bumas/images/pages/feature/ic-next-subsidiaries.svg'>"],
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        scrollPerPage: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navigation: true,
        autoHeight: true,
        responsive: {
            1100: {
                nav: true,
                navText: ["<img src='sites/bumas/images/pages/feature/ic-prev-subsidiaries.svg'>", "<img src='sites/bumas/images/pages/feature/ic-next-subsidiaries.svg'>"],
                dots: false
            },
            0: {
                nav: false,
                dots: true,
            }
        }
    });

    // Slider đơn vị chủ quản
    var owlSubdivisions = $('.f-subdivisions .owl-carousel');
    owlSubdivisions.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='sites/bumas/images/pages/feature/ic-prev-subdivisions.svg'>", "<img src='sites/bumas/images/pages/feature/ic-next-subdivisions.svg'>"],
        dots: false,
        autoplay: true,
        smartSpeed: 2500,
        scrollPerPage: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        navigation: true,
        autoHeight: true,
        responsive: {
            1100: {
                nav: true,
                navText: ["<img src='sites/bumas/images/pages/feature/ic-prev-subsidiaries.svg'>", "<img src='sites/bumas/images/pages/feature/ic-next-subsidiaries.svg'>"],
                dots: false,
            },
            0: {
                nav: false,
                dots: true,
            }
        }
    });
});