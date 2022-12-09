import removeItem from "./removeItem.js";
import renderBag from "./renderBag.js";
import renderTotalPrise from "./renderTotalPrise.js";
import innerCountBag from "../innerPages/innerCountBag.js";

function countDown(i, buyList) {
  let count = buyList[i].count;
  if (count >= 2) {
    buyList[i].count = count - 1;
    localStorage.setItem("items", JSON.stringify(buyList));
  } else {
    removeItem(i, buyList);
  }
  renderBag();
  renderTotalPrise();
  innerCountBag();
}

export default countDown;
