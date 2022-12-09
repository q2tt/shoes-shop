import renderBag from "./renderBag.js";
import renderTotalPrise from "./renderTotalPrise.js";
import innerCountBag from "../innerPages/innerCountBag.js";


function countUp(i, buyList){
    let count = buyList[i].count;
    buyList[i].count = count + 1;
    localStorage.setItem("items", JSON.stringify(buyList));
    renderBag()
    renderTotalPrise()
    innerCountBag()
}

export default countUp;