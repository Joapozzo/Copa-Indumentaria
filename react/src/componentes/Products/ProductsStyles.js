import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ProductsWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    max-width: 1300px;
    width: 100%;
    padding: 0 20px 60px;
    gap: 50px;
`
export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    row-gap: 80px;
`
export const ProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 290px;
    gap: 15px;

    img {
        object-fit: cover;
        height: 350px;
        width: 100%;
        position: relative;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 800;
        font-size: 16px;
    }

`
export const PartsPrice = styled.div `
    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--red);
    font-weight: 700;
    font-size: 12px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    a:hover {
        background-color: var(--blue);
        color: white;
        transition: all .2s ease-in;
    }
`

export const ButtonsMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 70%;
        gap: 15px;
    }  

    a:hover {
        border: none;
        background-color: var(--red);
        color: white;
        transition: all .2s ease-in;
    }
`

export const Buttons = styled.a `
    background-color: transparent;
    padding: 8px 15px;
    border: 1px solid var(--blue);
    width: 50%;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: var(--blue);
    position: relative;
    display: ${({ disabled }) => (disabled ? 'block' : 'none')};
    overflow: hidden;
    cursor: pointer;
`
export const ButtonsProducts = styled.a `
    background-color: transparent;
    padding: 8px 15px;
    border: 1px solid var(--blue);
    width: 50%;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: var(--blue);
    position: relative;
    display: block;
    overflow: hidden;
    cursor: pointer;
`
export const ModalWrapper = styled(motion.div)`
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
export const BtnModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const BtnModal = styled.button`
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