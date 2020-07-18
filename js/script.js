let openMapButton = document.querySelector(".button-open-map");
let mapPopup = document.querySelector(".popup-map");
if (openMapButton && mapPopup) {
  openMapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.toggle("modal-show");
  });
  let closeButton = mapPopup.querySelector(".button-close-popup");
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.toggle("modal-show");
  });
}

let writeToUsButton = document.querySelector(".button_write-to-us");
let feedbackPopupForm = document.querySelector(".popup-feedback");
if (writeToUsButton && feedbackPopupForm) {
  writeToUsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopupForm.classList.toggle("modal-show");
  });
  let closeButton = feedbackPopupForm.querySelector(".button-close-popup");
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopupForm.classList.toggle("modal-show");
  });
  feedbackPopupForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let name = document.querySelector(".name-input");
    let email = document.querySelector(".email-input");
    let message = document.querySelector(".msg-textarea");
    if (!(name.value && email.value && message.value)) {
      feedbackPopupForm.classList.remove("modal-error");
      feedbackPopupForm.offsetWidth = feedbackPopupForm.offsetWidth;
      feedbackPopupForm.classList.add("modal-error");
    }
  });
}

// Working promo slider
let buttonSliderControl1 = document.querySelector(".button_slider-control-1");
buttonSliderControl1.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-controls").querySelector(".button_slider-control_active").classList.toggle("button_slider-control_active");
  document.querySelector(".promo-slider-list").querySelector(".slider_active").classList.toggle("slider_active");
  buttonSliderControl1.classList.toggle("button_slider-control_active");
  document.querySelector(".slider__slider-1").classList.toggle("slider_active");
});
let buttonSliderControl2 = document.querySelector(".button_slider-control-2");
buttonSliderControl2.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-controls").querySelector(".button_slider-control_active").classList.toggle("button_slider-control_active");
  document.querySelector(".promo-slider-list").querySelector(".slider_active").classList.toggle("slider_active");
  buttonSliderControl2.classList.toggle("button_slider-control_active");
  document.querySelector(".slider__slider-2").classList.toggle("slider_active");
});
let buttonSliderControl3 = document.querySelector(".button_slider-control-3");
buttonSliderControl3.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".slider-controls").querySelector(".button_slider-control_active").classList.toggle("button_slider-control_active");
  document.querySelector(".promo-slider-list").querySelector(".slider_active").classList.toggle("slider_active");
  buttonSliderControl3.classList.toggle("button_slider-control_active");
  document.querySelector(".slider__slider-3").classList.toggle("slider_active");
});

// Working service slider
let buttonDeliverySliderControl = document.querySelector(".button_delivery-control");
buttonDeliverySliderControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".service-list").querySelector(".button_interactive_active").classList.toggle("button_interactive_active");
  document.querySelector(".service-slider").querySelector(".service-slider_active").classList.toggle("service-slider_active");
  buttonDeliverySliderControl.classList.toggle("button_interactive_active");
  document.querySelector(".service-slider__delivery").classList.toggle("service-slider_active");
});
let buttonWarantySliderControl = document.querySelector(".button_warranty-control");
buttonWarantySliderControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".service-list").querySelector(".button_interactive_active").classList.toggle("button_interactive_active");
  document.querySelector(".service-slider").querySelector(".service-slider_active").classList.toggle("service-slider_active");
  buttonWarantySliderControl.classList.toggle("button_interactive_active");
  document.querySelector(".service-slider__warranty").classList.toggle("service-slider_active");
});
let buttonCreditSliderControl = document.querySelector(".button_credit-control");
buttonCreditSliderControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".service-list").querySelector(".button_interactive_active").classList.toggle("button_interactive_active");
  document.querySelector(".service-slider").querySelector(".service-slider_active").classList.toggle("service-slider_active");
  buttonCreditSliderControl.classList.toggle("button_interactive_active");
  document.querySelector(".service-slider__credit").classList.toggle("service-slider_active");
});
