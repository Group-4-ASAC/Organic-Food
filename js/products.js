'use strict';

let allProducts = [];
let ulElement;


function Products(name, link, price, description) {
    this.name = name;
    this.link = link;
    this.price = price;
    this.description = description;
    this.total = 0;
    this.quantity = 0;
    allProducts.push(this);
}


let apple = new Products('apple', 'https://cdn.pixabay.com/photo/2017/09/26/13/21/apple-2788599__340.jpg', 12, 'vitminC');



let form = document.getElementById("inputForm");
form.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let link = event.target.link.value;
    let price = event.target.price.value;
    let description = event.target.description.value;

    let newProduct = new Products(name, link, price, description);
    ulElement.textContent = "";
    for (let j = 0; j < allProducts.length; j++) {
        allProducts[j].render();
        console.log("helko");
    }
    dataStorage();
}


Products.prototype.render = function () {

    let parent = document.getElementById('parent');
    ulElement = document.createElement('ul');
    parent.appendChild(ulElement);

    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    let imgElemnt = document.createElement('img');
    let nameElement = document.createElement('h2');
    let priceElement = document.createElement('p');
    let descElement = document.createElement('p');
    liElement.appendChild(imgElemnt);
    liElement.appendChild(nameElement);
    liElement.appendChild(priceElement);
    liElement.appendChild(descElement);
    imgElemnt.src = this.link;
    nameElement.textContent = this.name;
    priceElement.textContent = this.price;
    descElement.textContent = this.description;



}
apple.render();
let dataArr = [];
function dataStorage() {
    let dataArr = JSON.stringify(allProducts);
    localStorage.setItem('product', dataArr);
}

function getDataStorage() {
    let data = localStorage.getItem('product');
    let productData = JSON.parse(data);
    if (productData !== null) {
        let prod;
        //reinstantiation
        allProducts = [];
        for (let i = 0; i < productData.length; i++) {
            prod = new Products(productData[i].name, productData[i].link, productData[i].price, productData[i].description);
        }
        ulElement.textContent = '';
        // allProducts[0].render();
        console.log(allProducts[0]);
        for (let j = 0; j < allProducts.length; j++) {
            allProducts[j].render();
            console.log("helko");
        }
        console.log(prod);
        console.log(allProducts);
        //  allProducts=productData;

        // console.log(productData.length);
        // console.log(allProducts);
    }
}
getDataStorage();


