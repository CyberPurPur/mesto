import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ( {popupSelector, handleFormSubmit} ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._submitBtn = this._form.querySelector('.form__submit-button');
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
 
    }

_getInputValues() {
        const inputValueData = {};
        this._inputList.forEach((item) => {
            inputValueData[item.name] = item.value;
        });
        return inputValueData;
    }


setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit)
    }


close() {
    
    this._form.reset()
    this._form.removeEventListener('submit', this._handleFormSubmit)
    super.close();
}

}