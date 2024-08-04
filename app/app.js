

const menuButton=document.querySelector('.open__menu__button').addEventListener('click',toggleMenu);
const navigationBar=document.querySelector('.navigation');

function toggleMenu(){
    navigationBar.classList.toggle('open');
}

const summarys=document.querySelectorAll('.process__step');

summarys.forEach(summary => {
    summary.addEventListener('click',() => {
        summary.classList.toggle('open');
    });
})

const formButtons=document.querySelectorAll('.form__contact__button');

formButtons.forEach(formButton => {
    
    formButton.addEventListener('click',function(e){
        e.preventDefault();
    })
})