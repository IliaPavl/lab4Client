import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, login) => {
    const {data} = await $host.post('api/user/registration', {email, password, login, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const updateUser = async (id) => {
    const {data} = await $authHost.post('api/user/updateActive', {id} )
    return data
}

export const deliteUser = async (id) => {
    const {data} = await $authHost.post('api/user/delite', {id} )
    return data
}

export const fetchUsers = async () => {
    const {data} = await $host.get('api/user/userList')
    return data
}
