import renderBag from "./renderBag.js";
import renderTotalPrise from "./renderTotalPrise.js";
import innerCountBag from "../innerPages/innerCountBag.js";

function removeItem(i, buyList){
    buyList.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(buyList));
    renderBag()
    renderTotalPrise()
    innerCountBag()
}

export default removeItem;