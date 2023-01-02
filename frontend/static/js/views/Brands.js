import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Brands");
    }

    getHtml() {
        return `
            <main>
                <nav class="nav-line">
                    <div class="container">
                        <a href="/" class="nav-line__link"  data-link>Home / </a>
                        <a  href="/brands" class="nav-line__link" data-link>Brands</a>
                    </div>
                </nav>
                
                <section >
        <div class="container">
            <section class='allBrands__box'>
            <h2 class="mainTitle">All Brands</h2>
            <div id='allBrands' ></div>
            </section>
        </div>
         </main>
        `;
    }
}