//Popups

const popupProfile = document.querySelector(".popup_type_edit");
const popupCloseButtonElement = popupProfile.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit-button");

const newCardElement = document.querySelector(".popup_type_new-card");
const placeAddBtn = document.querySelector(".profile__add-button");
const cardCloseBtn = newCardElement.querySelector(".popup__close-button");

const imagePopupElement = document.querySelector(".popup_type_picture");
const imagePopupCloseBtn = imagePopupElement.querySelector(".popup__close-button");
//const openPopupImage = document.querySelector('.element__image');

//popup inputs

const nameInput = popupProfile.querySelector(".form__input_type_name");
const workInput = popupProfile.querySelector(".form__input_type_work");

const placeNameInput = newCardElement.querySelector(".form__input_type_placename");
const placeLinkInput = newCardElement.querySelector(".form__input_type_placelink");

const placenameElement = newCardElement.querySelector(".element__description");
const imageLinkElement = newCardElement.querySelector(".element__image");

const submitProfileButton = popupProfile.querySelector(".form__submit-button");
const submitPlaceButton = newCardElement.querySelector(".form__submit-button");

const formProfileElement = popupProfile.querySelector("#profile_data");
const popupFormFields = popupProfile.querySelector(".form__fields");
const formPlaceElement = newCardElement.querySelector("#place_data");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const container = document.querySelector(".elements");
const imgTemplate = document.querySelector("#img_template").content;
const cardEl = imgTemplate.querySelector(".element").cloneNode(true);

const trashBtn = document.querySelector(".element__trash-button");
//открываем и закрываем модалки

const openPopup = (popup) => {
  nameInput.value = nameElement.textContent;
  workInput.value = workElement.textContent;
  popup.classList.add("popup_opened");
};
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

//слушатели модальных окон

profileEditButtonElement.addEventListener("click", function () {
  openPopup(popupProfile);
});
popupCloseButtonElement.addEventListener("click", function () {
  closePopup(popupProfile);
});
placeAddBtn.addEventListener("click", function () {
  openPopup(newCardElement);
});
cardCloseBtn.addEventListener("click", function () {
  closePopup(newCardElement);
});
///
imagePopupCloseBtn.addEventListener("click", function () {
  closePopup(imagePopupElement);
});

//добавляем данные в профиль

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  workElement.textContent = workInput.value;
  closePopup(popupProfile);
};

formProfileElement.addEventListener("submit", formSubmitHandler);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const likeBtn = cardEl.querySelector(".element__like-button");
const buttonDeleteCard = cardEl.querySelector(".element__trash-button");

//delete
const deleteCard = (evt) => {
  const target = evt.target;
  const currentCard = target.closest(".element");
  currentCard.remove();
};

//like

const likeCard = (evt) => {
  const enableLike = evt.target;
  const currentCard = enableLike.closest(".element__like-button");
  currentCard.classList.toggle("element__like-button_active");
};

const zoomImg = imagePopupElement.querySelector(".popup__image");
const zoomAlt = imagePopupElement.querySelector(".popup__image-caption");

const zoomImage = (evt) => {
  const enableZoom = evt.target;
  const currentImg = enableZoom.closest(".element__image");
  zoomImg.src = currentImg.src;
  zoomAlt.textContent = currentImg.alt;
  openPopup(imagePopupElement);
};

//собираем образец карточки

const templateImageEl = cardEl.querySelector(".element__image");
const templatePlaceEl = cardEl.querySelector(".element__name");

getCardEl = function (data) {
  const cardEl = imgTemplate.querySelector(".element").cloneNode(true);
  cardEl.querySelector(".element__image").src = data.link;
  cardEl.querySelector(".element__name").textContent = data.name;
  cardEl.querySelector(".element__image").alt = data.name;
  cardEl.querySelector(".element__like-button").addEventListener("click", likeCard);
  cardEl.querySelector(".element__trash-button").addEventListener("click", deleteCard);
  cardEl.querySelector(".element__image").addEventListener("click", zoomImage);
  return cardEl;
};

//публикуем карточку
const renderCard = (data, container) => {
  container.prepend(getCardEl(data));
};

//проходим по массиву
initialCards.forEach((data) => {
  renderCard(data, container);
});

//добавим новую карточку
const addNewCard = (evt) => {
  evt.preventDefault();
  data = { name: placeNameInput.value, link: placeLinkInput.value };
  cardEl.querySelector(".element__image").textContant = placeNameInput.value;
  renderCard(data, container);
  closePopup(newCardElement);
};

formPlaceElement.addEventListener("submit", addNewCard);
