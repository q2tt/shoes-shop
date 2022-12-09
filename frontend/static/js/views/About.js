import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  getHtml() {
    return `
            <main>
                <nav class="nav-line">
                    <div class="container">
                        <a href="/" class="nav-line__link"  data-link>Home / </a>
                        <a  href="/about" class="nav-line__link" data-link>About</a>
                    </div>
                </nav>
                <section class="about">
                <div class="container">
                    <div class="about__wrap">
                        <div class="about__wrap-line1">
                            <div class="about__box1">
                                <div class="about__img-box1">
                                </div>
                            </div>
                            <div class="about__box2">
                                <div>
                                    <h2 class="about__title">lorem ipsum</h2>
                                    <p class="about__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                        numquam quam assumenda veritatis expedita facere ipsam. Debitis doloribus molestias
                                        dolorum, ducimus quae laudantium corrupti fuga quibusdam. Officiis recusandae vel velit?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="about__wrap-line2">
                            <div class="about__box3">
                                <div>
                                    <h2 class="about__title">lorem </h2>
                                    <p class="about__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                        numquam quam assumenda veritatis expedita facere ipsam. Debitis doloribus molestias
                                        dolorum, ducimus quae laudantium corrupti fuga quibusdam. Officiis recusandae vel velit?
                                    </p>
                                </div>
        
                            </div>
                            <div class="about__box4">
                                <div class="about__img-box2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             </main>
        `;
  }
}
