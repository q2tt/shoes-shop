import getEl from "../utils /getEl.js";
import buyProduct from "../buyBox/buyProduct.js";

function innerСhosenProductBox(chosenProduct, productsData) {
  const productID = chosenProduct.productID;
  const product = productsData.find((item) => item.id == productID);
  getEl("СhosenProductBox").innerHTML = "";
  getEl("СhosenProductBox").innerHTML = `
    <section  class="background-box2">
    <div class='la' >
            <div class="buyersChoise">
              <button id="buyersChoiseExit" class="buyersChoise__btn-exit">
                <img
                  class="bag__img-exit"
                  src="https://img.icons8.com/glyph-neue/64/000000/delete-sign.png"
                  alt="..."
                />
              </button>
              <div class="buyersChoise__img-box1">
                <div style="background-image: url('${chosenProduct.photo}')" class="buyersChoise__img-box">
  
                </div>
              </div>
              <div class="buyersChoise__product">
                <p class="buyersChoise__title"><span>${chosenProduct.buyer}</span> chose there shoes ...</p>
                <p id="shoesName" class="buyersChoise__name-product">${product.brandName}</p>
                <div class="buyersChoise__product-box">
                  <div class="buyersChoise__product-box_img">
                    <img class="buyersChoise__product-img" src="https://${product.imageUrl}" alt="product">
                  </div>
                  <div class="buyersChoise__product-box_data">
                    <p id="shoesName" class="buyersChoise__name-product">${product.name}</p>
                    <p  class="buyersChoise__txt">Color: <span id="shoesColor" class="shoop-box__txt_color">${product.colour} </span></p>
                    <p class="buyersChoise__txt">Choose size:</p>
                    <form action="size">
                            <select id="size">
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            </select>
                    </form>
                    <p class="buyersChoise__txt" >$<span id="shoesPrise">${product.price.current.value}</span></p>
                    <button id="buy" class="buyersChoise__btn-byu">ADD TO BAG</button>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
          </section>
    `;

  getEl("buyersChoiseExit").addEventListener("click", function () {
    getEl("СhosenProductBox").innerHTML = "";
  });

  getEl("buy").addEventListener("click", function () {
    buyProduct(product );
  });
}

export default innerСhosenProductBox;
