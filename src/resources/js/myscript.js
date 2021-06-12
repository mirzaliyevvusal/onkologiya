$('.carousel-news').owlCarousel({
    loop:true,
    margin:7,
    nav:true,
    pagination:true,
    autoPlay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        height:600,
        loop:true,
        autoWidth: false,
        adaptiveHeight:false,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        } ,

        responsive : [
            {
                breakpoint:480,
                settings: {
                    thumbItem:4
                }
            }
        ]

    });
});