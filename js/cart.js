'use strict';

// alert('hello');
let table = document.getElementById('table');
let addedToCart = [];
let totalOfTotals = 0;
let tableHead = ['Image', 'Product', 'Price', 'Quantity'];
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
        addedProducts[i].quantity
      );
      // addedToCart[i].render();
    }
  } else {
    table.remove();
    let empty = document.getElementById('empty');
    empty.textContent =
      'The Cart is empty, You can add products to the cart from the Product Page.';

    Swal.fire({
      title: '<strong>Empty Cart</strong>',
      icon: 'info',
      html:
        'The Cart is empty, You can add products to the cart from the ' +
        '<a href="../products.html">Product Page.</a>',
      showCloseButton: true,
      confirmButtonText: 'OK',
      confirmButtonAriaLabel: 'OK',
    });
  }
}
getAdded();

function Cart(name, link, price, quantity) {
  this.name = name;
  this.link = link;
  this.price = Number(price);
  this.quantity = quantity;
  this.totalPrice = this.quantity * this.price;
  totalOfTotals += this.totalPrice;
  addedToCart.push(this);
}

Cart.prototype.render = function () {
  //creating a row
  let tr = document.createElement('tr');
  //appending that row
  table.appendChild(tr);

  //creating first table data (will be an image)
  let imagTd = document.createElement('td');
  // adding that img in the table data
  tr.appendChild(imagTd);

  //for creating an image
  let imagTg = document.createElement('img');
  //for adding that image to the table data
  imagTd.appendChild(imagTg);

  //creating a table data for the name of the product
  let nameTd = document.createElement('td');
  //adding that name to the table
  tr.appendChild(nameTd);

  //creating a table data for the price of the product
  let priceTd = document.createElement('td');
  //adding that price to the table
  tr.appendChild(priceTd);

  //creating a table data for the quantity of the product
  let quantityTd = document.createElement('td');
  //adding that quantity to the table
  tr.appendChild(quantityTd);

  //to get the link from the constructor and adding it to the imgagTg source
  imagTg.src = this.link;

  //to get the name of the product from the constructor and adding it in the table data
  nameTd.textContent = this.name;

  //to get the price of the product from the constructor and adding it in table
  priceTd.textContent = this.totalPrice;

  //to create a form
  let formElment = document.createElement('form');
  //to add that form to the table
  quantityTd.appendChild(formElment);

  // to make the inputElment variable as the input of the field
  let inputElment = document.createElement('input');

  //to make the type of the input a 'number'
  inputElment.type = 'number';
  inputElment.min = '1';
  //to make the name of the input 'quantity'
  inputElment.name = 'quantity';

  //to make the id of the form as the NAME object that is in the constructor
  formElment.id = this.name;

  //to make the variable 'inputSub' used as input
  let inputSub = document.createElement('input');
  //to make the type of the variable submit
  inputSub.type = 'submit';

  //to add the the inputElment's number and quantity to the table
  formElment.appendChild(inputElment);
  //to add the submit to the table
  formElment.appendChild(inputSub);

  //to make an event on submit with the function name of addToQuantity
  formElment.addEventListener('submit', addToQuantity);
  //initial value of the quantity
  inputElment.value = this.quantity;
};

// Cart.prototype.quantity = function () {
//   this;
// };
//to use render function on all elements in the addedToCart array
for (let i = 0; i < addedToCart.length; i++) {
  addedToCart[i].render();
}

function addToQuantity(event) {
  event.preventDefault();

  //to make the text content with no values
  table.textContent = '';
  let trElement = document.createElement('tr');
  table.appendChild(trElement);
  //render the header again
  for (let i = 0; i < tableHead.length; i++) {
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = tableHead[i];
  }

  totalOfTotals = 0;
  //to loop all over the array
  for (let i = 0; i < addedToCart.length; i++) {
    //to check if the name of each element equals to its ID data type and value
    if (addedToCart[i].name === event.target.id) {
      //to assign the quantity of each index as the value that is entered
      addedToCart[i].quantity = Number(event.target.firstChild.value);

      //to make totalPrice of each index equals to the multiplication of the its quantity(how many you choose) and its original price
      addedToCart[i].totalPrice =
        addedToCart[i].quantity * addedToCart[i].price;
    }

    //to sum the total of total price
    totalOfTotals += addedToCart[i].totalPrice;
  }
  //to add the last total in allTotals variable
  allTotals.textContent = totalOfTotals;

  localStorage.setItem('userCart', JSON.stringify(addedToCart));

  // for (let i = 0; i < addedToCart.length; i++) {
  //   new Cart(
  //     addedToCart[i].name,
  //     addedToCart[i].link,
  //     addedToCart[i].price
  //     );
  // addedToCart[i].render();
  //   }

  //to loop through the whole array and use render function in each index
  for (let i = 0; i < addedToCart.length; i++) {
    addedToCart[i].render();
  }
}

//to clear the page after pressing the CLEAR button
let clearingButton = document.getElementById('clearing-button');
clearingButton.addEventListener('click', clears);
function clears() {
  localStorage.removeItem('userCart');
  getAdded();
  allTotals.textContent = 0;
  let cartNumber = document.getElementById('cart-number');
  cartNumber.textContent = '';
  Swal.fire({
    title: '<strong>Thank you for visiting our website.</strong>',
    icon: 'success',
    showCloseButton: true,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: 'OK',
  });
}

allTotals.textContent = totalOfTotals;
