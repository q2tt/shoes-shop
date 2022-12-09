import innerProductsBox from "../innerPages/innrerProductsBox.js";
import getEl from "../utils /getEl.js";

function sortByPrise(mainProducts) {
  let selectedPrise = getEl("income").value;
  let newProducts = [];
  for (let i = 0; i < mainProducts.length; i++) {
    const prise = mainProducts[i].price.current.value;
    if (selectedPrise >= prise) {
      newProducts.push(mainProducts[i]);
    }
  }
  innerProductsBox(newProducts);
}

export default sortByPrise;
