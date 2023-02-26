export default class Section {
    constructor ( { renderer }, containerSelector ) {
this._renderer = renderer;
this._container = containerSelector;
    }

renderElement(data) {
    data.forEach(item => this._renderer(item));
};

addItem(cardData) {
    this._container.prepend(cardData);     
}

addItemLastToFirst(cardData) {
    this._container.append(cardData); 
}

}