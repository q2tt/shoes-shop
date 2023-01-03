import getEl from "../utils /getEl.js";
import displayPagination from "../pagination/displayPagination.js";
import displayProducts from "../pagination/displayProducts.js";

function sortByPrise(mainProducts) {
  let selectedPrise = getEl("income").value;
  let newProducts = [];
  for (let i = 0; i < mainProducts.length; i++) {
    const prise = mainProducts[i].price.current.value;
    if (selectedPrise >= prise) {
      newProducts.push(mainProducts[i]);
    }
  }

  const productItem = 200;
  const productsPage = 1;
  displayProducts(newProducts, productItem, productsPage) ;
  displayPagination(newProducts, productItem, productsPage );
}

export default sortByPrise;
