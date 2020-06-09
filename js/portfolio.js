$(function () {
  
  $(".box").snakeify({

      speed: 100

    });

    $(".our-portfolio ul li").on("click", function() {

      $(this).addClass("active").siblings().removeClass("active");

      if ($(this).data("class") === "all") {

        $("img").css("display", "block");

      } else {

        $(" .our-portfolio img").css("display", "none");

        $($(this).data('class')).css("display", "block");
      }

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

    $('html').niceScroll();

    $(".fa-gear").click(function() {

      $(".color-option").fadeToggle(500);

    });


    var colorli = $(".color-option ul li ");

    colorli.eq(0).css("backgroundColor", "#FD6802").end()
      .eq(1).css("backgroundColor", "#01BAFD").end()
      .eq(2).css("backgroundColor", "#E41B17").end()
      .eq(3).css("backgroundColor", "#0B08D1").end()
      .eq(4).css("backgroundColor", "#E426D5");

    colorli.click(function() {

      $("link[href *='default']").attr("href", $(this).attr("data-value"));

    });
    
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