"use strict";
let productArry = ['bnana',2,30];
let parent = document.getElementById("formCart");

formCart.addEventListener("submit", quntitiySub);
function quntitiySub(event) {
  event.preventDefault();
  let quntityProduct = parseInt(event.target.quantity.value);
  console.log(quntityProduct);
  for (let i = 0; i < productArry.length; i++) {
      let inputElement=document.createElement('input');
      parent.appendChild();
    totalPrice += productArry[i].price;
  }
}
let totalPrice = 0;
