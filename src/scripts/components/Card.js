export default class Card {
    constructor({ data, handleCardClick, cardSelector, userId, handleTrashBtnClick, handleSetLike, handleDelLike }) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
        this._cardId = data._id; 
        this._userId = userId;
        this._cardOwnerId = data.owner._id;
        this._likes = data.likes;
        this._handleTrashBtnClick = handleTrashBtnClick;
        this._handleSetLike = handleSetLike;
        this._handleDelLike = handleDelLike;

    }

_getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector).content
    .querySelector(".element").cloneNode(true)
    return cardElement;
}

prepareCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image')
    this._imageName = this._element.querySelector('.element__name')
    this._likeBtn = this._element.querySelector('.element__like-button');
    this._trashBtn =  this._element.querySelector('.element__trash-button');
    this._likesNumber = this._element.querySelector('.element__like-number');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._imageName.textContent = this._name;
    this._deletBtnVisible();
    this._cardIsLiked();
    this._likesNumber.textContent = this._likes.length;
    
    this._setEventListeners()

    return this._element;
}
        
removeCard = () => {
    this._element.remove();
    this._element = null;
        }

toggleLikeState = () => {
    if (this._likeBtn.classList.contains('element__like-button_active')) {
        this._handleDelLike(this._cardId);
    }
    else {
        this._handleSetLike(this._cardId)
    }}

handleLikeCard(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    this._likeBtn.classList.toggle('element__like-button_active');
          }

_cardIsLiked() {
    if (this._likes.some((user) => {
        return this._userId === user._id;
      })) {
        this._likeBtn.classList.add('element__like-button_active');
      }
}

_deletBtnVisible() {
    if (this._userId !== this._cardOwnerId) {
    this._trashBtn.remove()}

    }

_setEventListeners() {
    this._image.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    this._likeBtn.addEventListener('click', () => this.toggleLikeState());
    this._trashBtn.addEventListener('click', () => this._handleTrashBtnClick(this._cardId))
     }

}

