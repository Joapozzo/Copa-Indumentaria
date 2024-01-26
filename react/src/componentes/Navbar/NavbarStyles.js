import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export const NavLinkStyled = styled(NavLink)`
    color: white;
`;

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: end;
    flex-direction: column;
    height: 100px;
    width: 100%;
    top: 0;
    position: sticky;
    z-index: 102;
`;

export const NavbarTop = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    z-index: 60;
    p {
        font-size: 12px;
        color: var(--white);
    }

    @media (max-width: 768px) {
            p {
                font-size: 10px;
            }
        }    
`;

export const NavbarCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--red);
    width: 100%;
    height: 80px;
    padding: 30px 50px;
    z-index: 20;

    img {
        height: 40px;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 35px;
        text-align: center;
        color: white;
        font-weight: 500;
        text-transform: uppercase;

        @media (max-width: 768px) {
            display: none;
        }
    }

    li {
        cursor: pointer;
    }

    li:hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }

`;

export const IconDesktopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--white);
    gap: 15px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }

    :hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }

    .cart-icon-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .cart-icon-container p {
        position: absolute;
        top: -9px;
        right: -8px;
        background: var(--blue);
        border-radius: 50%;
        padding: 1px 5px;
        color: var(--white);
        font-size: 11px;
    }
`;

export const Menuicon = styled(IconDesktopContainer)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ButtonMenu = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 23px;
    color: var(--white);
    
    :hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }
`;

export const MenuLinksContainer = styled(motion.div)`
@media (max-width: 768px) {
        display: none;
        align-items: end;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        color: white;
        background-color: var(--red);
        width: 50%;
        height: 100vh;
        z-index: 100;
        position: fixed;
        top: 120px;


        a {
            font-size: 18px;
        }

        a:hover {
            color: var(--blue);
            transition: all .2s ease-in-out;
        }

    }    
`

export const ModalOverlayMainStyled = styled(motion.div)`
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: calc(100vw);
        height: 100vh;

        ${({ isHidden }) =>
            !isHidden &&
            css`
            backdrop-filter: blur(2px);
            `}
    }
`;

