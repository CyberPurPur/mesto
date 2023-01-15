import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    this._zoomImg = this._popup.querySelector('.popup__image');
    this._zoomAlt = this._popup.querySelector('.popup__image-caption');
    
    }

    open(link, name) {
        this._zoomImg.src = link;
        this._zoomAlt.textContent = name;
        this._zoomImg.alt = name;
        super.open();

      }

    
}

