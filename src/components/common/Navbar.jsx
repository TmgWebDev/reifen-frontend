import './Navbar.css';
import * as bs from 'react-bootstrap';
import enFlag from './images/pngegg.png';
import Login from './Login.jsx';
import {useState} from 'react';

export default function Navbar(props){
    
    const [loginModalShow, setLoginModalShow] = useState(false);

    return <> 
    <Login modalShow={loginModalShow} setModalShow={(v) => setLoginModalShow(v)}/>
    <bs.Navbar variant='dark' bg='dark'>
        <bs.Container>
            <bs.Navbar.Brand href="#">Reifen Kleinanzeigen</bs.Navbar.Brand>
            <bs.FormControl type="search" placeholder="Search here"/>
            <bs.Nav className="me-auto">
                <bs.Nav.Link href="#" onClick={() => setLoginModalShow(true)}>Login</bs.Nav.Link>
                <bs.Nav.Link href="#sell">Sell</bs.Nav.Link>
                <bs.Nav.Link href="#lang" className="lang">
                    English
                </bs.Nav.Link>
            </bs.Nav>
        </bs.Container>
    </bs.Navbar>
    </>
}