'use strict';

// alert('hello');
let table = document.getElementById('table');
let addedToCart = [];
let totalOfTotals = 0;
let tableHead = ['Image', 'Product', 'price', 'quantity'];
let trElement = document.createElement('tr');
let allTotals = document.getElementById('totalsing');
table.appendChild(trElement);
for (let i = 0; i < tableHead.length; i++) {
  let thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = tableHead[i];
}
function getAdded() {
  let added = localStorage.getItem('userCart');
  let addedProducts = JSON.parse(added);
  if (addedProducts !== null) {
    for (let i = 0; i < addedProducts.length; i++) {
      new Cart(
        addedProducts[i].name,
        addedProducts[i].link,
        addedProducts[i].price,
        addedProducts[i].quantity,
      );
      // addedToCart[i].render();
    }
  }
}
getAdded();

function Cart(name, link, price,quantity) {
  this.name = name;
  this.link = link;
  this.price = Number(price);
  this.quantity = quantity;
  this.totalPrice = this.quantity * this.price;
  totalOfTotals += this.totalPrice;
  addedToCart.push(this);
}

Cart.prototype.render = function () {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let imagTd = document.createElement('td');
  tr.appendChild(imagTd);
  let imagTg = document.createElement('img');
  imagTd.appendChild(imagTg);
  let nameTd = document.createElement('td');
  tr.appendChild(nameTd);
  let priceTd = document.createElement('td');
  tr.appendChild(priceTd);
  let quantityTd = document.createElement('td');
  tr.appendChild(quantityTd);
  imagTg.src = this.link;
  nameTd.textContent = this.name;
  priceTd.textContent = this.totalPrice;
  let formElment = document.createElement('form');
  quantityTd.appendChild(formElment);

  let inputElment = document.createElement('input');
  inputElment.type = 'number';
  inputElment.name = 'quantity';
  formElment.id = this.name;
  let inputSub = document.createElement('input');
  inputSub.type = 'submit';
  formElment.appendChild(inputElment);
  formElment.appendChild(inputSub);
  formElment.addEventListener('submit', addToQuantity);

  inputElment.value = this.quantity;
};

Cart.prototype.quantity = function () {
  this;
};
for (let i = 0; i < addedToCart.length; i++) {
  addedToCart[i].render();
}

function addToQuantity(event) {
  event.preventDefault();
  console.log(event.target.quantity.value);
  table.textContent = '';
  totalOfTotals=0;
  for (let i = 0; i < addedToCart.length; i++) {
    if (addedToCart[i].name === event.target.id) {
      console.log(event.target.firstChild.value);
      addedToCart[i].quantity = Number(event.target.firstChild.value);
      addedToCart[i].totalPrice = addedToCart[i].quantity* addedToCart[i].price;
    }
    totalOfTotals+=addedToCart[i].totalPrice;
    
  }
  allTotals.textContent = totalOfTotals;
console.log(totalOfTotals);
localStorage.setItem('userCart',JSON.stringify(addedToCart));

  // for (let i = 0; i < addedToCart.length; i++) {
  //   new Cart(
  //     addedToCart[i].name,
  //     addedToCart[i].link,
  //     addedToCart[i].price
  //     );
      // addedToCart[i].render();
 //   }
    for (let i = 0; i < addedToCart.length; i++) {
      addedToCart[i].render();
    }
  console.log(addedToCart);

}
let clearingButton = document.getElementById("clearing-button");
clearingButton.addEventListener("click",clears);
function clears()
{
  localStorage.clear('userCart');
}

allTotals.textContent = totalOfTotals;

