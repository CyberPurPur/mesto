export default class Popup {
    constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupByEsc = this._handleEscClose.bind(this);
    this._closeBtn = this._popup.querySelector('.popup__close-button');
    this._closeByOverlayClick = this._handleOverlayClose.bind(this);

    }

    open() {
        
        this._popup.classList.add("popup_opened");
   
    }

    close() {
       
        this._popup.classList.remove("popup_opened");
        
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
        this.close()
    }}

    _handleOverlayClose(event) {
        if (event.target === event.currentTarget) {
        this.close()
    }}

    

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._closeByOverlayClick);
        document.addEventListener('keydown', this._closePopupByEsc);
        this._closeBtn.addEventListener('click', () => {this.close()});
}

    deleteEventListeners() {
        this._closeBtn.removeEventListener('click', this.close);
        this._popup.removeEventListener('mousedown', this._closeByOverlayClick);
        document.removeEventListener('keydown', this._closePopupByEsc);
        
    }

}
