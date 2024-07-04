(function ($) {
    "use strict";
    
    // Form to Whatsapp
    function sendToWhatsapp(){
        var number="+27679704895";
        var name=document.querySelector('.name').value;
        var email=document.querySelector('.email').value;
        var count=document.querySelector('.count').value;
        // var service=document.querySelector('.service').value;
        // var type=document.querySelector('.type').value;
        var description=document.querySelector('.description').value;

        var url     = "https://wa.me/" + number + "?text="
        + "Name: " +name+ "%0a"
        + "Email" +email+ "%0a"
        + "Count" +count+ "%0a"
        // + "Service" +service+ "%0a"
        // + "Type" +type+ "%0a"
        + "Description" +description+ "%0a%0a";

        window.open(url, '_blank').focus();
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

