export default class UserInfo {
    constructor( {userName, workName} ){
        this._name = document.querySelector(userName);
        this._work = document.querySelector(workName);
     }

    getUserInfo () {
        const userInfo = {
            userName: this._name.textContent,
            workName: this._work.textContent
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.userName;
        this._work.textContent = data.workName; // textContent не может из strig, а без него не постит
        
    }
}