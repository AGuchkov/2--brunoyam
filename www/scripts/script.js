$(document).ready(function () {

  $('.burger').on('click', function () {

    $('.main-nav').slideToggle();
    $('.burger-wrap').toggleClass('burger-wrap-active');
    $('.burger-inner').toggleClass('burger-inner-active');
  });


  // Табы в контактах
  $('.contacts-tab-link').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.contacts-tab-link');

    $('.contacts-tab-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');
  });

  // Фильтр в портфолио
  $('.filter-link').on('click', function (e) {
    e.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.cat-item').show();
      return;
    }

    $('.cat-item').each(function () {
      let portfolioType = $(this).data('type');

      if (linkType === portfolioType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });

  // Кнопка "Все бабочки" в каталоге
  $('.all').on('click', function (e) {
    e.preventDefault();

    $('.cat-item').show();
    return;

  });


  $('.plus').on('click', function (e) {

    
  })
});