$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    $(".menu-content").removeClass("open");
    $("#hamburger").removeClass("active");
    return false;
  });

  $(".head").show(function () {
    $(this).addClass("fadein");
  });

  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu-content").toggleClass("open");
  });

  $(window).scroll(function () {
    $(".hairsalon").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowh = $(window).height();

      if (scroll > txtPos - windowh + 200) {
        $(this).addClass("salonfade");
      }
    });
  });

  $(window).scroll(function () {
    $(".cut").show(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowh = $(window).height();

      if (scroll > txtPos - windowh + 200) {
        $(this).addClass("cutfade");
      }
    });
  });

  $(window).scroll(function () {
    $(".thirdfade").each(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowh = $(window).height();

      if (scroll > txtPos - windowh + 100) {
        $(this).addClass("scrollin");
      }
    });
  });

  $(window).scroll(function () {
    $(".lasttext").each(function () {
      var txtPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowh = $(window).height();

      if (scroll > txtPos - windowh) {
        $(this).addClass("lastfade");
      }
    });
  });
  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  if ($(window).innerWidth() < 768) {
    $(window).scroll(function () {
      $(".hairsalon").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowh = $(window).height();

        if (scroll > txtPos - windowh - 200) {
          $(this).addClass("salonfade");
          $(this).offset({ top: 800 });
          $(this).offset({ left: 0 });
        }
      });
    });
  }

  if ($(window).innerWidth() < 481) {
    $(window).scroll(function () {
      $(".hairsalon").show(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowh = $(window).height();

        if (scroll > txtPos - windowh - 200) {
          $(this).addClass("salonfade");
          $(this).offset({ top: 485 });
          $(this).offset({ left: 0 });
        }
      });
    });
    $(window).scroll(function () {
      $(".thirdfade").each(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowh = $(window).height();

        if (scroll > txtPos - windowh - 50) {
          $(this).addClass("scrollin");
        }
      });
    });
    $(window).scroll(function () {
      $(".lasttext").each(function () {
        var txtPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowh = $(window).height();

        if (scroll > txtPos - windowh + 200) {
          $(this).addClass("lastfade");
        }
      });
    });
  }
});
