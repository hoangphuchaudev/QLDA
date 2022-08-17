jQuery(document).ready(function ($) {
    // Slider banner
    var owlBanner = $('.h-banner .owl-carousel');
    owlBanner.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 2000,
        scrollPerPage: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navigation: true
    });

    // Read more 
    $("#readMore>span").click(function () {
        $("#tab3").css("display", "block");
        $("#tab4").css("display", "block");
        $("#tab5").css("display", "block");
        $("#tab6").css("display", "block");
        $("#readMore").hide();
    });

    //  Khi nhấn vào tab thì gán class active
    $('.tab-item').click(function (e) {
        $('.tab-item').removeClass('active');
        if (!e.currentTarget.className.includes('active')) {
            e.currentTarget.className += " active";
        }
    });

    // Hiệu ứng tăng số
    var increase_number = $('.increase-number');
    if (increase_number != undefined && increase_number.length > 0) {
        $('.increase-number').counterUp({
            delay: 10,
            time: 1500
        });
    }
});