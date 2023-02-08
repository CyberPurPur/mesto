(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function r(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}var o=function(){function e(t,n,o,i){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_handleLikeBtnClick",(function(){u._likeBtn.classList.toggle("element__like-button_active")})),r(this,"_handleDeleteBtnClick",(function(){u._element.remove(),u._element=null})),this._name=t,this._link=n,this._handleCardClick=o,this._cardSelector=i}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"prepareCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._imageName=this._element.querySelector(".element__name"),this._likeBtn=this._element.querySelector(".element__like-button"),this._trashBtn=this._element.querySelector(".element__trash-button"),this._image.src=this._link,this._image.alt=this._name,this._imageName.textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){return e._handleCardClick(e._link,e._name)})),this._likeBtn.addEventListener("click",(function(){return e._handleLikeBtnClick()})),this._trashBtn.addEventListener("click",(function(){return e._handleDeleteBtnClick()}))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}var s=c((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_showInputError",(function(e,t){var r=n._formElement.querySelector(".".concat(e.id,"-error"));r.textContent=t,r.classList.add(n._selectors.errorClass)})),l(this,"_hideInputError",(function(e){var t=n._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(n._selectors.inputErrorClass),t.textContent="",t.classList.remove(n._selectors.errorClass)})),l(this,"_checkValidity",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),l(this,"_hasInvalidInput",(function(){return n._inputList.some((function(e){return!e.validity.valid}))})),l(this,"_toggleButtonState",(function(){n._hasInvalidInput()?(n._buttonElement.setAttribute("disabled",!0),n._buttonElement.classList.add(n._selectors.inactiveButtonClass)):(n._buttonElement.removeAttribute("disabled",!0),n._buttonElement.classList.remove(n._selectors.inactiveButtonClass))})),l(this,"_setEventListeners",(function(){n._toggleButtonState(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkValidity(e),n._toggleButtonState()}))})),n._formElement.addEventListener("submit",(function(e){return e.preventDefault()}))})),l(this,"enableValidation",(function(){n._setEventListeners()})),l(this,"resetValidation",(function(){n._inputList.forEach((function(e){n._hideInputError(e)})),n._toggleButtonState()})),this._selectors=t,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector)),this._buttonElement=this._formElement.querySelector(this._selectors.submitButtonSelector)})),f=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_picture"),m=(document.querySelectorAll(".popup"),document.querySelectorAll(".button_open-popup"),document.querySelector(".profile__edit-button")),b=document.querySelector(".profile__add-button"),v=(f.querySelector(".form__input_type_name"),f.querySelector(".form__input_type_work"),p.querySelector(".form__input_type_placename"),p.querySelector(".form__input_type_placelink"),f.querySelector(".profile-data"),p.querySelector(".place-data"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".elements")),_=(y.querySelector(".popup__image"),y.querySelector(".popup__image-caption"),document.querySelector(".profile__avatar"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input-error",errorClass:"form__input-error_active"});function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var S=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._container=r}var t,r;return t=e,(r=[{key:"renderElement",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closePopupByEsc=this._handleEscClose.bind(this),this._closeBtn=this._popup.querySelector(".popup__close-button"),this._closeByOverlayClick=this._handleOverlayClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){document.addEventListener("keydown",this._closePopupByEsc),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._closePopupByEsc),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",this._closeByOverlayClick),this._closeBtn.addEventListener("click",(function(){e.close()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=P(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function q(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(".form"),r._submitBtn=r._form.querySelector(".form__submit-button"),r._inputList=r._form.querySelectorAll(".form__input"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;O(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){this._form.reset(),O(L(u.prototype),"close",this).call(this)}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=A(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function x(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(n);if(o){var r=U(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._zoomImg=t._popup.querySelector(".popup__image"),t._zoomAlt=t._popup.querySelector(".popup__image-caption"),t}return t=u,(r=[{key:"open",value:function(e,t){this._zoomImg.src=e,this._zoomAlt.textContent=t,this._zoomImg.alt=t,R(U(u.prototype),"open",this).call(this)}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}var F=function(){function e(t){var r=t.userName,n=t.workName,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._work=document.querySelector(n),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._name.textContent,workName:this._work.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.userName,this._work.textContent=e.workName,this._avatar.src=e.avatar}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,r;return t=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserId",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}])&&$(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"a22c0890-1d02-4995-b901-399b42cddbef","Content-Type":"application/json"}});Promise.all([H.getInitialCards(),H.getUserId()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],l=!0,a=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];K.setUserInfo(i),userId=i._id,Z.renderElement(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var J=new I(".popup_type_edit",(function(e){K.setUserInfo({userName:e.userName,workName:e.workName}),J.close()}));J.setEventListeners();var K=new F({userName:".profile__name",workName:".profile__description",avatar:".profile__avatar"}),Q=new V(".popup_type_picture"),W=function(e,t){Q.open(e,t)},X=new I(".popup_type_new-card",(function(e){Z.addItem(Y({name:e.name,link:e.link})),X.close()}));X.setEventListeners();var Y=function(e){return new o(e.name,e.link,W,".img-template").prepareCard()},Z=new S({renderer:function(e){Z.addItem(Y(e))}},v),ee=new s(_,f);ee.enableValidation();var te=new s(_,p);te.enableValidation(),m.addEventListener("click",(function(){J.setInputValues(K.getUserInfo()),ee.resetValidation(),J.open()})),b.addEventListener("click",(function(){te.resetValidation(),X.open()}))})();