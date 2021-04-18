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

let apple= new Products('apple','orange',12,'vitminC');

Products.prototype.render = function () {
    let parent = document.getElementById('parent');
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < allProducts.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
       
        let imgElemnt=document.createElement('img');
        let nameElement=document.createElement('h2');
        let priceElement=document.createElement('p');
        let descElement=document.createElement('p');
        liElement.appendChild(imgElemnt);
        liElement.appendChild(nameElement);
        liElement.appendChild(priceElement);
        liElement.appendChild(descElement);
        imgElemnt.src=allProducts[i].link;
       nameElement.textContent=allProducts[i].name;
       priceElement.textContent=allProducts[i].price;
       descElement.textContent=allProducts[i].description;

        }

}
apple.render();