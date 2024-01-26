import React, { useState } from 'react';
import { ProductCard, PartsPrice, Buttons, ButtonsContainer, ButtonsProducts, ModalWrapper, BtnModalContainer, BtnModal } from "./ProductsStyles";
import { useDispatch, useSelector } from "react-redux";

import { AiFillCreditCard } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { addToCart, toggleHiddenCart } from '../../redux/cart/cartSlice';
import { AnimatePresence } from 'framer-motion';

const Product = ({ img, nombre, precio, id }) => {
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddToCartConfirmation = () => {
    dispatch(addToCart({ img, nombre, precio, id }));
    dispatch(toggleHiddenCart());
    setIsModalOpen(false);
  }

  return (
    <>
      <ProductCard>
        <img src={img} alt="" />
        <p>{nombre}</p>
        <h3>${precio}</h3>
        <PartsPrice>
          <AiFillCreditCard />
          Hasta 6 cuotas sin interés
        </PartsPrice>
        <ButtonsContainer>
          <ButtonsProducts onClick={handleAddToCart}>
            <BsBagFill /> Comprar
          </ButtonsProducts>
          <ButtonsProducts>
            <AiFillEye /> Ver mas
          </ButtonsProducts>
        </ButtonsContainer>
      </ProductCard>

    <AnimatePresence>
    {isModalOpen && (
        <ModalWrapper
        initial={{ translateY: 100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: 100 }}
        transition={{ type: "spring", damping: 20 }}
        key="add-modal"
        >
            <p>¿Quieres añadir este producto al carrito?</p>
            <BtnModalContainer>
                <BtnModal onClick={handleAddToCartConfirmation}>
                    Añadir
                </BtnModal>
                <BtnModal onClick={handleModalClose}>
                    Cancelar
                </BtnModal>
            </BtnModalContainer>
        </ModalWrapper>
    )}
    </AnimatePresence>
    </>
)
}

export default Product;
