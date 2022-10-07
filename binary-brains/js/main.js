(function ($) {
  "use strict";

  $(".navbar-toggler").click(function () {
    $("#navbarCollapse").toggle(300);
  });

  // header slider
  $(".header-slider").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 3500,
    autoplaySpeed: 1500,
  });

  // Testimonial Slider
  $(".testimonial-slider").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testimonial-slider-nav",
  });
  $(".testimonial-slider-nav").slick({
    arrows: false,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "22px",
    slidesToShow: 3,
    asNavFor: ".testimonial-slider",
  });
  $(".testimonial .slider-nav").css({ position: "relative", height: "160px" });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);
