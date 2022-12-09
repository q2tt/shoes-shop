import innerProductsBox from "../innerPages/innrerProductsBox.js";

function chooseBrand(i, brands, products) {
  let brand = brands[i];
  let brandProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (brand.toLowerCase() == products[i].brandName.toLowerCase()) {
      brandProducts.push(products[i]);
    }
  }
  innerProductsBox(brandProducts);
}

export default chooseBrand;
