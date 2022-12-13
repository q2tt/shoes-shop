import getEl from "../utils /getEl.js";
import copyContent from "./copyContent.js"

function contactUs() {
  getEl("copyTelBtn").addEventListener("click", function () {
    const copyText = getEl("telCompany").innerHTML;
    copyContent(copyText);
  });
  getEl("copyEmailBtn").addEventListener("click", function () {
    const copyText = getEl("emailCompany").innerHTML;
    copyContent(copyText);
  });
}
export default contactUs;