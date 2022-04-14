import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {HOME_PAGE, LOGIN_ROUTE, MESSENGER,USER_LIST} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate  = useNavigate ()



    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={HOME_PAGE}>Home</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            
                            Logout
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(USER_LIST)}
                        >
                            User list
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(MESSENGER)}
                        >
                            Messenger
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
