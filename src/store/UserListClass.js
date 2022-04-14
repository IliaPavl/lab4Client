import {makeAutoObservable} from "mobx";
export default class UserListClass {
    constructor() {
        this._users = []
        this._userUpdate = false;
        makeAutoObservable(this)
    }

    setUserUpdate(){
        if(this._userUpdate)
        this._userUpdate = false;
        else this._userUpdate = true;
    }

    getUserUpdate(){
        return this._userUpdate;
    }

    setUsers(users) {
        this._users = users
    }
    
    getUsers(){
        return this._users;
    }

    
}