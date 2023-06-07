// active class//
$(".chooseItem").click(function () {
  $(".chooseItem").removeClass("active");
  // $(".tab").addClass("active"); // instead of this do the below 
  $(this).addClass("active");   
});
// Slider script//
$('.video-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: false,
    nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  });