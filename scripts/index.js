//Popups

const popupProfile = document.querySelector(".popup_type_edit");
const popupCloseButtonElement = popupProfile.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit-button");

const newCardElement = document.querySelector(".popup_type_new-card");
const placeAddBtn = document.querySelector(".profile__add-button");
const cardCloseBtn = newCardElement.querySelector(".popup__close-button");

const imagePopupElement = document.querySelector(".popup_type_picture");
const imagePopupCloseBtn = imagePopupElement.querySelector(".popup__close-button");

//popup inputs

const nameInput = popupProfile.querySelector(".form__input_type_name");
const workInput = popupProfile.querySelector(".form__input_type_work");

const placeNameInput = newCardElement.querySelector(".form__input_type_placename");
const placeLinkInput = newCardElement.querySelector(".form__input_type_placelink");

const formProfileElement = popupProfile.querySelector("#profile_data");
const formPlaceElement = newCardElement.querySelector("#place_data");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const container = document.querySelector(".elements");
const imgTemplate = document.querySelector("#img_template").content;
const cardEl = imgTemplate.querySelector(".element").cloneNode(true);

const templateImageEl = imgTemplate.querySelector(".element__image");
const templatePlaceEl = imgTemplate.querySelector(".element__name");

const zoomImg = imagePopupElement.querySelector(".popup__image");
const zoomAlt = imagePopupElement.querySelector(".popup__image-caption");

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

const openEditPopup = function(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  workInput.value = workElement.textContent;
}


const profileSubmitHandler = (evt) => {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  workElement.textContent = workInput.value;
  closePopup(popupProfile);
};

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

const zoomImage = (evt) => {
  const enableZoom = evt.target;
  const currentImg = enableZoom.closest(".element__image");
  zoomImg.src = currentImg.src;
  zoomAlt.textContent = currentImg.alt;
  openPopup(imagePopupElement);
};

//собираем образец карточки
getCardEl = function (data) {
  const cardEl = imgTemplate.querySelector(".element").cloneNode(true);
  const picture = cardEl.querySelector(".element__image");
  const picTitle = cardEl.querySelector(".element__name");
  picture.src = data.link;
  picTitle.textContent = data.name;
  picture.alt = data.name;
  cardEl.querySelector(".element__like-button").addEventListener("click", likeCard);
  cardEl.querySelector(".element__trash-button").addEventListener("click", deleteCard);
  picture.addEventListener("click", zoomImage); //не шмогла передать data, а не evt:(
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


profileEditButtonElement.addEventListener("click", function () {
  openEditPopup(popupProfile);
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

imagePopupCloseBtn.addEventListener("click", function () {
  closePopup(imagePopupElement);
});

formPlaceElement.addEventListener("submit", addNewCard);

formProfileElement.addEventListener("submit", profileSubmitHandler);
