//Popups

const popupProfile = document.querySelector(".popup_type_edit");
const profileEditButtonElement = document.querySelector(".profile__edit-button");

const newCardElement = document.querySelector(".popup_type_new-card");
const placeAddBtn = document.querySelector(".profile__add-button");

const imagePopupElement = document.querySelector(".popup_type_picture");
const popups = document.querySelectorAll('.popup')
const openPopupButtons = document.querySelectorAll('.button_open-popup')
//popup inputs

const nameInput = popupProfile.querySelector(".form__input_type_name");
const workInput = popupProfile.querySelector(".form__input_type_work");

const placeNameInput = newCardElement.querySelector(".form__input_type_placename");
const placeLinkInput = newCardElement.querySelector(".form__input_type_placelink");

const formProfileElement = popupProfile.querySelector(".profile_data");
const formPlaceElement = newCardElement.querySelector(".place_data");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const container = document.querySelector(".elements");
const imgTemplate = document.querySelector(".img_template").content;
const cardEl = imgTemplate.querySelector(".element").cloneNode(true);

const templateImageEl = imgTemplate.querySelector(".element__image");
const templatePlaceEl = imgTemplate.querySelector(".element__name");

const zoomImg = imagePopupElement.querySelector(".popup__image");
const zoomAlt = imagePopupElement.querySelector(".popup__image-caption");

const openPopup = (popup) => {
  document.addEventListener('keydown', closePopupByEsc);
  popup.classList.add("popup_opened");
};

const fillProfilePopupData = () => {
  nameInput.value = nameElement.textContent;
  workInput.value = workElement.textContent;
}

const closePopup = function (popup) {
  document.removeEventListener('keydown', closePopupByEsc);
  popup.classList.remove("popup_opened");
};

const handleProfileFormSubmit = (evt) => {
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
  zoomImg.alt = currentImg.alt;
  openPopup(imagePopupElement);
};

//собираем образец карточки
getCardEl = function (name, link) {
  const cardEl = imgTemplate.querySelector(".element").cloneNode(true);
  const picture = cardEl.querySelector(".element__image");
  const picTitle = cardEl.querySelector(".element__name");
  picture.src = link;
  picTitle.textContent = name;
  picture.alt = name;
  cardEl.querySelector(".element__like-button").addEventListener("click", likeCard);
  cardEl.querySelector(".element__trash-button").addEventListener("click", deleteCard);
  picture.addEventListener("click", zoomImage); 
  return cardEl;
};

//публикуем карточку
const renderCard = (link, name) => {
  container.prepend(getCardEl(name, link));
};

//проходим по массиву
initialCards.forEach(({ link, name }) => {
  renderCard(link, name);
});

//добавим новую карточку
const addNewCard = (name, link) => {
  name = placeNameInput.value 
  link = placeLinkInput.value;
  renderCard(link, name);

  formPlaceElement.reset();
  closePopup(newCardElement);
};

//закрытие по клику на esс
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
};


popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('profile__edit-button')) {
      openPopup(popupProfile);
      fillProfilePopupData();
    }
    if (evt.target.classList.contains('profile__add-button')) {
      openPopup(newCardElement);
    }
  })
  });
  
/*
я заменила 4 строчки шестью выше, not feeling guilty about it. Спасибо, что рассказали про перебор <3
я оставлю слушатели здесь, на случай, если придется переделывать ;)

profileEditButtonElement.addEventListener("click", function () {
  openPopup(popupProfile);
});
placeAddBtn.addEventListener("click", function () {
  openPopup(newCardElement);
});
*/

formPlaceElement.addEventListener("submit", addNewCard);
formProfileElement.addEventListener("submit", handleProfileFormSubmit);
