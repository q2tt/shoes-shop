import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("ProductView");
  }

  getHtml() {
    return `
        <nav class="nav-line">
              <div class="container">
                <a href="/" class="nav-line__link"  data-link>Home / </a>
                <a  href="/products" class="nav-line__link" data-link>Products</a>
               </div>
          </nav>
     
             <section id="shoopBody" class="shoop-body ">
             <div class="container">
                <div class="shoop-box">
                    <div class="shoop-box__card">
                        <div class="shoop-box__card">
                            <img class="shoop-box__card-img" id="shoesImg" src="" alt="...">
                            <h3 class="shoop-box__card-title" id="shoesTitle"></h3>
                            
                        </div>
                    </div>
                    <div class="shoop-box__right-box"> 
                        
                        <div class="shoop-box__info">
                            <p id="shoesName" class="shoop-box__name"></p>
                            <p  class="shoop-box__txt">Color: <span id="shoesColor" class="shoop-box__txt_color"></span></p>
                            <p class="shoop-box__txt">Choose size:</p>
                            <form action="size">
                                    <select id="size">
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    </select>
                            </form>
                            <p class="shoop-box__card-prise" >$<span id="shoesPrise"></span></p>
                            <button id="buy" class="shoop-box__btn-byu">ADD TO BAG</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
             
        `;
  }
}
