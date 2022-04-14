import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Container,Table} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { deliteUser, updateUser } from '../http/userAPI';
import {FormCheck} from "react-bootstrap";
import { HOME_PAGE } from '../utils/consts';


const ListUsers = observer(() => {
    const navigate = useNavigate ()
    const {users} = useContext(Context)
    let massiv=[]   
    const heandlChenge=(e)=>(
        massiv.includes(e.target.id)?
        massiv.splice(massiv.indexOf(e.target.id),massiv.indexOf(e.target.id)+1)
        :
        massiv.push(e.target.id)
        ,
        console.log(massiv)
      );
      
    const del = async () => {
        try {
            let data = await deliteUser(massiv);
            navigate(HOME_PAGE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const update = async () => {
        try {
            let data = await updateUser(massiv);
            navigate(HOME_PAGE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
return(
    <Container
            className="d-flex justify-content-center"
            style={{height: window.innerHeight - 54}}
        >
               
        <Table className="table table-bordered table-hover mt-2">
            <thead className="thead-dark">
            <tr>
                <th><Button onClick={() => del()}>delite</Button></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><Button onClick={() => update()}>active</Button></th>
            </tr>
            <tr>
                <th width="10%">#</th>
                <th width="10%">id</th>
                <th>Login</th>
                <th>Email</th>
                <th>Role</th>
                <th width="10%">active</th>
            </tr>
            </thead>
            <tbody className="table-light">
            
           {users._users.map(({id,email,login,role,active}) =>(
               <tr key={id}>
               <td>
                   <FormCheck
                   type='checkbox'
                   id={id}
                   onChange={heandlChenge} 
               /></td>
               <td>{id}</td>
               <td>{login}</td>
               <td>{email}</td>
               <td>{role}</td>
               <td>{isActive(active)}</td>
           </tr>
           ))}
            
            </tbody>
        </Table>
        </Container>
);
    
});

function isActive(active){
    let str;
    active? str="true":str="false"
    return str;
}

export default ListUsers;


