//import './index.css';

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

function handleEditFormSubmit(data)  {
  userInfo.setUserInfo({userName: data.userName, workName: data.workName});
  popupTypeEdit.close();
}

const popupTypeEdit = new PopupWithForm('.popup_type_edit', handleEditFormSubmit)
popupTypeEdit.setEventListeners();

    const editBtnHandleClick = () => {  
      formPriofileValidator.enableValidation();
      popupTypeEdit.setInputValues(userInfo.getUserInfo())
      popupTypeEdit.open();
  }

//профиль

const userInfo = new UserInfo({ 
  userName: '.profile__name', 
  workName: '.profile__description' } );


//зум картинки
const popupWithZoom = new PopupWithImage(".popup_type_picture");
popupWithZoom.setEventListeners();

const handleCardClick = (link, name) => {
  popupWithZoom.open(link, name);
};



  const newCardBtnClick = () => {
    formImageValidator.enableValidation();
    popUpTypePicture.open();
  }

  const handleCardFormSubmit = (data) => {
    section.addItem(createCard({name: data.name, link: data.link}))
      formPriofileValidator.resetValidation(); 
      popUpTypePicture.close()
  }

  const popUpTypePicture = new PopupWithForm('.popup_type_new-card', handleCardFormSubmit)
  popUpTypePicture.setEventListeners();

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


//валидация
const formPriofileValidator = new FormValidator (selectors, popupProfile)
const formImageValidator = new FormValidator (selectors, newCardElement);


//слушатели кнопок открытия попапов
editBtn.addEventListener('click', editBtnHandleClick) //userinfo
addCardBtn.addEventListener('click', newCardBtnClick) //newCard




