'use strict';

let allProducts = [];

function Products(name, link, price, description) {
  this.name = name;
  this.link = link;
  this.price = price;
  this.description = description;
  this.total = 0;
  this.quantity = 1;
  allProducts.push(this);
}

//instances
new Products(
  'apple',
  'https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599__340.jpg',
  12,
  'vitminC'
);

new Products(
  'cherry',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxv4U_3l1CBP8hNnA4bGW9RYYfWv_w96nNx5v3dXQCMX65EpEH1siE_BGTq2qsFsc48wY&usqp=CAU',
  14,
  'Rich in antioxidants and anti-inflammatory compounds'
);

new Products(
  'strawberries',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbXxACrMh6M1WdAWGafGW3Gh7LF-yI2PwHA&usqp=CAU',
  9,
  'Packed with vitamins, fiber, and particularly high levels of antioxidants'
);

new Products(
  'tomatoes',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0fqOgYnXJJvThlurHhzx6VipJY-Kt_ttWw&usqp=CAU',
  2.6,
  'great source of vitamin C, potassium, folate, and vitamin K'
);

new Products(
  'Carrots',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MHZ36V6r2Tg96JJes8s582TFHO63mdmTpg&usqp=CAU',
  1.50,
  'good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants'
);
new Products(
  'Orange',
  'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg',
  5 ,
  'High in Vitamin C. Oranges are an excellent source of vitamin C.',
  );

  new Products(
    'Dragon fruit',
    'https://cdn.pixabay.com/photo/2017/07/06/10/01/fruit-2477515_960_720.jpg',
    6 ,
    'Its rich in antioxidants like flavonoids, phenolic acid',
 
    );

    new Products(
      'Coconut' ,
      'https://cdn.pixabay.com/photo/2017/08/24/06/29/coconut-2675546_960_720.jpg',
      2.50,
      'Rich in fiber and MCTs, it may offer a number of benefits, including improved heart health'
      );
      
  new Products(
    'coconut oil',
    'https://cdn.pixabay.com/photo/2018/01/05/04/44/food-3062139_960_720.jpg',
    6.50,
    'Contains healthy fatty acids'
    );
    new Products(
      'organic eggs',
      'https://cdn.pixabay.com/photo/2018/03/11/18/34/brown-eggs-3217675_960_720.jpg',
     3.50,
     ' Organic eggs have higher levels of omega-3 fatty acids than non-organic eggs. '
     );
     new Products(
     'Almond milk',
     'https://cdn.pixabay.com/photo/2020/06/19/06/41/almond-5315905_960_720.jpg',
     5.50,
     'High in Vitamin E'
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

//apple.render();
for (let i = 0; i < allProducts.length; i++) {
  allProducts[i].render();
}
function dataStorage() {
  let dataArr = JSON.stringify(allProducts);
  localStorage.setItem('product', dataArr);
}

function getDataStorage() {
  let data = localStorage.getItem('product');
  let userData = localStorage.getItem('userProduct');
  let productData = JSON.parse(data);
  let userProductData = JSON.parse(userData);
  // console.log(userProductData.concat(productData));
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
  this.quantity=1;
  addToCartArr.push(this);
}
let sup = document.getElementById('cart-number');
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
  sup.textContent = addToCartArr.length;
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
    
    sup.textContent = addToCartArr.length;
  }
}
