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
    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState(' ');
    const user = useContext(AuthContext);
    

    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');
    
    const signIn = async () => {
        try{
            await auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );
            setShowAlert(false);
            props.setModalShow(false);
        }
        catch (e){
            switch(e.code) {
                case 'auth/user-not-found':
                    setAlertContent('User not found');
                    break;
                case 'auth/user-disabled':
                    setAlertContent('User not found');
                    break;
                case 'auth/invalid-email':
                    setAlertContent('Invalid Email');
                    break;
                case 'auth/wrong-password':
                    setAlertContent('Wrong email/password');
                    break;
                default:
                    setAlertContent('Error');
            }
            setShowAlert(true);
        }
    }

    const handleEmailChange = (e) => {
        setShowAlert(false);
    }

    const handleLoginModalHide = (e) => {
        props.setModalShow(false);
        setShowAlert(false);
    }

    return <>
        <Register modalShow={registerModalShow} setModalShow={(v) => setRegisterModalShow(v)}/>

        <bs.Modal show={props.modalShow} onHide={handleLoginModalHide}>

        <bs.Modal.Header closeButton>
            <bs.Modal.Title>Login</bs.Modal.Title>
        </bs.Modal.Header>

        <bs.Modal.Body>
            <bs.Form>
                <bs.Form.Group className="mb-3" controlId="formEmail">
                    <bs.Form.Label>Email</bs.Form.Label>
                    <bs.Form.Control ref={emailRef} type="email" placeholder="email@example.com" onChange={handleEmailChange}/>
                </bs.Form.Group>

                <bs.Form.Group className="mb-3" controlId="formPassword">
                    <bs.Form.Label>Password</bs.Form.Label>
                    <bs.Form.Control ref={passwordRef} type="password" placeholder="Enter your Password" />
                </bs.Form.Group>
            </bs.Form>
            <bs.Form.Group className="text-center">
                {showAlert && <bs.Alert variant='danger'>{alertContent}</bs.Alert>}
                <bs.Form.Text id="error" className="m-auto">
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
