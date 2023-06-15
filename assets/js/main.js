$(function () {
    $(".slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        infinite:true
    });

    $(".fadeUp").on("inview", function () {
        $(this).addClass("inView");
    });
});


// $(function () {
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });
// });