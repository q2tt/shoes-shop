import pushBrands from "./pushBrands.js";

function getBrand(products) {
  const brands = [];
  for (let i = 0; i < products.length; i++) {
    if (!brands.includes(products[i].brandName)) {
      brands.push(products[i].brandName);
    }
  }
  pushBrands(brands, products);
}
export default getBrand;
