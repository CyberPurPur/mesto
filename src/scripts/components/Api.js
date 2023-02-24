/*
добавить карточку (POST)
удалить карточку (DELETE)
“залайкать” карточку (PUT)
удалить лайк карточки (DELETE)
*/

import { data } from "autoprefixer";

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
        return fetch(`${this.baseUrl}/cards`, {
          headers: this.headers
        })
          .then(res => this._checkResponse(res));
      }
    
     getUserId() {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers
        })
      .then(res => this._checkResponse(res))
     }

     editUserInfo(data) {
     return fetch(`${this.baseUrl}/users/me`, {
     method: 'PATCH',
     headers: this.headers,
     body: JSON.stringify({
        name: data.userName,
        about: data.workName
     })
          })
    .then(res => this._checkResponse(res));
        }

      editUserAvatar(data) {
       return fetch(`${this.baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            avatar: data.avatar
        })
      })
      .then(res => this._checkResponse(res));  
    }

    postNewCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
    })
    .then(res => this._checkResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => this._checkResponse(res))
  }

  setLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(res => this._checkResponse(res))
  }

  discardLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, { 
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => this._checkResponse(res))
  }

}