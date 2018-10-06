const burger = document.querySelector('button');
const openMenu = document.querySelector('.fa-star');
const closeMenu = document.querySelector('.fa-window-close')
const nav = document.querySelector('nav')
const name = document.querySelector('.name')

burger.addEventListener("click", function () {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    nav.classList.toggle("active");
    name.classList.toggle("on");
})