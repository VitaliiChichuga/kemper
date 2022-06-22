$(document).ready(function () {
  $('.header__icon-menu').click(function (event) {
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('lock');

    $('.about-remove').click(function (event) {
      $('.mobile-menu').removeClass('active');
    });
  });
});
