export default class FormValidator {

constructor (selectors, formElement) {
  this._selectors = selectors;
  this._formElement = formElement;
  this._inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
  this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector)
}

_showInputError = (inputElement, errorMessage) => {
const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
 errorElement.textContent = errorMessage;
 errorElement.classList.add(this._selectors.errorClass);
}

_hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._selectors.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(this._selectors.errorClass);
}

_checkValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage)
  } else {
    this._hideInputError(inputElement);
  }
}

_hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  })
}

_toggleButtonState = ()  => {
  if (this._hasInvalidInput()) {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
  } else {
    this._buttonElement.removeAttribute('disabled', true);
    this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
  }
}

_setEventListeners = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
  this._checkValidity(inputElement);
  this._toggleButtonState();
});
});
this._formElement.addEventListener('submit', evt => evt.preventDefault())
}

enableValidation = () => {
this._setEventListeners();
}

resetValidation = () => {
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement)
  });
  this._toggleButtonState(); 
}
}