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
