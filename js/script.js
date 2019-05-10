$(document).ready(function () {

    $(window).scroll(function () {
        if ($("html").scrollTop() >= 70) {
            $("#mynavbar").addClass("fixed-top");
        } else {
            $("#mynavbar").removeClass("fixed-top");
        }
    });
 // navbar mouse events
    var navOption = $("#mynavbar .nav-item")
    var navDropdown = $("#mynavbar .nav-item .dropdown-menu")


    for (let i = 0; i < navOption.length; i++) {

        $(navOption[i]).on("mouseover mouseout", function () {
            $(navDropdown[i]).toggleClass("show")
            $(navOption[i]).toggleClass("show")
        })
    }
    // events end

//aos start
AOS.init();
//aos end
    // navbar search event // 
    $("#mynavbar .search-link").click(function (e) {
        e.preventDefault();

        if ($("#mynavbar .search-link i").hasClass("fa-search")) {
            $("#mynavbar .search-link i").removeClass("fa-search")
            $("#mynavbar .search-link i").addClass("fa-times").css("font-size", "20px")

        }
        else if ($("#mynavbar .search-link i").hasClass("fa-times")) {
            $("#mynavbar .search-link i").removeClass("fa-times")
            $("#mynavbar .search-link i").addClass("fa-search").css("font-size", "15px")
        }
        $("#mynavbar .search").toggleClass("active")
        $("#mynavbar .search input").val('')
    })
    // event end //


    
      // costomization owlCarusel for slider
      $('#slider .items').owlCarousel({
        loop: true,
        autoWidth: false,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    ResetText();
    TetxAnimation();
    var owl = $('#slider .owl-carousel');
    owl.owlCarousel();
    // Listen to owl events
    owl.on('translated.owl.carousel', function (event) {
        TetxAnimation();
    });
    owl.on('change.owl.carousel', function (event) {
        ResetText();
    });
    // reset text animation
    function ResetText() {
        $("#slider h1").css({
            top: '30%',
            opacity: '0'
        });
        $("#slider h4").css({
            top: '60%',
            opacity: '0'
        });
        $("#slider ul").css({
            top: '70%',
            opacity: '0'
        });
    }
    // change text animation
    function TetxAnimation() {

        $("#slider .items .active h1").animate({
            top: '40%',
            opacity: '1'
        }, 500);
        $("#slider .items .active h4").animate({
            top: '50%',
            opacity: '1'
        }, 900);
        $("#slider .items .active ul").animate({
            top: '60%',
            opacity: '1'
        }, 900);


    }



    // costomization owlCarusel for category

    $("#catigories .items").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })


    //slide carousel end




    // popular categories slider carousel start
    $("#popular .items").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    // popular categories slide carousel end

    // our gallery isotope start
    $('.gallery-item').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
      });
      $('.gallery-menu ul li').click(function(){
        $('.gallery-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector=$(this).attr('data-filter');
        $('.gallery-item').isotope({
            filter: selector
        });
        return false;
      });
    //   our gallery end

    // our gallery icon 
    var item = $("#our-gallery .item")
    var info = $("#our-gallery .item .gallery-info")
    for (let i = 0; i < item.length; i++) {
        $(item[i]).mouseover(function () {
            $(info[i]).stop();
            $(info[i]).fadeToggle();
        })

        $(item[i]).mouseout(function () {
            $(info[i]).stop(); 
            $(info[i]).fadeToggle();         
        })
    }
    
    // end

    // teacher hover
    var cardImg = $("#our-teachers .card-img-top")
    var links = $("#our-teachers .card-img-top .social")
    for (let i = 0; i < cardImg.length; i++) {
        $(cardImg[i]).mouseover(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "120px" });
        })

        $(cardImg[i]).mouseout(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "255px" });
        })
    }
    // end


    // students say start
    $('#student-say .items').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    // students say end


    // our blog link event
    var myImg = $("#our-blog .card")
    var myIcon = $("#our-blog .card-img-top .icon")
    for (let i = 0; i < cardImg.length; i++) {
        $(myImg[i]).mouseover(function () {
            $(myIcon[i]).stop();
            $(myIcon[i]).animate({ top: "45%" });
        })

        $(myImg[i]).mouseout(function () {
            $(myIcon[i]).stop();
            $(myIcon[i]).animate({ top: "150%" });
        })
    }
    // event end

    // clients carousel start
    $('#clients .items').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
    // carousel end
//paralaxx.js start
$(window).on('load', function() {
    $('.parallax_bg').parallaxBackground();
});
//paralax.js end
$(window).on('load', function() {
    var preLoder = $("#preloader");
    preLoder.delay(700).fadeOut(500).addClass('loaded');
});
//coundown
$('.countdown_time').each(function() {
    var endTime = $(this).data('1599448389680');
    $(this).countdown(endTime, function(tm) {
        $(this).html(tm.strftime('<span class="countdown_box"><span class="countdown days">%D </span><span class="cd_text">Days</span></span><span class="countdown_box"><span class="countdown hours">%H</span><span class="cd_text">Hours</span></span><span class="countdown_box"><span class="countdown minutes">%M</span><span class="cd_text">Minutes</span></span><span class="countdown_box"><span class="countdown seconds">%S</span><span class="cd_text">Seconds</span></span>'));
    });
});
//countdown end

});


