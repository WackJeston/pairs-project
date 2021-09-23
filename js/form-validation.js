//---------------------------------------
//  Form Validation - Contact Page
//---------------------------------------

let firstName = "";
let lastName = "";
let email = "";
let phone = "";
let message = "";
let gdpr = false;
let reCaptcha = false;

const tester = function() {
  alert ("toast");
}

document.querySelector(".submit-button").addEventListender("click", tester);
