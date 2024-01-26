import styled, { css } from "styled-components";
import {motion} from "framer-motion"


export const CartWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--red);
    width: 40%;
    height: 100%;
    color: white;
    z-index: 300;
    top: 0;
    position: fixed;
    padding: 20px;
    overflow-y: scroll;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const IconClose = styled.div`
    position: absolute;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
`

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--red);
    width: 100%;
`

export const CartTop = styled.div`
    padding: 50px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const UnderLine = styled.span`
    margin: 20px;
    height: 1px;
    color: white;
    width: 90%;
    background-color: white;
`

export const CartMid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const CartProductContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    color: var(--blue);
    width: 90%;
    gap: 30px;

    img {
        width: 40%;
    }

    span {
        font-size: 20px;
    }
`

export const CartProductItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;

    h4 {
        font-size: 20px;
    }
`

export const CartQuantity = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        font-weight: 700;
        font-size: 20;
    }

    svg {
        font-size: 25px;
        color: var(--red);
        cursor: pointer;
    }
`

export const SubTotalPrice = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    width: 90%;
`

export const BtnBuy = styled.button`
    width: 100%;
    border: none;
    color: white;
    background-color: var(--blue);
    padding: 10px 15px;
    font-weight: 600;

    &:hover {
        transition: all .1s ease-in;
        background-color: transparent;
        border: 1px solid var(--white);
    }

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            opacity: 0.5; /* Puedes ajustar la opacidad según tus preferencias */
        `
    }
`

export const BtnEmpyCart = styled.button`
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    width: 100%;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    padding: 10px 15px;
    font-weight: 600;

    &:hover {
        transition: all .1s ease-in;
        background-color: var(--blue);
        border: 1px solid var(--blue);
    }

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            opacity: 0.5;
        `
    }
`
export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: calc(100vw);
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
        css`
        backdrop-filter: blur(2px);
        `}
`;

export const CartModalWrapper = styled(motion.div)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--red);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    z-index: 101;
    p {
        color: white;
        font-weight: 500;
    }
`
export const BtnModaCartlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const BtnModalCart = styled.button`
    background: var(--blue);
    border: 1px solid var(--blue);
    color: white;
    padding: 6px 0px;
    width: 110px;
    cursor: pointer;
    
    &:hover {
        background-color: transparent;
        border: 1px solid var(--blue);
    }
`