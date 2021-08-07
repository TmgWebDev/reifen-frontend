import './Login.css';
import { useState } from 'react';
import * as bs from 'react-bootstrap';
import { useRef } from 'react';
import { auth } from '../../lib/firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../lib/firebase/AuthContext';
import Register from './Register.jsx';


export default function Login(props){

    const [registerModalShow, setRegisterModalShow] = useState(false);

    const user = useContext(AuthContext);
    

    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');
    
    const signIn = async () => {
        try{
            await auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );
            props.setModalShow(false);
        }
        catch (e){
            console.log(e);
        }
    }


    return <>
        <Register modalShow={registerModalShow} setModalShow={(v) => setRegisterModalShow(v)}/>

        <bs.Modal show={props.modalShow} onHide={props.setModalShow}>

        <bs.Modal.Header closeButton>
            <bs.Modal.Title>Login</bs.Modal.Title>
        </bs.Modal.Header>

        <bs.Modal.Body>
            <bs.Form>
                <bs.Form.Group className="mb-3" controlId="formEmail">
                    <bs.Form.Label>Email</bs.Form.Label>
                    <bs.Form.Control ref={emailRef} type="email" placeholder="email@example.com" />
                </bs.Form.Group>

                <bs.Form.Group className="mb-3" controlId="formPassword">
                    <bs.Form.Label>Password</bs.Form.Label>
                    <bs.Form.Control ref={passwordRef} type="password" placeholder="Enter your Password" />
                </bs.Form.Group>
            </bs.Form>
            <bs.Form.Group className="text-center">
                <bs.Form.Text>
                    Don't have an account?
                </bs.Form.Text>
                <div id="register-row">
                    <bs.Nav.Link href="#register" id="register-button" onClick={() => {props.setModalShow(false);setRegisterModalShow(true);}}>
                        Register
                    </bs.Nav.Link>  
                </div>
            </bs.Form.Group>
        </bs.Modal.Body>
        
        <bs.Modal.Footer>
            <bs.Button variant="dark" type="submit" onClick={signIn}>
                Login
            </bs.Button>
        </bs.Modal.Footer>

        </bs.Modal>
    </>;
}
