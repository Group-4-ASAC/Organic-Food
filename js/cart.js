"use strict";
let addedToCart=[];

function getAdded() {
  let added = localStorage.getItem('userCart');
  let addedProducts =JSON.parse(added);
  if (addedProducts!==null) {
    
    addedToCart=addedProducts;
  }
}
getAdded();


let totalPrice = 0;
let totalCount=0;

console.log(addedToCart);
for (let j = 0; j < addedToCart.length; j++) {
  
let parent = document.getElementById("formCart");
let labelElement=document.createElement('label');
labelElement.textContent='Quantity :';
labelElement.for='userAdded';
parent.appendChild(labelElement);
let inputElement=document.createElement('input');
inputElement.type = 'number';
inputElement.id = 'userAdded';
inputElement.name = 'userAdded';
parent.appendChild(inputElement);
let submitInput=document.createElement('input');
submitInput.type='submit';
parent.appendChild(submitInput);


formCart.addEventListener("submit", quntitiySub);
function quntitiySub(event) {
  event.preventDefault();
  let quntityProduct = event.target.userAdded.value;
  // console.log(quntityProduct);
  for (let i = 0; i < addedToCart.length; i++) {
    totalCount=0;
    totalCount= totalCount+quntityProduct;
    totalPrice += addedToCart[i].price * quntityProduct;
    console.log(totalCount);
    console.log(totalPrice);

  }
}

}
