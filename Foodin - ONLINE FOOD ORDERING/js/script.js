// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// var swiper = new Swiper(".product-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
// });
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const product = e.target.closest('.box');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('.price').getAttribute('data-price'));

            const cartItem = document.createElement('div');
            cartItem.classList.add('box');
            cartItem.innerHTML = `
                <i class="fas fa-trash"></i>
                <img src="${product.querySelector('img').src}" alt="">
                <div class="content">
                    <h3>${productName}</h3>
                    <span class="price">&#8377 ${productPrice}</span>
                    <span class="quantity">qty : 1</span>
                </div>
            `;
            cartItems.appendChild(cartItem);

            total += productPrice;
            cartTotal.textContent = total;
        });
    });
});
