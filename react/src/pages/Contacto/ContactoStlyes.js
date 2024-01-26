import { styled } from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
import {motion} from "framer-motion"


export const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 80px;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    color: var(--white);
    /* height: 100vh; */
    width: 100%;
    gap: 60px;
`;

export const Formik = styled(FormikContainer)`
    display: flex;
    flex-direction: column;
`

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    input {
        width: 30%;
        padding: 8px 10px;
        background-color: transparent;
        border: 1px solid var(--red);
        color: white;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    button {
        width: 30%;
        padding: 10px;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    button:hover {
        transition: all .2s ease-in-out;
        background-color: transparent;
        border: 1px solid var(--red);
        color: white;
    }
`

export const ContactModalWrapper = styled(motion.div)`
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
export const BtnModalContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const BtnModalContact = styled.button`
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