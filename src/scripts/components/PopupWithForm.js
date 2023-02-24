import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._submitBtn = this._form.querySelector('.form__submit-button');
        this._inputList = this._form.querySelectorAll('.form__input');
        this._submitBtnText = this._submitBtn.textContent;
 
    }

_getInputValues() {
       const inputValueData = {};
        this._inputList.forEach((input) => {
        inputValueData[input.name] = input.value;
        });
        return inputValueData;
    }

setInputValues(data) {
    this._inputList.forEach((input) => {
        input.value = data[input.name];
    });
      }
    

setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
        this._handleFormSubmit(this._getInputValues())
        this.close();
        });
}

close() {
    this._form.reset();
    super.close();
}

loading(isTrue) {
    if (isTrue) {
        this._submitBtn.textContent = 'Сохранение...'
    }
     else {
        this._submitBtn.textContent = this._submitBtnText;
    }
    }
}