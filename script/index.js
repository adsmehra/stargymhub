document.addEventListener('DOMContentLoaded', function () {
  let navbarToggle = document.getElementById('navbar-toggle');
  navbarToggle.addEventListener('click', function () {
    let navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  });
});


function openRegisterForm() {
  document.getElementById("registerForm").style.display = "block";
}

function closeRegisterForm() {
  document.getElementById("registerForm").style.display = "none";
}

function submitForm() {
  // Check if the form is filled
  let fullName = document.getElementsByName("fullname")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let mobile = document.getElementsByName("mobile")[0].value;
  let duration = document.querySelector('input[name="duration"]:checked');
  let payment = document.querySelector('input[name="payment"]:checked');
  let personalTraining = document.querySelector('input[name="personal-training"]:checked');
  let termsAndConditions = document.getElementsByName("sign-me")[0].checked;

  if (
    fullName.trim() === "" ||
    email.trim() === "" ||
    mobile.trim() === "" ||
    !duration ||
    !payment ||
    !personalTraining ||
    !termsAndConditions
  ) {
    alert("Please fill in all the required fields and accept the terms and conditions before submitting the form.");
    return;
  }

  alert("Thank you, " + fullName + "! Your form has been submitted successfully.");
  closeRegisterForm();
}

//Js for image carousel
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "../images/bruce-mars.jpeg";
images[1] = "../images/couple-training.jpg";
images[2] = "../images/fitnish-media.jpg";
images[3] = "../images/../images/training.jpeg";
images[4] = "../images/../../images/pexels-leon.jpg";

window.watsonAssistantChatOptions = {
  integrationID: "5d058522-3955-4159-8414-60818d07c510", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "2bf749cc-2a95-4b81-ba2f-4541787cb25d", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
