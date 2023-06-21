// Profile show dropdown//
let prodrop = document.querySelector('.profile')

function profileShow(){
  prodrop.classList.toggle('profileShow')
}


// What to learn slider //
$('.learn-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    prevArrow: false,
    nextArrow: '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,  
  });

