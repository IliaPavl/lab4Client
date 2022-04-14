import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { useEffect } from 'react';
import { fetchUsers } from '../http/userAPI';
import ListUsers from '../components/ListUsers';
import { useState } from 'react';

const UserListPage = observer(() => {

    const {users} = useContext(Context)
    let massive=[]
    const[list,setList] =useState([])
    useEffect(()=>{
        fetchUsers().then(data =>users.setUsers(data))
        },[])

        useEffect(()=>{
            fetchUsers().then(data =>setList(data))
        },[users])

    console.log(list)
        
    return(
        <ListUsers list={massive}/>
    );
    
});
export default UserListPage;


