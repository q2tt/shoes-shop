import innerProductsBox from "../innerPages/innrerProductsBox.js";

function displayProducts(arrData, productItem, page) {
  page--;
  const start = productItem * page;
  const end = start + productItem;
  const paginatedData = arrData.slice(start, end);
  innerProductsBox(paginatedData);
}

export default displayProducts;