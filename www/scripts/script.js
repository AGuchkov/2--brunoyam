console.log('script work!');
const burger = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger-wrap');
const burgerInner = document.querySelectorAll('.burger-inner');

const mainNav = document.querySelector('.main-nav');

let example = function (a) {
  a.classList.toggle('burger-inner-active')
};

burger.addEventListener("click", function (e) {
  burgerWrap.classList.toggle('burger-wrap-active');
  for (i = 0; i < burgerInner.length; i++) {
    example(burgerInner[i]);
  }
  mainNav.classList.toggle('main-nav-active');
});