'use strict';

let allProducts = [];

function Products(name, link, price, description) {
  this.name = name;
  this.link = link;
  this.price = price;
  this.description = description;
  this.total = 0;
  this.quantity = 0;
  allProducts.push(this);
}

let apple = new Products(
  'apple',
  'https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599__340.jpg',
  12,
  'vitminC'
);

let parent2 = document.getElementById('parent');
let ulElement = document.createElement('ul');
parent2.appendChild(ulElement);

dataStorage();
// let ulElement = document.createElement('ul');
// let parent = document.getElementById('parent');
Products.prototype.render = function () {
  let liElement = document.createElement('li');
  ulElement.appendChild(liElement);

  let imgElemnt = document.createElement('img');
  let nameElement = document.createElement('h2');
  let priceElement = document.createElement('p');
  let descElement = document.createElement('p');
  let button = document.createElement('button');

  button.addEventListener('click', addToCartHandler);

  liElement.appendChild(imgElemnt);
  liElement.appendChild(nameElement);
  liElement.appendChild(priceElement);
  liElement.appendChild(descElement);
  liElement.appendChild(button);
  button.textContent = 'Add To Cart ';
  imgElemnt.src = this.link;
  nameElement.textContent = this.name;
  priceElement.textContent = this.price;
  descElement.textContent = this.description;
};

apple.render();
function dataStorage() {
  let dataArr = JSON.stringify(allProducts);
  localStorage.setItem('product', dataArr);
}

function getDataStorage() {
  let data = localStorage.getItem('product');
  let userData = localStorage.getItem('userProduct');
  let productData = JSON.parse(data);
  let userProductData = JSON.parse(userData);
  console.log(userProductData.concat(productData));
  let compArr = productData.concat(userProductData);
  if (compArr !== null) {
    allProducts = compArr;

    //reinstantiation
    ulElement.textContent = '';
    allProducts = [];
    for (let i = 0; i < compArr.length; i++) {
      if (compArr[i] !== null) {
        new Products(
          compArr[i].name,
          compArr[i].link,
          compArr[i].price,
          compArr[i].description
        );
      }
    }
    // allProducts = [];
    // ulElement.textContent = '';
    // allProducts[0].render();

    for (let j = 0; j < allProducts.length; j++) {
      allProducts[j].render();
      console.log('helko');
    }
  }
}
getDataStorage();
let addToCartArr = [];
function AddToCart(link, name, price, description) {
  this.link = link;
  this.name = name;
  this.price = price;
  this.description = description;

  addToCartArr.push(this);
}
getCartStorage();
function addToCartHandler(event) {
  //   console.log(event.target.parentNode.children.length);
  console.log(event.target.parentNode.children);

  new AddToCart(
    event.target.parentNode.children[0].src,
    event.target.parentNode.children[1].textContent,
    event.target.parentNode.children[2].textContent,
    event.target.parentNode.children[3].textContent
  );

  localStorage.setItem('userCart', JSON.stringify(addToCartArr));
  event.target.removeEventListener('click', addToCartHandler);
}

function getCartStorage() {
  let cartData = JSON.parse(localStorage.getItem('userCart'));

  if (cartData) {
    for (let i = 0; i < cartData.length; i++) {
      new AddToCart(
        cartData[i].link,
        cartData[i].name,
        cartData[i].price,
        cartData[i].description
      );
    }
    let sup = document.getElementById('cart-number');
    sup.textContent = addToCartArr.length;
  }
}
