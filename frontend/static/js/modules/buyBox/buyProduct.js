import getEl from "../utils /getEl.js";
import renderTotalPrise from "../shoppingBag/renderTotalPrise.js";
import innerCountBag from "../innerPages/innerCountBag.js";

function buyProduct(chosenProduct) {
  let buyList = JSON.parse(localStorage.getItem("items")) ?? [];
  const select = getEl("size");
  const option = select.options[select.selectedIndex].value;

  let item = {
    name: chosenProduct.brandName,
    img: chosenProduct.imageUrl,
    prise: chosenProduct.price.current.value,
    size: option,
    count: 1,
  };
  buyList.push(item);
  localStorage.setItem("items", JSON.stringify(buyList));

  getEl("buy").innerHTML =
    '<img src="https://img.icons8.com/offices/30/000000/checkmark.png"/>';

  setTimeout(() => (getEl("buy").innerHTML = "BUY"), 2000);
  renderTotalPrise();
  innerCountBag();
}

export default buyProduct;
