// Слайдеры
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

// Бургер меню
const toggleMenu = document.querySelector('.nav__toggle'),
  navMenu = document.querySelector('.nav__menu');

toggleMenu.addEventListener('click', (event) => {
  navMenu.classList.toggle('active');
});

// плавное перемещение по якорям
$(document).ready(function () {
  $(".nav__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

// Стрелка для возвращения наверх страницы
(function ($) {
  $(function () {

    $('#up').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
      return false;
    });

  });
})(jQuery);  

// modal
const reserveBtn = document.querySelectorAll('.reserve__btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function openModal() {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

reserveBtn.forEach(item => {
  item.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});