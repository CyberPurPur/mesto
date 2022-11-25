const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
  }
  
  //const
  
  const formElement = document.querySelector(selectors.formSelector);
  
  //validation
  
  const checkValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  //check_validity_button
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  //buttonElement.setAttribute('disabled', true);
  // buttonElement.classlistAdd(selectors.inactiveButtonClass);
  //deactivate_button
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled', true);
      buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
  };
  
  //show_error
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  
  //hide_error
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  //set_listeners
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  //enable_validation
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', evt => evt.preventDefault())
      setEventListeners(formElement);
    })
  };
  
  enableValidation(selectors);

  ////////////////////


//собираем образец карточки
getCardEl = function (data) {
  const cardEl = imgTemplate.querySelector(".element").cloneNode(true);
  cardEl.querySelector(".element__image").textContant = placeNameInput.value;
  const picture = cardEl.querySelector(".element__image");
  const picTitle = cardEl.querySelector(".element__name");
  picture.src = data.link;
  picTitle.textContent = data.name;
  picture.alt = data.name;
  cardEl.querySelector(".element__like-button").addEventListener("click", likeCard);
  cardEl.querySelector(".element__trash-button").addEventListener("click", deleteCard);
  picture.addEventListener("click", zoomImage); 
  return cardEl;
};

//публикуем карточку
const renderCard = (data, container) => {
  container.prepend(getCardEl(data));
};

//проходим по массиву
initialCards.forEach((data) => {
  renderCard(data, container);
});
