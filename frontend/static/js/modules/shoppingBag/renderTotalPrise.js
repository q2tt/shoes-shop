import getEl from "../utils /getEl.js";

function randerTotalPrise() {
  const buyList = JSON.parse(localStorage.getItem("items"));
  let prise = 0;

  if (!buyList == []) {
    for (let i = 0; i < buyList.length; i++) {
      prise += buyList[i].prise * buyList[i].count;
    }
  }
  getEl("totalPrise").innerHTML = prise + "$";
}

export default randerTotalPrise;
