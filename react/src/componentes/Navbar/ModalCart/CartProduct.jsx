import React, { useState } from 'react'
import { CartProductContainer, CartProductItems, CartQuantity, CartModalWrapper, BtnModaCartlContainer, BtnModalCart } from "./ModalCartStyles"
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"
import {BsTrash3Fill} from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { addToCart, clearCart, removeFromCart, removeTotalItem } from '../../../redux/cart/cartSlice'
import { AnimatePresence } from 'framer-motion'

const CartProduct = ({id, img, nombre, precio, quantity}) => {
const dispatch = useDispatch()

const [isModalOpen, setIsModalOpen] = useState(false)

const handleDeleteToCart = () => {
  setIsModalOpen(true)
}

const handleModalClose = () => {
  setIsModalOpen(false)
}

const handleDeleteToCartConfirmation = () => {
  dispatch(removeTotalItem(id));
  setIsModalOpen(false);
}

  return (
    <>
      <CartProductContainer>
          <img src= {img} alt="" />
          <CartProductItems>
              <span>{nombre}</span>
              <h4>${precio}</h4>
              <CartQuantity>
                  <AiOutlineMinusCircle onClick={() => dispatch(removeFromCart(id))}/>
                  <p>{quantity}</p>
                  <AiOutlinePlusCircle onClick={() => dispatch(addToCart({id}))}/>
                  <BsTrash3Fill onClick={handleDeleteToCart} />
              </CartQuantity>
          </CartProductItems>
      </CartProductContainer>

    <AnimatePresence>
      {isModalOpen && (
        <CartModalWrapper
        initial={{ translateY: 100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: 100 }}
        transition={{ type: "spring", damping: 20 }}
        key="add-modal"
        >
          <p>¿Quieres eliminar este producto del carrito?</p>
          <BtnModaCartlContainer>
              <BtnModalCart onClick={handleDeleteToCartConfirmation}>
                  Eliminar
              </BtnModalCart>
              <BtnModalCart onClick={handleModalClose}>
                  Cancelar
              </BtnModalCart>
          </BtnModaCartlContainer>
        </CartModalWrapper>

      )}
    </AnimatePresence>
    </>
)
}

export default CartProduct