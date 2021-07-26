$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 4,
    arrows: true,
    centerMode: true,
    prevArrow:'<button class="slick-prev"><i class="fas fa-arrow-circle-left fa-5x"></i></button>',
    nextArrow:'<button class="slick-next"><i class="fas fa-arrow-circle-right fa-5x"></i></button>',
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
    ]
    });
  });
  
  // Slick version 1.5.8