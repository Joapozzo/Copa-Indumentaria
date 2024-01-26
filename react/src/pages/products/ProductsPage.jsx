import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineArrowDown, AiFillFilter } from "react-icons/ai";
import Product from '../../componentes/Products/Product';
import { ProductsWrapper, ProductsTop, ProductsContainer } from "./ProductsStyles";

const Productos = () => {
    
  const products = useSelector((state) => state.products.products);

  return (
    <ProductsWrapper>
      <ProductsTop>
        <button>Volver</button>
        <div>
          <span>
            <p>Filtrar</p>
            <AiFillFilter />
          </span>
          <span>
            <p>Mas nuevo a mas viejo</p>
            <AiOutlineArrowDown />
          </span>
        </div>
      </ProductsTop>

      <h2>Productos Coperos</h2>

      <ProductsContainer>
        {
            //object.entries para poder hacer un array de arrays con un objeto, para poder mapearlo, ya que no se puede mapear directamente un obj
            Object.entries(products).map(([, productsHome]) => {
            return productsHome.map((productHome) => {
                return <Product {...productHome} key={productHome.id} />
            })
          })
        }
      </ProductsContainer>
    </ProductsWrapper>
  );
}

export default Productos;
