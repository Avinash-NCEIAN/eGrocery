let searchbox = document.querySelector('.header .icons .box-1 ')

document.querySelector('#search-btn').onclick = () =>{
    searchbox.classList.toggle('active');
    profile.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingcart = document.querySelector('.header .icons .shoping-cart ')

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    searchbox.classList.remove('active');
    profile.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar ')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
    profile.classList.remove('active');
    shoppingcart.classList.remove('active');
}


let profile = document.querySelector('.header .icons .profile ')

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    searchbox.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchbox.classList.remove('active');
    profile.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');

}

var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });