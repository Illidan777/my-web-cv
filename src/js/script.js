const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuCloseBtn = menu.querySelector('.menu__close'),
    menuOverlay = menu.querySelector('.menu__overlay');

hamburger.addEventListener('click', function (e) {
    menu.classList.toggle('active');
});
menuCloseBtn.addEventListener('click', function (e) {
    menu.classList.remove('active');
});
menuOverlay.addEventListener('click', function (e) {
    menu.classList.remove('active');
});