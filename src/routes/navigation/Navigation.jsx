import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import CartContext from '../../context/cart/CartContext';
import CartIcon from '../../components/cartModal/cartIcon/CartIcon';
import CartDropDown from '../../components/cartModal/cartDropDown/CartDropDown';
import SickBangers from '../../assets/images/sickbanger.png';
const Navigation = () => {

    const {infoUser, signOut, authStatus} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const {name, lastName} = infoUser;
   
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand as={NavLink} to='/' className="ms-3">
                    <img src={SickBangers} alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="resposive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/products'>Productos</Nav.Link>
                        <Nav.Link as={NavLink} to='/checkout'>Checkout</Nav.Link>
                        {authStatus && 
                            <NavDropdown title={name +' '+ lastName }> {/*Mi opcion <NavDropdown title={name +' '+lastName}> */}
                                <NavDropdown.Item as={NavLink} to='/user/profile'>Mi Perfil</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/user/profile'>Opciones</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>  

                    <Nav>
                    {authStatus ? <Button onClick={signOut} className='me-3'>Logout</Button>: <Nav.Link className="me-3" as={NavLink} to='/auth'>Login</Nav.Link>}
                    <CartIcon/>
                    {isCartOpen && <CartDropDown />}
                    </Nav>                  
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation