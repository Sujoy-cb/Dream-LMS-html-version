// Drop down menu//
let dropdown = document.querySelector('.drop')

function dropMenu(){
  dropdown.classList.toggle('dropdown')
}
// Drop down menu//
let language = document.querySelector('.changeLanguage')

function languageChange(){
  language.classList.toggle('languagechange')
}
// active class//
$(".chooseItem").click(function () {
  $(".chooseItem").removeClass("active");
  $(this).addClass("active");   
});

// Slider script//
$('.video-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    prevArrow: false,
    nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  });
// Review Slider script//
$('.review-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    prevArrow: false,
    nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
