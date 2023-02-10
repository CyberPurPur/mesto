import './index.css';

import Card from '../components/Card.js';
//import { initialCards } from '../utils/cards.js';
import FormValidator from '../components/FormValidator.js';
import { popupProfile, newCardElement, nameInput, workInput, placeNameInput,
placeLinkInput, container, editBtn, addCardBtn, zoomImg, zoomAlt, selectors, avatar } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'a22c0890-1d02-4995-b901-399b42cddbef',
    'Content-Type': 'application/json'
  }
  });

  //загрузка карточек
let userId;

Promise.all([api.getInitialCards(), api.getUserId()])
.then(([initialCards, userData]) => {
  userInfo.setUserInfo(userData.name, userData.about)
  userId = userData._id;
  section.renderElement(initialCards);
})
.catch((err) => {
  console.log(`Ошибка: ${err}`)
})



//редактирование профиля

function handleEditFormSubmit(data)  {
  userInfo.setUserInfo({userName: data.userName, workName: data.workName});
  popupTypeEdit.close();
}

const popupTypeEdit = new PopupWithForm('.popup_type_edit', handleEditFormSubmit)
popupTypeEdit.setEventListeners();

    const editBtnHandleClick = () => {  
      popupTypeEdit.setInputValues(userInfo.getUserInfo())
      formPriofileValidator.resetValidation()
      popupTypeEdit.open();
  }

//экземпляр профиля
const userInfo = new UserInfo({ 
  userName: '.profile__name', 
  workName: '.profile__description',
  avatar: '.profile__avatar'
} );


//зум картинки
const popupWithZoom = new PopupWithImage(".popup_type_picture");
const handleCardClick = (link, name) => {
  popupWithZoom.open(link, name);
};

//открываем форму добавления карточки
  const newCardBtnClick = () => {
    formImageValidator.resetValidation();
    popUpTypePicture.open();
  }

//сабмит формы для добавления карточки + добавление карточки 
  const handleCardFormSubmit = (data) => {
    section.addItem(createCard({name: data.name, link: data.link})) 
      popUpTypePicture.close()
  }

//экземпляр попапа добавляения карточки
  const popUpTypePicture = new PopupWithForm('.popup_type_new-card', handleCardFormSubmit)
  popUpTypePicture.setEventListeners();
  
//отрисовка карточки
 const createCard = (cardData) => {
  const card = new Card(cardData.name, cardData.link, handleCardClick, '.img-template')
  const cardElement = card.prepareCard();
  return cardElement;
 }
//создание экземпляра секции
 const section = new Section({ 
  renderer: (card) => {
    section.addItem(createCard(card))} 
},
container);
//section.renderElement()


//валидация
const formPriofileValidator = new FormValidator (selectors, popupProfile);
formPriofileValidator.enableValidation();

const formImageValidator = new FormValidator (selectors, newCardElement);
formImageValidator.enableValidation();


//слушатели кнопок открытия попапов
editBtn.addEventListener('click', editBtnHandleClick) //userinfo
addCardBtn.addEventListener('click', newCardBtnClick) //newCard




