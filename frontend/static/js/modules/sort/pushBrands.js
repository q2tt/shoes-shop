import getEl from "../utils /getEl.js";
import chooseBrands from "./chouseBrands.js";

function pushBrands(brands, products) {
  getEl("brands").innerHTML = "";
  for (let i = 0; i < brands.length; i++) {
    getEl("brands").innerHTML += `<li class="sample__brand brand" >${brands[i]}</li>`;
  }

  let brandBtns = document.getElementsByClassName("brand");
  for (let i = 0; i < brandBtns.length; i++) {
    brandBtns[i].addEventListener("click", function () {
      chooseBrands(i, brands, products);
    });
  }
}


export default pushBrands;
