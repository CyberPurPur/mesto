export default class Card {
    constructor(name, link, zoomImage) {
        this._name = name;
        this._link = link;
        this._zoomImage = zoomImage;  
    }

_getTemplate() {
    const cardElement = document
    .querySelector(".img_template").content
    .querySelector(".element").cloneNode(true)
    return cardElement;
}

prepareCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image')
    this._imageName = this._element.querySelector('.element__name')
    this._likeBtn = this._element.querySelector('.element__like-button');
    this._trashBtn =  this._element.querySelector('.element__trash-button');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._imageName.textContent = this._name;

    this._setEventListeners()
    return this._element;
}

_handleLikeBtnClick = () => {
    this._likeBtn.classList.toggle('element__like-button_active');
    }
        
_handleDeleteBtnClick = () => {
    this._element.remove();
    this._element = null;
        }

_setEventListeners() {
    this._image.addEventListener('click', () => this._zoomImage(this._link, this._name));
    this._likeBtn.addEventListener('click', () => this._handleLikeBtnClick());
    this._trashBtn.addEventListener('click', () => this._handleDeleteBtnClick())
     }

}

