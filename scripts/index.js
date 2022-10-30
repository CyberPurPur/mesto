const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit-button");
const popupFormFields = popupElement.querySelector(".form__fields");

const nameInput = document.querySelector(".form__input_name");
const workInput = document.querySelector(".form__input_work");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const submitButton = document.querySelector(".form__submit-button");
const formElement = document.querySelector(".form");

const actionPopup = function() {
    popupElement.classList.toggle("popup_opened");
    nameInput.value = nameElement.textContent;
    workInput.value = workElement.textContent;
}

formElement.addEventListener("submit", function(evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    workElement.textContent = workInput.value;
    popupElement.classList.remove("popup_opened");
    });


profileEditButtonElement.addEventListener("click", actionPopup);
popupCloseButtonElement.addEventListener("click", actionPopup);

