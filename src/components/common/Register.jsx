import * as bs from 'react-bootstrap';
import {useState} from 'react';
import { useRef } from 'react';
import { auth } from '../../lib/firebase/config';
import { useContext } from 'react';
import { AuthContext } from '../../lib/firebase/AuthContext';

export default function Register(props){

    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');

    const signUp = async () => {
        try{
            await auth.createUserWithEmailAndPassword(
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
        <bs.Modal show={props.modalShow} onHide={props.setModalShow}>

        <bs.Modal.Header closeButton>
            <bs.Modal.Title>Register</bs.Modal.Title>
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
        </bs.Modal.Body>
        
        <bs.Modal.Footer>
            <bs.Button variant="dark" type="submit" onClick={signUp}>
                Register
            </bs.Button>
        </bs.Modal.Footer>

        </bs.Modal>

    </>;
}