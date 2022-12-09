import getEl from "../utils /getEl.js";
import sortByPrise from "./sortByPrise.js";

function getPrise(products) {
  const prisesArr = [];

  for (let i = 0; i < products.length; i++) {
    const prise = products[i].price.current.value;
    prisesArr.push(prise);
  }

  let minPrise = Math.min(...prisesArr);
  let maxPrise = Math.max(...prisesArr);

  getEl("prises").innerHTML = `
    <label for="income" class="sample__label">Prise</label>
    <input type="range" id="income" class="sample__income-range" value="${maxPrise}" min="${minPrise}" max="${maxPrise}" oninput="this.nextElementSibling.value = this.value + '$'">
    <output class="sample__income-num">${maxPrise}$</output>`;
  let mainProducts = products;

  getEl("income").addEventListener("change", function () {
    sortByPrise(mainProducts);
  });
}

export default getPrise;
