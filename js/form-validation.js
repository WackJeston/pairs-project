//---------------------------------------
//  Form Validation - Contact Page
//---------------------------------------

const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneValidator = /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}$/

const submitElement = document.querySelector("#submit")

const firstNameElement = document.querySelector("#first-name")
const lastNameElement = document.querySelector("#last-name")
const emailElement = document.querySelector("#email")
const phoneElement = document.querySelector("#phone")
const messageElement = document.querySelector("#message")
const gdprElement = document.querySelector("#gdpr")
const reCaptchaElement = document.querySelector("#recaptcha")
const tickElement = document.querySelector("#tick")

const messageComplete = document.querySelector("#message-complete")
const formComplete = document.querySelector("#form-complete")

let correctFirstName = false
let correctLastName = false
let correctMessage = false
let correctEmail = false
let correctPhone = false
let correctGdpr = false
let correctReCaptcha = false

// submitElement.addEventListener("click", () => console.log(gdprElement.checked))



// First Name Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (firstNameElement.value == ""){
    firstNameElement.style.border = "2px solid red"
    correctFirstName = false
  } else{
    firstNameElement.style.border = "1px solid green"
    correctFirstName = true
  }
})

// Last Name Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (lastNameElement.value == ""){
    lastNameElement.style.border = "2px solid red"
    correctLastName = false
  } else{
    lastNameElement.style.border = "1px solid green"
    correctLastName = true
  }
})

// Message Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (messageElement.value == ""){
    messageElement.style.border = "2px solid red"
    correctMessage = false
  } else{
    messageElement.style.border = "1px solid green"
    correctMessage = true
  }
})

// Email Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (emailValidator.test(emailElement.value) == true){
    emailElement.style.border = "1px solid green"
    correctEmail = true
  } else{
    emailElement.style.border = "2px solid red"
    correctEmail = false
  }
})

// Phone Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (phoneValidator.test(phoneElement.value) == true){
    phoneElement.style.border = "1px solid green"
    correctPhone = true
  } else{
    phoneElement.style.border = "2px solid red"
    correctPhone = false
  }
})

// GDPR Validation -----------------------------
submitElement.addEventListener("click", () => {
  if (gdprElement.checked == true){
    gdprElement.style.outline = "2px solid green"
    correctGdpr = true
  } else{
    gdprElement.style.outline = "2px solid red"
    correctGdpr = false
  }
})

// reCAPTCHA Validation -----------------------------
reCaptchaElement.addEventListener("click", () => {
  if (correctReCaptcha == false){
    tickElement.style.display = "flex"
    correctReCaptcha = true
  }
})

// Completion Section ---------------------------
submitElement.addEventListener("click", () => {
  if (correctFirstName == true && correctLastName == true && correctMessage == true && correctEmail == true && correctPhone == true && correctGdpr == true && correctReCaptcha == true){
    formComplete.style.display = "none"
    messageComplete.style.display = "flex"
  }
})


// submitElement.addEventListener("click", () => console.log(correctFirstName, correctLastName, correctMessage, correctEmail, correctPhone, correctGdpr, correctReCaptcha))
