import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
constructor(popupSelector) {
  super(popupSelector);
  this._submitBtn = this._popup.querySelector('.form__submit-button');
}

setEventListeners() {
super.setEventListeners();
this._submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  this._handleSubmit();
})
}

submitCallback(callback) {
    this._handleSubmit = callback;
  }
}