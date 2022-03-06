const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const button = document.querySelector("button");
const textArea = document.querySelector("#textArea");
const textAreaError = document.querySelector("#textAreaError");

const contactUrl =
  "https://ainabjerke.com/projectExam1/wp-json/contact-form-7/v1/contact-forms/5/feedback";

//function that validates contact form input data
function validateContactForm() {
  let error = false;
  if (checkLength(fullName.value, 5) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    error = true;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    error = true;
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    error = true;
  }

  if (checkLength(textArea.value, 25) === true) {
    textAreaError.style.display = "none";
  } else {
    textAreaError.style.display = "block";
    error = true;
  }

  return !error;
}

//function that submit data back to wordpress
function submitForm(event) {
  event.preventDefault();
  if (!validateContactForm()) return;
  var form = document.querySelector("#contactForm");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", contactUrl);
  xhr.addEventListener("load", function (e) {
    // Message if contact form data is submitted succesfully
    message.innerHTML = '<div class="message">Your message has been sent</div>';
    form.reset();
  });
  xhr.send(new FormData(this));
}

form.addEventListener("submit", submitForm);
