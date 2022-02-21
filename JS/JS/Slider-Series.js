var $ = jQuery;
$(document).ready(function() {
  $('.wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    mobileFirst:true,
     responsive: [
     {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});