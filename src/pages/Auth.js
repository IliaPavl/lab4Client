import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_PAGE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate ()
    const isLogin = location.pathname === LOGIN_ROUTE
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginField, setLogin] =useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, loginField);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(HOME_PAGE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center mt-5"
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Login' : "Registration"}</h2>
                <Form className="d-flex flex-column">
                {isLogin ? <div></div>:
                    <Form.Control
                    className="mt-3"
                    placeholder="Enter your name..."
                    value={loginField}
                    onChange={e => setLogin(e.target.value)}
                    />
                    }
                   
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                             <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Login' : 'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
