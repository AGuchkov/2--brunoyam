console.log('script work!');
const burger = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger-wrap');
const burgerInner = document.querySelector('.burger-inner');

burger.addEventListener("click", function (e) {
  burgerWrap.classList.toggle('burger-wrap-active');

});
