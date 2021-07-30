import './Navbar.css';
import * as bs from 'react-bootstrap';
import enFlag from './images/pngegg.png';

export default function Navbar(props){

    return <bs.Navbar variant='dark' bg='dark'>
        <bs.Container>
            <bs.Navbar.Brand href="#" c>Reifen Kleinanzeigen</bs.Navbar.Brand>
            <bs.FormControl type="search" placeholder="Search here"/>
            <bs.Nav className="me-auto">
                <bs.Nav.Link href="#login">Login</bs.Nav.Link>
                <bs.Nav.Link href="#register">Register</bs.Nav.Link>
                <bs.Nav.Link href="#sell">Sell</bs.Nav.Link>
                <bs.Nav.Link href="#lang" className="lang">
                    English
                </bs.Nav.Link>
            </bs.Nav>
        </bs.Container>
    </bs.Navbar>
}