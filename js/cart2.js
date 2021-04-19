"use strict";
// alert('hello');
let table = document.getElementById("table");
let addedToCart = [];
let tableHead = ["Image", "Product", "price", "quantity"];
function getAdded() {
  let added = localStorage.getItem("userCart");
  let addedProducts = JSON.parse(added);
  if (addedProducts !== null) {
    for (let i = 0; i < addedProducts.length; i++) {
      new Cart(
        addedProducts[i].name,
        addedProducts[i].link,
        addedProducts[i].price
      );
      // addedToCart[i].render();
    }
  }
}
getAdded();

function Cart(name, link, price) {
  this.name = name;
  this.link = link;
  this.price = price;
  this.quantity = 1;
  this.totalPrice = this.quantity * this.price;
  addedToCart.push(this);
}

Cart.prototype.render = function () {
  let trElement = document.createElement('tr');
  table.appendChild(trElement);
  for (let i = 0; i < tableHead.length; i++) {
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = tableHead[i];
  }
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
  let formElment=document.createElement('form');
  quantityTd.appendChild(formElment);

  let inputElment=document.createElement('input');
  inputElment.type='number';
  let inputSub=document.createElement('input');
  inputSub.type='submit';
  formElment.appendChild(inputElment);
  formElment.appendChild(inputSub);

  inputElment.value=1;
  // quantityTd.textContent = this.quantity;
  // let tdElementInput=document.createElement('td');

  // let parent = document.getElementById("formCart");
  //   let labelElement = document.createElement('label');
  //   labelElement.textContent = 'Quantity :';
  //   labelElement.for = 'userAdded';
  //   parent.appendChild(labelElement);
  //   let inputElement = document.createElement('input');
  //   inputElement.type = 'number';
  //   inputElement.id = 'userAdded';
  //   inputElement.name = 'userAdded';
  //   parent.appendChild(inputElement);
  //   let submitInput = document.createElement('input');
  //   submitInput.type = 'submit';
  //   parent.appendChild(submitInput);

};
for (let i = 0; i < addedToCart.length; i++) {
  addedToCart[i].render();
}
console.log(addedToCart);

