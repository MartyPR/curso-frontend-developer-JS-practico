const navEmail=document.querySelector('.navbar-email');
const menuDp=document.querySelector('.desktop-menu');

const menuMb=document.querySelector('.mobile-menu')
const icoMenu=document.querySelector('.menu');

const cart=document.querySelector('.shopping-cart');
const detail=document.querySelector('.product-detail');

const cardContainer=document.querySelector('.cards-container')

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


const productList = [];
productList.push({
name:'bike',
price:212,
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'pantalla',
    price:512,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
name:'Playstation 5',
price:120,
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'bike',
    price:212,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
        name:'pantalla',
        price:512,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Playstation 5',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
</div>*/

for(product of productList){
    const profuctCard=document.createElement('div');
    profuctCard.classList.add('product-card');
//->
    const img = document.createElement('img');
    img.setAttribute('src', product.image );

    const productInfo=document.createElement('div')
    productInfo.classList.add('product-info');
//-->
    const productInfoDiv=document.createElement('div');


    const productInfoPrice=document.createElement('p');
    productInfoPrice.innerText=`$- ${product.price}`;

    const productInfoName=document.createElement('p');
    productInfoName.innerText=`${product.name}`
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);
//-->
//-->

    const figure = document.createElement('figure');
    const iconCart= document.createElement('img');
    iconCart.setAttribute('src','./icons/bt_add_to_cart.svg');
//-->

    figure.appendChild(iconCart);

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(figure)

    profuctCard.appendChild(img);
    profuctCard.appendChild(productInfo);
//->
//---------->
    cardContainer.appendChild(profuctCard);

}