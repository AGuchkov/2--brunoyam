$(document).ready(function () {

  $('.burger').on('click', function () {

    $('.main-nav').slideToggle();
    $('.burger').toggleClass('burger-active');
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
    $('.show-more').data('type', linkType);
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
  // $('.all').on('click', function (e) {
  //   e.preventDefault();

  //   $('.cat-item').show();
  //   return;

  // });


  // Аккордион
  let prefIndex;

  $('.accordion-start').on('click', function (e) {

    let currentIndex = $(this).index('.accordion-start');

    if (currentIndex === prefIndex) {
      $(this).next().slideToggle();
      $(this).toggleClass('open');
      $(this).find('.icon-plus').toggleClass('open');
      return;
    }

    $(this).next().slideDown();
    $(this).addClass('open');
    $(this).find('.icon-plus').addClass('open');
    $('.accordion-start').eq(prefIndex).next().slideUp();
    $('.accordion-start').eq(prefIndex).removeClass('open');
    $('.accordion-start').eq(prefIndex).find('.icon-plus').removeClass('open');
    prefIndex = currentIndex;

  });


  //Слайдер slick

  if ($('.slider').length) {
    $('.slider').slick({
    });
  };


  //Ajax подгрузка товаров
  $('.show-more').on('click', function (e) {
    e.preventDefault();
    let dataType = $(this).data('type');

    $.ajax({
      type: 'POST',
      url: '../json/cat.json',
      data: `dataType=${dataType}`,
      beforeSend: function () {
        $('.show-more').addClass('load');
      },
      success: function (resData) {
        let html = generateHtml(resData.cat);
        addToPage(html);
        $('.show-more').removeClass('load');
      },
      error: function () {
        console.log('Что-то пошло не так!');
        $('.show-more').removeClass('load');
      }
    });
  });

  function generateHtml(dataArray) {
    let htmlString = '';

    dataArray.forEach(function (itemArray) {
      htmlString = htmlString + `<div class="cat-item" data-type="${itemArray.dataType}">
        <div class="cat-item-wrap">
          <div class="cat-item-inner">
            <a href="#" class="cat-item-bg" style="background-image: url('${itemArray.bgUrl}')">
              <p class="cat-item-text">${itemArray.catItemText}</p>
            </a>
          </div>
        </div>
      </div>`
    });

    return htmlString;
  };

  function addToPage(htmlString) {
    $('.cat-list').append(htmlString);
  };
});
