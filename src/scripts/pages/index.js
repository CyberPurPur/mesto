import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { popupProfile, newCardElement, nameInput, workInput, placeNameInput,
placeLinkInput, container, editBtn, addCardBtn, zoomImg, zoomAlt, selectors, avatar, avatarBtn, avatarPopup, confirmPopup, deleteBtn } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'a22c0890-1d02-4995-b901-399b42cddbef',
    'Content-Type': 'application/json'
  }
  });
  
//экземпляр профиля
const userInfo = new UserInfo({ 
  userName: '.profile__name', 
  workName: '.profile__description',
  avatar: '.profile__avatar'
} );

  //загрузка профиля и картинок
let userId

Promise.all([api.getUserId(), api.getInitialCards()])
.then(([userData, initialCards]) => {
  userInfo.setUserInfo(userData)
  userId = userData._id
  section.renderElement(initialCards)
})
.catch(err => {
console.log(`Ошибка в загрузке данных. ${err}`)
})

//редактирование профиля

function handleEditFormSubmit(data)  {
  popupTypeEdit.loading(true)
  api.editUserInfo(data)
  .then((data) => {
  userInfo.setUserInfo(data);
  popupTypeEdit.close();
  })
  .catch((err) => {
    console.log(`Ошибка в редактировании профиля. ${err}`)
  })
.finally(() => {
  popupTypeEdit.loading(false)
})
}

const popupTypeEdit = new PopupWithForm('.popup_type_edit', handleEditFormSubmit)
popupTypeEdit.setEventListeners();

const editBtnHandleClick = () => {  
  popupTypeEdit.setInputValues(userInfo.getUserInfo())
  formPriofileValidator.resetValidation()
  popupTypeEdit.open();
  }

//редактирование аватара
const popUpEditAvatar = new PopupWithForm('.popup_type_edit-avatar', handleAvatarFormSubmit)
popUpEditAvatar.setEventListeners();

const handleAvatarClick = () => {
  formAvatarValidator.resetValidation()
  popUpEditAvatar.open();
}

function handleAvatarFormSubmit(data) {
  popUpEditAvatar.loading(true) 
  api.editUserAvatar(data)
  .then((data) => {
    avatar.src = data.avatar
    popUpEditAvatar.close()
  })
  .catch((err) => {
    console.log(`Ошибка в замене аватара. ${err}`)
  })
  .finally(() => {
    popUpEditAvatar.loading(false) 
  })
}

//зум картинки
const popupWithZoom = new PopupWithImage(".popup_type_picture");
popupWithZoom.setEventListeners();
const handleCardClick = (link, name) => {
popupWithZoom.open(link, name);
};

//открываем форму добавления карточки
  const newCardBtnClick = () => {
    formImageValidator.resetValidation();
    popUpTypePicture.open();
  }

//постим карточку
  const handleCardFormSubmit = (formData) => {
    popUpTypePicture.loading(true); 
    api.postNewCard(formData)
    .then((formData) => {
      section.addItem(createCard(formData));
      popUpTypePicture.close();
    })
    .catch((err) => {
      console.log(`Ошибка в добавлении карточки. ${err}`)
    })
    .finally(() => {
      popUpTypePicture.loading(false)
    })
  }

//экземпляр попапа добавляения карточки
  const popUpTypePicture = new PopupWithForm('.popup_type_new-card', handleCardFormSubmit)
  popUpTypePicture.setEventListeners();
  
//собираем карточку

const createCard = (data) => {
  const card = new Card({
    data: data, 
    handleCardClick: handleCardClick, 
    cardSelector: '.img-template',
    userId: userId,
    handleTrashBtnClick: (cardId) => {
      popupWithConfirmation.open(),
      popupWithConfirmation.submitCallback(() => {
        api.deleteCard(cardId)
        .then(() => {
          popupWithConfirmation.close();
          card.removeCard()
        })
        .catch((err) => {
          console.log(`Ошибка в удалении карточки. ${err}`)
        })
      })
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
      .then((data) => {
        card.handleLikeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка в постановке лайка. ${err}`)
      })
    },
    handleDelLike: (cardId) => {
      api.discardLike(cardId)
      .then((data) => {
        card.handleLikeCard(data)
      })
      .catch((err) => {
        console.log(`Ошибка в удалении лайка. ${err}`)
      })
    }
  })
  const cardElement = card.prepareCard();
  return cardElement;
 }


//создание экземпляра секции
 const section = new Section({ 
  renderer: (card) => {
    section.addItem(createCard(card))} 
},
container);

//поап подтверждения удаления
const popupWithConfirmation = new PopupWithSubmit(".popup_type_confirmation")
popupWithConfirmation.setEventListeners();


//валидация
const formPriofileValidator = new FormValidator (selectors, popupProfile);
formPriofileValidator.enableValidation();

const formImageValidator = new FormValidator (selectors, newCardElement);
formImageValidator.enableValidation();

const formAvatarValidator = new FormValidator (selectors, avatarPopup);
formAvatarValidator.enableValidation();


//слушатели кнопок открытия попапов
editBtn.addEventListener('click', editBtnHandleClick) //userinfo
addCardBtn.addEventListener('click', newCardBtnClick) //newCard
avatarBtn.addEventListener('click', handleAvatarClick) //edit avatar



