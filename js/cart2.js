"use strict";

let table=document.getElementById('table');
let addedToCart = [];
let tableHead=['Image','Product','price','quantity'];
function getAdded() {
    let added = localStorage.getItem('userCart');
    let addedProducts = JSON.parse(added);
    if (addedProducts !== null) {
  
      addedToCart = addedProducts;
    }
  }
  getAdded();

  
  function Cart(name,link,price) {
      this.name=name;
      this.link=link;
      this.price=price;
      this.quantity=1;
      this.totalPrice=this.quantity*this.price;
      addedToCart.push(this);
  }


  Cart.prototype.render=function () {
let trElement=document.createElement('tr');
table.appendChild(trElement);
for (let i = 0; i < tableHead.length; i++) {
    let thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent=tableHead[i];
}


      
  }