export default class Section {
    constructor ( {items, renderer}, containerSelector ) {
this._items = items;
this._renderer = renderer;
this._container = containerSelector;
    }

renderElement() {
    this._items.forEach(item => this._renderer(item));
};

addItem(cardData) {
    this._container.prepend(cardData);     
}
}