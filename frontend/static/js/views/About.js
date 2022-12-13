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
                
                <section >
        <div class="container">
          <div class="about">
            <div class="about__img-box">
            </div>
            <div class="about__txt-box">
              <h2 class="about__title">Lorem ipsum dolor sit</h2>
              <p class="about__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid veritatis enim rem vitae quidem. Id dolorum, fuga, eum nihil corrupti autem quisquam cupiditate, perferendis recusandae nam perspiciatis soluta voluptatibus.
              Ipsa repudiandae molestiae iste sequi commodi veritatis ipsam, hic ex fugiat natus illo ab doloribus id ratione, voluptatum in deleniti tempora doloremque cum totam? Consectetur non quam laudantium corrupti unde.</p>
            </div>
            <div class="about__tel-box">
              <h2 class="about__info-title">CONTACT SHOP</h2>
              <a class="about__link-telegram" href="tg://resolve?domain=alona_Petrenkoo">
                <img class="about__link-img" src="./frontend/img/app.gif" alt="">
               <p class="about__link-txt">Telegram</p> </a>
            </div>
            <div class="about__info-box">
              <div class="about__info">
                <h5 class="about__info-title">Location</h5>
                <p class="about__info-txt">BC, Canada</p>
              </div>
              <div class="about__info">
                <h5 class="about__info-title">Year Established</h5>
                <p class="about__info-txt">2007</p>
              </div>
              <div class="about__info">
                <h5 class="about__info-title">Business Type</h5>
                <p class="about__info-txt">Corporation</p>
              </div>
              <div class="about__info">
                <h5 class="about__info-title">Average Annual Revenue</h5>
                <p class="about__info-txt">$2M-$3M</p>
              </div>
              <div class="about__info">
                <h5 class="about__info-title">Number of employees</h5>
                <p class="about__info-txt">More than 300</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="contactUs"> 
            <h2 class="contactUs__title">Contact Us</h2>
            <div class="contactUs__wrapper">
              <div class="contactUs__worker-box">
                <p class="contactUs__worker"> Antonio Dellano<span class="contactUs__worker_span">General Manager</span></p>
              </div>
              <div class="contactUs__contact-box">
                <div class="contactUs__link_box">
                  <a class="contactUs__link" href="tel:+111111">
                    <img class="contactUs__link_svg" src="https://img.icons8.com/ios/50/000000/ringer-volume.png"/>
                    <p id="telCompany">+3800000000000</p>
                  </a>
                  <button id="copyTelBtn" class="contactUs__btn-copy"> Copy
                    <img class="contactUs__svg-copy" src="https://img.icons8.com/fluency-systems-regular/48/000000/documents.png"/>
                    
                  </button>
                </div>
                <div class="contactUs__link_box">
                  <a class="contactUs__link" href="mailto:#">
                    <img class="contactUs__link_svg" src="https://img.icons8.com/ios/50/000000/secured-letter--v1.png"/>
                    <p id="emailCompany">email@email.com </p>
                  </a>
                  <button id="copyEmailBtn" class="contactUs__btn-copy"> Copy
                    <img class="contactUs__svg-copy" src="https://img.icons8.com/fluency-systems-regular/48/000000/documents.png"/>
                  </button>
              </div>
              </div>
              <div class="contactUs__location-box">
                <img class="contactUs__link_svg" src="https://img.icons8.com/dotty/80/000000/visit.png"/>
                <p class="contactUs__location">
                   RM 1112, Hulala Center, 125 Wangcheng Avenue, Luoyang,420120 Henan,Canada
                </p>
              </div>
            </div>

            <div class="contact-form contactUs__form">
              <form action="#" id="contactUsForm">
                <div class="contact-form__top-bl">
                  <h2 class="contact-form__title">To:  Antonio Dellano General Manager</h2>
                  <p class="contact-form__title_email">email@email.com</p>
                  
                    <label class="contact-form__label" for="userMessage">Request Details</label>
                    <textarea class="contact-form__messageInp contact-form__input" name="" id="userMessage" cols="30" rows="10" placeholder="Ex. Enter product details such as color, size, materials etc. and other specification requirements."></textarea>
    
                    <div class="contact-form__inputs-box">
                      <div class="contact-form__email-box">
                        <label class="contact-form__label" for="userEmail">Email <span class="contact-form__label_span" >- Required</span> </label>
                        <input type="email"  class="contact-form__email-inp contact-form__input" name="userEmail" id="userEmail" placeholder="Ex. email@email.com">
                      </div>
                      <div class="contact-form__phone-box">
                        <label class="contact-form__label" for="userContactNumber">Phone</label>
                        <div class="contact-form__phoneNum-box">
                          <div class="contact-form__country-code" >
                            <input id="phone" class="contact-form__country-code_inp" type="tel">
                          </div>
                          <input type="tel" class="contact-form__input contact-form__num-inp" name="userContactNumber" id="userContactNumber" placeholder="Ex. 0991111111">
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div class="contact-form__bottom-bl">
                  <input disabled id="formSubmit" class="contact-form__submit-btn" type="submit" value="Contact Supplier">
                </div>
              </form>
              <div id="messageToUser" class="messageForUser d-none">
                <p class="messageForUser__txt">Your message was sent. Expect to hear back soon.</p>
                <button id="closeMessage" class="messageForUser__btn">
                  <img class="messageForUser__btn-img" src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
           
             </main>
        `;
    }
}