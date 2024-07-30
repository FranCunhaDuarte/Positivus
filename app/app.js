

const menuButton=document.querySelector('.open__menu__button').addEventListener('click',toggleMenu);
const navigationBar=document.querySelector('.navigation');

function toggleMenu(){
    navigationBar.classList.toggle('open');
}