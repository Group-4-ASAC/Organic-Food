"use script";

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

let form = document.getElementById("inputForm");
form.addEventListener("submit", submitter);
function submitter(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let link = event.target.link.value;
    let price = event.target.price.value;
    let description = event.target.description.value;
    console.log(allProducts);
    let prod = new Products(name, link, price, description);
    // ulElement.textContent = '';
    // for (let j = 0; j < allProducts.length; j++) {
    //     allProducts[j].render();
    //     console.log('helko');
    // }
    dataStorage();
    alert('Great, Your product is added.')

}
function dataStorage() {
    let dataArr = JSON.stringify(allProducts);
    localStorage.setItem("userProduct", dataArr);
}

function getDataStorage() {
    let data = localStorage.getItem("userProduct");
    let productData = JSON.parse(data);
    if (productData !== null) {
        allProducts = productData;
       
    }
}
getDataStorage();