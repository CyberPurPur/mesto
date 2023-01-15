import './index.css';

import Card from '../components/Card.js';
import { initialCards } from '../utils/cards.js';
import FormValidator from '../components/FormValidator.js';
import { popupProfile, newCardElement, nameInput, workInput, placeNameInput, 
placeLinkInput, container, editBtn, addCardBtn, zoomImg, zoomAlt, selectors } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

//редактирование профиля
const editBtnHandleClick = () => {
    const popupTypeEdit = new PopupWithForm( {
    popupSelector: '.popup_type_edit', 
    handleFormSubmit: (evt) => {
      evt.preventDefault();
      const newProfileData = {
        userName: nameInput.value,
        workName: workInput.value
      }
      userInfo.setUserInfo(newProfileData)
      popupTypeEdit.close();
    } });
    const oldProfile = userInfo.getUserInfo();
    fillProfilePopupData(oldProfile);
      popupTypeEdit.setEventListeners()
      popupTypeEdit.open()
}
//профиль

const userInfo = new UserInfo({ 
  userName: '.profile__name', 
  workName: '.profile__description' } );

const fillProfilePopupData = (oldProfile) => {
  nameInput.value = oldProfile.userName;
  workInput.value = oldProfile.workName;
}

//зум картинки
const popupWithZoom = new PopupWithImage(".popup_type_picture");
popupWithZoom.setEventListeners();

const handleCardClick = (link, name) => {
  zoomImg.src = link;
  zoomAlt.textContent = name;
  zoomImg.alt = name;
  popupWithZoom.open(link, name);
};


  const newCardBtnClick = () => {
    const popUpTypePicture = new PopupWithForm( {
      popupSelector: '.popup_type_new-card', 
      handleFormSubmit: () => {
        const cardData = {
          name: placeNameInput.value,
          link: placeLinkInput.value }
          section.addItem(createCard(cardData))
          popUpTypePicture.close()
      }})
    popUpTypePicture.setEventListeners()
    popUpTypePicture.open()
  }


 const createCard = (cardData) => {
  const card = new Card(cardData.name, cardData.link, handleCardClick, '.img-template')
  const cardElement = card.prepareCard();
  return cardElement;
 }

 
 const section = new Section({items: initialCards, 
  renderer: (card) => {
    section.addItem(createCard(card))} 
},
container);
section.renderElement()



const formPriofileValidator = new FormValidator (selectors, popupProfile)
formPriofileValidator.enabbleValidation();

const formImageValidator = new FormValidator (selectors, newCardElement);
formImageValidator.enabbleValidation();

//слушатели кнопок открытия попапов
editBtn.addEventListener('click', editBtnHandleClick) //userinfo
addCardBtn.addEventListener('click', newCardBtnClick) //newCard

//formPlaceElement.addEventListener("submit", addNewCard);



