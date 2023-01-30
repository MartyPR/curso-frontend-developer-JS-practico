const navEmail=document.querySelector('.navbar-email');
const menuDp=document.querySelector('.desktop-menu');
navEmail.addEventListener('click',()=>{
    menuDp.classList.toggle('inactive')
})