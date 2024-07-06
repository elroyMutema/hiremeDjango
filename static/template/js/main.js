// Form to Whatsapp
function sendToWhatsapp(){

    let number="+27679704895";
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let count=document.getElementById('count').value;
    let service= getSelectedOption(document.getElementById('servicesList'));
    let type= getSelectedOption(document.getElementById('typeList'));
    let description=document.getElementById('description').value;

    var url     = "https://wa.me/" + number+ "?text="
    + "Name: " + name+ "%0a"
    + "Email: " + email+ "%0a"
    + "Count: " + count+ "%0a"
    
    + "Service: " + service + "%0a"
    
    + "Type: " +type+ "%0a"
    + "Description: " +description+ "%0a%0a";

    window.open(url, '_blank').focus();
}

function getSelectedOption(elementList){

    var options = elementList.getElementsByTagName("option");
    // options[0]=true by default in JS 
    // so set last element in the list as default option. wich is options[(options.length)-1]="Other" 
    var selectedOption = options[(options.length)-1].text;
    // and make sure loop ends at [1] to skip first item in the list 
    for ( var i = options.length-1 ; i>0 ; i--) {
        if (options[i].selected) {
            selectedOption = options[i].text;
            break;
        }
    }
    return selectedOption;
}

(function ($) {
    "use strict";
    
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

//junk______________________________________________________________________________________________________________________________________________

    //document.write(serviceSelected);
    
    //let type=document.getElementById('type').value;
