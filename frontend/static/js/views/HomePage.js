import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("HomePage");
  }

  getHtml() {
    return `
        <header class="header">
            <div class="header__box">
                <h1 class="header__title text-animation">  
                    <span class="word-1">Fashion,</span>
                    <span class="word-2">Comfort,</span>
                    <span class="word-3">Success</span>
                </h1>
                <p class="header__description text-animation">  
                    <span class="word-4">Embrace </span>
                    <span class="word-5">your </span>
                    <span class="word-6"> - </span>
                    <span class="word-7">we </span>
                    <span class="word-8">do </span>
                </p>
                
                <a href="/products" class="header__btn header__btn-gooey" data-link> link
                    <span class="header__btn-blobs">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                </a>
            </div>
        </header>
        <main>
            <div class="container">
            <section class="shoes">
                    <h2 class="shoes__title">Shoes</h2>
                    <div id="shoesBox" class="shoes__box">
                    </div>
                    <div class="shoes__box">
                        <a  href="/products"  class="shoes__btn btn draw-border"  data-link> All products</a>  
                    </div>
                </section>
            </div>
        </main>
        `;
  }
}
//<a  href="/products" class="header__btn1"  data-link>Show show</a> 