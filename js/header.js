let index = document.getElementById('index-header');
let products = document.getElementById('products-header');
let aboutUs = document.getElementById('about-us-header');
let addProducts = document.getElementById('add-product');

console.log(window.location.pathname);

if (window.location.pathname === '/Organic-Food/about-us.html') {
  aboutUs.classList.add('active-page');
  products.classList.remove('active-page');
  index.classList.remove('active-page');
  addProducts.classList.remove('active-page');
} else if (
  window.location.pathname === '/Organic-Food/index.html' ||
  window.location.pathname === '/Organic-Food/'
) {
  index.classList.add('active-page');
  products.classList.remove('active-page');
  aboutUs.classList.remove('active-page');
  addProducts.classList.remove('active-page');
} else if (window.location.pathname === '/Organic-Food/products.html') {
  products.classList.add('active-page');
  index.classList.remove('active-page');
  aboutUs.classList.remove('active-page');
  addProducts.classList.remove('active-page');
} else if (window.location.pathname === '/Organic-Food/form.html') {
  products.classList.remove('active-page');
  index.classList.remove('active-page');
  aboutUs.classList.remove('active-page');
  addProducts.classList.add('active-page');
}
let cartNumber = localStorage.getItem('userCart');
cartNumber = JSON.parse(cartNumber);
let headerCart = document.getElementById('cart-number');
headerCart.textContent = cartNumber.length || '';
