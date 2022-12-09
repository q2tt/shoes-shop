import getEl from "../utils /getEl.js";
import countDown from "./countDown.js";
import countUp from "./countUp.js";
import getBagItem from "./getBagItem.js";
import removeItem from "./removeItem.js";
import innerCountBag from "../innerPages/innerCountBag.js";
import renderTotalPrise from "./renderTotalPrise.js";

function renderBag() {
  const buyList = JSON.parse(localStorage.getItem("items"));
  if (!buyList == []) {
    getEl("bagItems").innerHTML = "";
    for (let i = 0; i < buyList.length; i++) {
      const item = buyList[i];
      getEl("bagItems").innerHTML += getBagItem(item);
    }

    let removeBtns = document.getElementsByClassName("bag__remove");
    for (let i = 0; i < buyList.length; i++) {
      removeBtns[i].addEventListener("click", function () {
        removeItem(i, buyList);
      });
    }

    let countUpBtns = document.getElementsByClassName("countUp");
    for (let i = 0; i < buyList.length; i++) {
      countUpBtns[i].addEventListener("click", function () {
        countUp(i, buyList);
      });
    }

    let countDownBtns = document.getElementsByClassName("countDown");
    for (let i = 0; i < buyList.length; i++) {
      countDownBtns[i].addEventListener("click", function () {
        countDown(i, buyList);
      });
    }
  }
  innerCountBag();
  renderTotalPrise();
}

export default renderBag;
