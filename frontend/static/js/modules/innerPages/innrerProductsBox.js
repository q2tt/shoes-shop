import getEl from "../utils /getEl.js";

function innerProductsBox(products) {
  getEl("box").innerHTML = "";
  let innerProducts = "";
  for (let i = 0; i < products.length; i++) {
    innerProducts += `
            <div id="${products[i].id}" class="product__card cardProduct">
                <a  href="/product/${products[i].id}" class="product__link" data-link></a>
                <img class="product__card-img" src="https://${products[i].imageUrl}" alt="...">
                <h3 class="product__card-title">${products[i].brandName}</h3>
                <p class="product__card-prise" >$<span>${products[i].price.current.value}</span></p>
            </div> 
        `;
  }
  getEl("box").innerHTML = innerProducts;
}

export default innerProductsBox;
