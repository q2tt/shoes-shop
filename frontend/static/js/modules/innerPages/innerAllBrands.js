import getEl from "../utils /getEl.js";

function innerAllBrands(brands) {
  getEl("allBrands").innerHTML = "";
  for (let i = 0; i < brands.length; i++) {
    getEl("allBrands").innerHTML += `<li class="brandItem" >${brands[i]}</li>`;
  }

}

export default innerAllBrands;