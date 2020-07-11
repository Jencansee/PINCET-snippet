const nav = document.querySelector('.header-navigation');
const burger = document.querySelector('.burger-wrapper');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    });
});