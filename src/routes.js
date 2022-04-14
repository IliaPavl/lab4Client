import {HOME_PAGE, LOGIN_ROUTE, MESSENGER, REGISTRATION_ROUTE, USER_LIST} from "./utils/consts";
import Auth from "./pages/Auth";
import UsersList from "./pages/UserListPage";
import Messenger from "./pages/Messenger";
import HomePage from "./pages/HomePage";

export const authRoutes = [
    {
        path: USER_LIST,
        Component: UsersList
    },
    {
        path: MESSENGER,
        Component: Messenger
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_PAGE,
        Component: HomePage
    },
]
