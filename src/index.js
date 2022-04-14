import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserListClass from './store/UserListClass';
import UserStore from "./store/UserStore";
import CheakList from "./store/CheakList";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        users: new UserListClass(),
        cheakList: new CheakList(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

