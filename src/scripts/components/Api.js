/*
получить список всех карточек в виде массива (GET)
добавить карточку (POST)
удалить карточку (DELETE)
получить данные пользователя (GET)
заменить данные пользователя (PATCH)
заменить аватар (PATCH)
“залайкать” карточку (PUT)
удалить лайк карточки (DELETE)
*/

export default class Api {
    constructor(data) {
      this.baseUrl = data.baseUrl;
      this.headers = data.headers;
    }
 
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`${res.status}`)
      }
    
    getInitialCards() {
        return fetch(this.baseUrl + '/cards', {
          headers: {
            authorization: 'a22c0890-1d02-4995-b901-399b42cddbef',
            'Content-Type': 'application/json'
          }
        })
          .then(res => this._checkResponse(res));
      }

     getUserId() {
      return fetch(this.baseUrl + '/users/me', {
          headers: {
            authorization: 'a22c0890-1d02-4995-b901-399b42cddbef',
            'Content-Type': 'application/json'
          }
        })
      .then(res => this._checkResponse(res))
     }

    }