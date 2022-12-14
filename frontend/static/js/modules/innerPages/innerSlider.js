import getEl from "../utils /getEl.js";
import inner–°hosenProductBox from "./inner–°hosenProductBox.js";

function innerSlider(sliderData, productsData) {
  getEl("sliderContent").innerHTML = "";
  let innerSlider = "";

  for (let i = 0; i < sliderData.length; i++) {
    innerSlider += `
      <div class="slider__item" style="background-image: url('${sliderData[i].photo}')">
        <p class="slider__item_txt">${sliderData[i].buyer}</p></div>`;
  }
  getEl("sliderContent").innerHTML = innerSlider;

  const sliderCards = document.getElementsByClassName("slider__item");
  for (let i = 0; i < sliderData.length; i++) {
    sliderCards[i].addEventListener("click", function () {
      const chosenProduct = sliderData[i];
      inner–°hosenProductBox(chosenProduct, productsData);
    });
  }
}

export default innerSlider
