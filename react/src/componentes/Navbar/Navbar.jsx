import React, { useContext } from 'react'
import  { NavbarContainer, NavbarTop, NavbarCenter, IconDesktopContainer, Menuicon, ButtonMenu, MenuLinksContainer, NavLinkStyled, ModalOverlayMainStyled } from './NavbarStyles'
import ModalCart from "./ModalCart/ModalCart"

import {FaUser} from "react-icons/fa"
import {BsFillHandbagFill} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import Logo from "../../imgs/logos/logo-copa-white.png"
import { Context } from '../../context/Context'
import { useDispatch, useSelector } from 'react-redux'

import {toggleHiddenCart} from "../../redux/cart/cartSlice"
import { AnimatePresence } from 'framer-motion'



const Navbar = () => {

    const {isMenuOpen, setIsMenuOpen}  = useContext(Context);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const dispatch = useDispatch();
    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    
    return (
        <>
                <NavbarContainer>
            <NavbarTop>
                <p>
                    20% DE DESCUENTO ABONANDO EN EFECTIVO O TRANSFERENCIA - ENVÍOS GRATIS EN CÓRDOBA CAPITAL
                </p>
            </NavbarTop>
            <NavbarCenter>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li> <NavLinkStyled to="/"> Inicio </NavLinkStyled>  </li>
                    <li> <NavLinkStyled to="/products"> Productos </NavLinkStyled> </li>
                    <li> <NavLinkStyled to="/about"> Sobre Nosotros </NavLinkStyled> </li>
                    <li> <NavLinkStyled to="/contact"> Contacto </NavLinkStyled> </li>
                </ul>

                <IconDesktopContainer>
                    <FaUser></FaUser>
                    <div className='cart-icon-container'>
                        <BsFillHandbagFill onClick={() => dispatch(toggleHiddenCart())}/>
                        <p>{totalCartItems}</p>
                    </div>

                </IconDesktopContainer>

            <Menuicon>
                <div className='cart-icon-container'>
                        <BsFillHandbagFill onClick={() => dispatch(toggleHiddenCart())}/>
                        <p>{totalCartItems}</p>
                </div>

                <ButtonMenu onClick={toggleMenu}>
                    <FiMenu style={{ color: isMenuOpen ? 'var(--blue)' : 'var(--white)' }}/>
                </ButtonMenu>
            </Menuicon>
            
            </NavbarCenter>

            {
                isMenuOpen && (
                    <ModalOverlayMainStyled
                        onClick={toggleMenu}
                    />
                )
            }

            <AnimatePresence>
                <MenuLinksContainer style={{ display: isMenuOpen ? 'flex' : 'none' }}
                initial={{ translateX: 1000 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: 1000 }}
                transition={{ type: "spring", damping: 27 }}
                key="menu-modal"
                >
                    <FaUser/>

                    <NavLinkStyled to="/"> Inicio </NavLinkStyled>
                    <NavLinkStyled to="/products"> Productos </NavLinkStyled>
                    <NavLinkStyled to="/about"> Sobre Nosotros </NavLinkStyled>
                    <NavLinkStyled to="/contact"> Contacto </NavLinkStyled>

                </MenuLinksContainer>
            </AnimatePresence>

            <ModalCart/>
        </NavbarContainer>
        </>

    )
}

export default Navbar