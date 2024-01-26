import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlices';
import styled from 'styled-components';  // Asegúrate de importar 'styled' si no lo has hecho

const Categorie = ({ title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const isSelected = category === selectedCategory; // Verifica si la categoría está seleccionada

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(selectCategory(category));
  };

  return (
    <a
      href="#"
      className={isSelected ? 'selected' : ''}  // Agrega o quita la clase 'selected'
      onClick={handleClick}
    >
      {title}
    </a>
  );
};

export default Categorie;
