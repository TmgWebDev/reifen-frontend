import * as bs from 'react-bootstrap';
import {useState} from 'react';
import { useRef } from 'react';
import { auth } from '../../lib/firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../lib/firebase/AuthContext';

export default function Register(props){

    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');

    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState(' ');

    const signUp = async () => {
        try{
            await auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );
            props.setModalShow(false);
        }
        catch (e){
            switch(e.code) {
                case 'auth/email-already-in-use':
                    setAlertContent('Email already in use');
                    break;
                case 'auth/invalid-email':
                    setAlertContent('Invalid email');
                    break;
                case 'auth/weak-password':
                    setAlertContent('Weak password');
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

    const handleRegisterModalHide = (e) => {
        props.setModalShow(false);
        setShowAlert(false);
    }

    return <>
        <bs.Modal show={props.modalShow} onHide={handleRegisterModalHide}>

        <bs.Modal.Header closeButton>
            <bs.Modal.Title>Register</bs.Modal.Title>
        </bs.Modal.Header>

        <bs.Modal.Body>
            <bs.Form>

                 <bs.Form.Group className="mb-3" controlId="formName">
                    <bs.Form.Label>Full Name</bs.Form.Label>
                    <bs.Form.Control type="text" placeholder="Name Surname" />
                </bs.Form.Group>   

                <bs.Form.Group className="mb-3" controlId="formUsername">
                    <bs.Form.Label>Username</bs.Form.Label>
                    <bs.Form.Control type="text" placeholder="yourusername" />
                </bs.Form.Group>

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
            </bs.Form.Group>
        </bs.Modal.Body>
        
        <bs.Modal.Footer>
            <bs.Button variant="dark" type="submit" onClick={signUp}>
                Register
            </bs.Button>
        </bs.Modal.Footer>

        </bs.Modal>

    </>;
}