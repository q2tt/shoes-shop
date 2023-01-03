import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Products");
  }

  getHtml() {
    return `
        <main>
          <nav class="nav-line">
              <div class="container">
              <a href="/" class="nav-line__link"  data-link>Home / </a>
                <a  href="/products" class="nav-line__link" data-link>Products</a>
               </div>
          </nav>
          <div class="container"> 
          <div class="product">
              <section class="sample">
              <div class="sample__inputs">
                  <button id="showMoreBrands" class="sample__btn-show"></button>
              </div>
                 
                <div class="sample__blocks-hiden"  id="blockBrands">
                  <ul  class="sample__brands">
                        <li id="allBrands" class="sample__brand" >All</li>
                    </ul>
                    <ul id="brands" class="sample__brands">
                    </ul>
                 
                   <div id="prises" class="sample__prises"></div>
                </div>
                    
              </section>
             <section > 
              <div id="box" class="product-box"></div>
              <div id="pagination" class="product__pagination"></div>
             </section>
             
         </div>
        </main>
       
        `;
  }
}
