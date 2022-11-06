const popupElement = document.querySelector(".popup_type_edit");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit-button");
const popupFormFields = popupElement.querySelector(".form__fields");

const nameInput = document.querySelector(".form__input_type_name");
const workInput = document.querySelector(".form__input_type_work");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const submitButton = document.querySelector(".form__submit-button");
const formElement = document.querySelector(".form");

//для добавления картинок

const placeAddBtn = document.querySelector('.profile__add-button');
const newCardElement = document.querySelector(".popup_type_new-card");

const placeNameInput = document.querySelector(".form__input_type_placename");
const placeLinkInput = document.querySelector(".form__input_type_placelink");

const placenameElement = document.querySelector('.element__description');
const placeLinkElement = document.querySelector('.element__image');
const cardCloseBtn = document.querySelector('#new-card-close');

//открываем и закрываем редатирование карточки
const newCardPopup = () =>
newCardElement.classList.toggle("popup_opened");


//открываем и закрываем редатирование профиля
const actionPopup = function() {
  popupElement.classList.toggle('popup_opened');
 if
 (popupElement.classList.contains('popup_opened'))
 { nameInput.value = nameElement.textContent;
   workInput.value = workElement.textContent;
 }
}

//добавлякм данные в профиль
const formSubmitHandler = function (evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    workElement.textContent = workInput.value;
    actionPopup();
}

//слушатели
formElement.addEventListener("submit", formSubmitHandler);

profileEditButtonElement.addEventListener("click", actionPopup);


popupCloseButtonElement.addEventListener("click", actionPopup);

placeAddBtn.addEventListener('click', newCardPopup);
cardCloseBtn.addEventListener('click', newCardPopup);

