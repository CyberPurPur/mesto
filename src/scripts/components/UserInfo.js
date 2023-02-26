export default class UserInfo {
    constructor( {userName, workName, avatar} ){
        this._name = document.querySelector(userName);
        this._work = document.querySelector(workName);
        this._avatar = document.querySelector(avatar)

     }

    getUserInfo () {
        const userInfo = {
            userName: this._name.textContent,
            workName: this._work.textContent,
            avatar: this._avatar.src
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._work.textContent = data.about;
       // this._avatar.src = data.avatar; 
        
    }
    setNewAvatar(data) {
     this._avatar.src = data.avatar;
    }
}