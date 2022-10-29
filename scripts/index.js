const PopupElement = document.querySelector(".popup");
const PopupCloseButtonElement = PopupElement.querySelector(".popup__close-button");
const ProfileEditButtonElement = document.querySelector(".profile__edit-button");
const PopupFormFields = PopupElement.querySelector(".form__fields");

const nameInput = document.querySelector(".form__input_name");
const workInput = document.querySelector(".form__input_work");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const SubmitButton = document.querySelector(".form__submit-button");
const FormElement = document.querySelector(".form");

const openPopup = function () {
  PopupElement.classList.add("popup__is-opened");
  nameInput.value = nameElement.textContent;
  workInput.value = workElement.textContent;
};

const closePopup = function () {
  PopupElement.classList.remove("popup__is-opened");
  FormElement.reset;
};

const ClosePopupByClickOnOverlay = function () {
  if (event.target === event.currentTarget) {
    closePopup();
  }
};

function formSubmitHandler(evt) {
  nameElement.textContent = nameInput.value;
  workElement.textContent = workInput.value;
  evt.preventDefault();
  PopupElement.classList.remove("popup__is-opened");
}

ProfileEditButtonElement.addEventListener("click", openPopup);
PopupCloseButtonElement.addEventListener("click", closePopup);
PopupElement.addEventListener("click", ClosePopupByClickOnOverlay);
FormElement.addEventListener("submit", formSubmitHandler);
