let index = document.getElementById('index-header');
let products = document.getElementById('products-header');
let aboutUs = document.getElementById('about-us-header');

console.log(window.location.pathname);

if (window.location.pathname === '/about-us.html') {
  aboutUs.classList.add('active-page');
  products.classList.remove('active-page');
  index.classList.remove('active-page');
} else if (window.location.pathname === '/index.html') {
  index.classList.add('active-page');
  products.classList.remove('active-page');
  aboutUs.classList.remove('active-page');
} else if (window.location.pathname === '/products.html') {
  products.classList.add('active-page');
  index.classList.remove('active-page');
  aboutUs.classList.remove('active-page');
}
