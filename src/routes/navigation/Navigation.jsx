import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';

const Navigation = () => {

    const {verifyToken, infoUser} = useContext(UserContext);
    
    useEffect(() => {
        verifyToken()
    }, [])    
    
    const {name, lastName} = infoUser;
   
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand as={NavLink} to='/' className="ms-3">
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="resposive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/products'>Productos</Nav.Link>
                        <Nav.Link as={NavLink} to='/checkout'>Checkout</Nav.Link>
                        <NavDropdown title={name +' '+lastName}>
                            <NavDropdown.Item as={NavLink} to='/user/profile'>Mi Perfil</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/user/profile'>Opciones</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>  

                    <Nav>
                    <Nav.Link className="me-3" as={NavLink} to='/auth'>Login</Nav.Link>
                    </Nav>                  
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation