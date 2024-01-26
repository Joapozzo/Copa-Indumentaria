import React, { useState } from 'react';
import {
  CartTop,
  CartWrapper,
  CartContainer,
  CartMid,
  IconClose,
  UnderLine,
  SubTotalPrice,
  BtnContainer,
  BtnBuy,
  BtnEmpyCart,
  ModalOverlayStyled,
  CartModalWrapper,
  BtnModaCartlContainer,
  BtnModalCart,
} from "./ModalCartStyles";
import CartProduct from "./CartProduct";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from 'framer-motion';

const ModalCart = () => {
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const cartList = useSelector((state) => state.cart.cartItems);
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  // Precios
  const subTotalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.quantity + shippingCost);
  }, 0);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPurpose, setModalPurpose] = useState(null);

  const handleModalOpen = (purpose) => {
    setIsModalOpen(true);
    setModalPurpose(purpose);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirmation = () => {
    if (modalPurpose === "finishBuy") {
      // Finalizar la compra
      dispatch(clearCart());
      setIsModalOpen(false);
    } else if (modalPurpose === "emptyCart") {
      // Vaciar el carrito
      dispatch(clearCart());
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <CartWrapper
            initial={{ translateX: 400 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <IconClose onClick={() => dispatch(toggleHiddenCart())}>
              <AiFillCloseSquare />
            </IconClose>
            <CartContainer>
              <CartTop>
                <h2>Tus Productos</h2>
                <UnderLine />
              </CartTop>
              <CartMid>
                {cartList && cartList.length > 0 ? (
                  cartList.map((item) => {
                    return <CartProduct key={item.id} {...item} />;
                  })
                ) : (
                  <p>No hay productos en el carrito</p>
                )}
              </CartMid>
              <UnderLine />
              <SubTotalPrice>
                <h3>SUBTOTAL</h3>
                <h4>${subTotalPrice}</h4>
              </SubTotalPrice>
              <SubTotalPrice>
                <p>Envío</p>
                <h4>${shippingCost}</h4>
              </SubTotalPrice>
              <UnderLine />
              <SubTotalPrice>
                <h3>TOTAL</h3>
                <h4>${totalPrice}</h4>
              </SubTotalPrice>
              <BtnContainer>
                <BtnBuy onClick={() => handleModalOpen("finishBuy")} disabled={!cartItems.length}>
                  COMPRAR
                </BtnBuy>
                <BtnEmpyCart onClick={() => handleModalOpen("emptyCart")} disabled={!cartItems.length}>
                  VACIAR CARRITO <BsTrash3Fill />
                </BtnEmpyCart>
              </BtnContainer>
            </CartContainer>

            {isModalOpen && (
              <CartModalWrapper
                initial={{ translateY: 100 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: 100 }}
                transition={{ type: "spring", damping: 20 }}
                key="add-modal-cart"
              >
                {modalPurpose === "finishBuy" ? (
                  <p>¿Quieres finalizar la compra?</p>
                ) : modalPurpose === "emptyCart" ? (
                  <p>¿Quieres vaciar el carrito?</p>
                ) : null}

                <BtnModaCartlContainer>
                  <BtnModalCart onClick={handleModalConfirmation}>Confirmar</BtnModalCart>
                  <BtnModalCart onClick={handleModalClose}>Cancelar</BtnModalCart>
                </BtnModaCartlContainer>
              </CartModalWrapper>
            )}
          </CartWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
