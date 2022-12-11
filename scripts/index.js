import Card from './Card.js';
import { initialCards } from './utils/cards.js';
import FormValidator from './FormValidator.js';
import { popupProfile, newCardElement, imagePopupElement, popups, 
openPopupButtons, nameInput, workInput, placeNameInput, placeLinkInput, 
formProfileElement, formPlaceElement, nameElement, workElement, container, 
zoomImg, zoomAlt, selectors } from './utils/constants.js';

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
const zoomImage = (link, name) => {
  
  zoomImg.src = link;
  zoomAlt.textContent = name;
  zoomImg.alt = name;
  openPopup(imagePopupElement);
};

//публикуем карточку
  const renderCard = (cardElement) => {
  container.prepend(cardElement);
};

//проходим по массиву
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, zoomImage);
  const cardElement = card.prepareCard();
  renderCard(cardElement);
});
//генерим картинку из попапа
const addNewCard = (name, link) => {
  name = placeNameInput.value;
  link = placeLinkInput.value;
  const addedCardElement = new Card(name, link, zoomImage)
  const cardElement = addedCardElement.prepareCard();
  renderCard(cardElement);
  formPlaceElement.reset();
  closePopup(newCardElement);
}


//закрытие по клику на esс
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
};

//закрытие по клику на оверлей
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

const formPriofileValidator = new FormValidator (selectors, popupProfile)
formPriofileValidator.enabbleValidation();

const formImageValidator = new FormValidator (selectors, newCardElement);
formImageValidator.enabbleValidation();


formPlaceElement.addEventListener("submit", addNewCard);
formProfileElement.addEventListener("submit", handleProfileFormSubmit);


