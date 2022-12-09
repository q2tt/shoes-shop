import getEl from "../utils /getEl.js";

function innerCountBag() {
  let arr = JSON.parse(localStorage.getItem("items")) ?? [];
  let count = arr.length;
  getEl("shopCount").innerHTML = count;
}

export default innerCountBag;
