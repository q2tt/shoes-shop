import getEl from "../utils /getEl.js";
import validateEmail from "./validateEmail.js";

function formContactUs() {
  const form = getEl("contactUsForm");

  getEl("userEmail").addEventListener("input", function () {
    const email = getEl("userEmail").value;
    if (validateEmail(email)) {
      getEl("formSubmit").disabled = false;
    } else {
      getEl("formSubmit").disabled = true;
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
    getEl("formSubmit").disabled = true;
    getEl("messageToUser").classList.toggle("d-none");
  });

  getEl("closeMessage").addEventListener("click", function () {
    getEl("messageToUser").classList.toggle("d-none");
  });

  const input = getEl("phone");
  window.intlTelInput(input, {
    // any initialisation options go here
  });
}

export default formContactUs;