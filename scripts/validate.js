const selectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
}

//validation

const checkValidity = (formElement, inputElement, { ...rest }) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest)
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

//check_validity_button
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

//deactivate_button

const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass, ...rest}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

//show_error
const showInputError = (formElement, inputElement, errorMessage, { errorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};


//hide_error
const hideInputError = (formElement, inputElement,  { errorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//set_listeners
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

//enable_validation

const enableValidation = ({ formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  const formElement = document.querySelector(formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', evt => evt.preventDefault())
    setEventListeners(formElement, rest);
  })
};

enableValidation(selectors);