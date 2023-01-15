//Popups

const popupProfile = document.querySelector(".popup_type_edit");
const newCardElement = document.querySelector(".popup_type_new-card");

const imagePopupElement = document.querySelector(".popup_type_picture");
const popups = document.querySelectorAll('.popup');
const openPopupButtons = document.querySelectorAll('.button_open-popup');


//buttons
const editBtn = document.querySelector(".profile__edit-button");
const addCardBtn = document.querySelector(".profile__add-button");

//popup inputs

const nameInput = popupProfile.querySelector(".form__input_type_name");
const workInput = popupProfile.querySelector(".form__input_type_work");

const placeNameInput = newCardElement.querySelector(".form__input_type_placename");
const placeLinkInput = newCardElement.querySelector(".form__input_type_placelink");

const formProfileElement = popupProfile.querySelector(".profile-data");
const formPlaceElement = newCardElement.querySelector(".place-data");

const nameElement = document.querySelector(".profile__name");
const workElement = document.querySelector(".profile__description");

const container = document.querySelector(".elements");

const zoomImg = imagePopupElement.querySelector(".popup__image");
const zoomAlt = imagePopupElement.querySelector(".popup__image-caption");

export const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
  }
export {
    popupProfile, newCardElement, imagePopupElement, popups, 
    openPopupButtons, nameInput, workInput, placeNameInput, placeLinkInput, 
    formProfileElement, formPlaceElement, nameElement, workElement, container, 
    zoomImg, zoomAlt, editBtn, addCardBtn
  }

  