import getEl from "../utils /getEl.js";
import buyProduct from "./buyProduct.js";

function showShopBox(chosenProduct) {
  getEl("shoesTitle").innerHTML = `${chosenProduct.brandName}`;
  getEl("shoesPrise").innerHTML = `${chosenProduct.price.current.value}`;
  getEl("shoesColor").innerHTML = `${chosenProduct.colour}`;
  getEl("shoesName").innerHTML = `${chosenProduct.name}`;
  getEl("shoesImg").src = `https://${chosenProduct.imageUrl}`;
 
  getEl("buy").addEventListener("click", () => {
    buyProduct(chosenProduct);
  });
}

export default showShopBox;
