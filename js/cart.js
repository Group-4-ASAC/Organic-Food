'use strict';

let addedToCart = [];
let totalPrice = 0;
let totalCount = 0;

let divElement = document.getElementById('parent');

function getAdded() {
  let added = localStorage.getItem('userCart');
  let addedProducts = JSON.parse(added);
  if (addedProducts !== null) {
    addedToCart = addedProducts;
  }
}
getAdded();

console.log(addedToCart);

for (let j = 0; j < addedToCart.length; j++) {
  let parent = document.getElementById('formCart');
  let labelElement = document.createElement('label');
  labelElement.textContent = 'Quantity :';
  labelElement.for = 'userAdded';
  parent.appendChild(labelElement);
  let inputElement = document.createElement('input');
  inputElement.type = 'number';
  inputElement.id = 'userAdded';
  inputElement.name = 'userAdded';
  parent.appendChild(inputElement);
  let submitInput = document.createElement('input');
  submitInput.type = 'submit';
  parent.appendChild(submitInput);

  formCart.addEventListener('submit', quntitiySub);

  // renderAddedtoCart();
}

function quntitiySub(event) {
  event.preventDefault();
  let quntityProduct = event.target.userAdded.value;
  // console.log(quntityProduct);
  for (let i = 0; i < addedToCart.length; i++) {
    totalCount = 0;
    totalCount = totalCount + quntityProduct;
    totalPrice += addedToCart[i].price * quntityProduct;
    console.log(totalCount);
    console.log(totalPrice);

    localStorage.setItem('totalprice', totalPrice);
  }
}

let liunorder2 = document.createElement('li');

function renderAddedtoCart() {
  let unorder = document.createElement('ul');

  divElement.appendChild(unorder);

  for (let i = 0; i < addedToCart.length; i++) {
    let liunorder = document.createElement('li');

    unorder.appendChild(liunorder);

    liunorder.textContent = `${addedToCart[i].name}And Item Price ${addedToCart[i].price}`;

    let imgElement = document.createElement('img');
    liunorder.appendChild(imgElement);
    imgElement.src = addedToCart[i].link;

    unorder.appendChild(liunorder2);
    liunorder2.textConten = `Item's Total Price: ${totalPrice}`;
  }
}
renderAddedtoCart();
// renderAddedtoCart();
