import getEl from "../utils /getEl.js";
import showShopBox from "../buyBox/shoowShopBox.js";

function innerShoesBox(products) {
  getEl("shoesBox").innerHTML = "";
  let innerProducts = "";

  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * products.length);
    innerProducts += `
                     <div id="${products[random].id}"  class="shoes__card  shoesCardProduct">
                     <a  href="/product/${products[random].id}" class="shoes__link" data-link></a>
                        <img class="shoes__card-img" src="https://${products[random].imageUrl}" alt="...">
                        <h3 class="shoes__card-title">${products[random].brandName}</h3>
                        <p class="shoes__card-prise" >$<span>${products[random].price.current.value}</span></p>
                    </div> `;
  }
  getEl("shoesBox").innerHTML = innerProducts;

}

export default innerShoesBox;
