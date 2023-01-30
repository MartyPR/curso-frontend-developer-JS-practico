const navEmail=document.querySelector('.navbar-email');
const menuDp=document.querySelector('.desktop-menu');

const menuMb=document.querySelector('.mobile-menu')
const icoMenu=document.querySelector('.menu');

const cart=document.querySelector('.shopping-cart');
const detail=document.querySelector('.product-detail');

navEmail.addEventListener('click',()=>{
    menuDp.classList.toggle('inactive');
})
icoMenu.addEventListener('click',()=>{
    const isAsideClosed =   detail.classList.contains('inactive')
   
    if(!isAsideClosed){
        detail.classList.add('inactive');
    }
    menuMb.classList.toggle('inactive');
})
cart.addEventListener('click',()=>{
    const isMobileMenuClosed = menuMb.classList.contains('inactive');
   

        if(!isMobileMenuClosed){
            menuMb.classList.add('inactive');
        }
    
        detail.classList.toggle('inactive');
    
})
