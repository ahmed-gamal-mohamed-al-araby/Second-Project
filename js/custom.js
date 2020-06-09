$(function () {
  

  var winh = $(window).height(),
    barh = $(".top-bar").innerHeight(),
    navh = $(".navbar").innerHeight();

  $(".slider, .carousel-item").height(winh - (barh + navh));

  $(".fa-gear").click(function () {

    $(".color-option").fadeToggle(500);

  });


  var colorli = $(".color-option ul li ");

  colorli.eq(0).css("backgroundColor", "#FD6802").end()
    .eq(1).css("backgroundColor", "#01BAFD").end()
    .eq(2).css("backgroundColor", "#E41B17").end()
    .eq(3).css("backgroundColor", "#0B08D1").end()
    .eq(4).css("backgroundColor", "#E426D5");

  colorli.click(function () {

    $("link[href *='default']").attr("href", $(this).attr("data-value"));

  });

  $('html').niceScroll();

  $('.fancybox').fancybox();

  $('#mu-abtus-video').on('click', function (event) {
    event.preventDefault();
    $('body').append("<div id='about-video-popup'><span id='mu-video-close' class='fa fa-close'></span><iframe id='mutube-video' name='mutube-video' frameborder='0' allowfullscreen></iframe></div>");
    $("#mutube-video").attr("src", $(this).attr("href"));
  });

  // WHEN CLICK CLOSE BUTTON
  $(document).on('click', '#mu-video-close', function (event) {
    $(this).parent("div").fadeOut(1000);
  });

  // WHEN CLICK OVERLAY BACKGROUND
  /*
        $(document).on('click', '#about-video-popup', function (event) {
            $(this).fadeOut(1000);
        });
    
         */

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('#owl-example').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navigation: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1000: {
        items: 3
      }

    }
  })

  $('#owl-examples').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navigation: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1000: {
        items: 3
      }

    }
  })
  
    $(window).scroll(function () {

    var scrolltop = $(".scroll-top");

    if ($(window).scrollTop() > 700)

    {
      scrolltop.fadeIn(1000);

    } else

    {
      scrolltop.fadeOut(1000);
    }

  });
  
      
     $(".scroll-top").click(function () {

      $("html,body").animate({

        scrollTop: 0
      }, 1000);

    });

});


