
function getBrand(products, func) {
  const brands = [];
  for (let i = 0; i < products.length; i++) {
    if (!brands.includes(products[i].brandName)) {
      brands.push(products[i].brandName);
    }
  }
  func(brands, products);
}
export default getBrand;