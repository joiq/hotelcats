$(document).ready(function () {
  $('.rooms__inner').slick({
    dots: true,
    autoplay: true,
    autoSpeed: 5000,
  });
});

$(document).ready(function () {
  $('.reviews__inner').slick({
    infinite: true,
    slidesToShow: (document.querySelector('.reviews__inner').offsetWidth <= 600) ? 1 : 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoSpeed: 15000,
  });
});
