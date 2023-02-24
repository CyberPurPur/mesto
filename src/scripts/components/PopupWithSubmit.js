import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
constructor(popupSelector) {
  super(popupSelector);
  this._form = this._popup.querySelector('.form');
}

setEventListeners() {
super.setEventListeners();
this._form.addEventListener('click', (evt) => {
  evt.preventDefault();
  this._handleSubmit();
})
}

submitCallback(remove) {
    this._handleSubmit = remove;
  }
}