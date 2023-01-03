import innerProductsBox from "../innerPages/innrerProductsBox.js";
import displayPagination from "../pagination/displayPagination.js";
import displayProducts from "../pagination/displayProducts.js";

function chooseBrand(i, brands, products) {
  let brand = brands[i];
  let brandProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (brand.toLowerCase() == products[i].brandName.toLowerCase()) {
      brandProducts.push(products[i]);
    }
  }
  const productItem = 20;
  const productsPage = 1;

  displayProducts(brandProducts, productItem, productsPage) ;
  displayPagination(brandProducts, productItem, productsPage );
}

export default chooseBrand;
