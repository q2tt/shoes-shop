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
                
                <a href="/products" class="header__btn header__btn-gooey" data-link> more
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
                    <h2 class="mainTitle shoes__title">Shoes</h2>
                    <div id="shoesBox" class="shoes__box">
                    </div>
                    <div>
                        <a  href="/products/1"  class="shoes__btn btnShowMore draw-border"  data-link> All products</a>  
                    </div>
                </section>
            </div>

            <section class="slider">
            <h2 class="mainTitle slider__title">Show us your schuhs</h2>
            <p class="slider__txt">Recent shoe upgrade? Mention @LOGO in your post</p>
            <div id="wrapper" class="slider__wrapper">
              <div id="carousel" class="slider__carousel">
                <div class="slider__content" id="sliderContent">
                  <div class="slider__item" >
                </div>
              </div>
              <button class="slider__prev" id="prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
                </svg>
              </button>
              <button  class="slider__next" id="next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
                </svg>
              </button>
            </div>
          </section>

          <section class="topBrands">
          <h2 class="mainTitle topBrands__title">Top Brands</h2>
          <div class="marquee topBrands__box">
            <ul id="marquee-content" class="marquee-content topBrands__content">
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/asos-logo.jpeg" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/converse-logo.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/logo-bershka.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/logo-crocs.jpeg" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/Nike-Logo.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/noak.webp" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/new-balance.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/nike-running.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/River-Island-Logo-1996.jpeg" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/Teva_logo_Pharmaceutical_Industries.png" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/The-Trefoil-adidas-logo-1.jpeg" alt="logo">
              </li>
              <li class="topBrands__item">
                <img class="topBrands__img" src="/frontend/img/brands/vans.png" alt="logo">
              </li>
            </ul>
          </div>
          <div>
            <a  href="/brands"  class="topBrands__btn btnShowMore draw-border"  data-link> All brands</a>  
        </div>
        </section>
        <div id="СhosenProductBox" ></div>  
      </main>
        `;
  }
}
