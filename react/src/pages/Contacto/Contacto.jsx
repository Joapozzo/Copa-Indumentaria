import React, { useState } from 'react';
import { ContactWrapper, Form, Formik, ContactModalWrapper } from './ContactoStlyes';
import Input from '../../UI/Input';
import { checkoutInitialValues } from '../../Formik/initialValues';
import { checkoutValidationSchema } from '../../Formik/validationSchema';
import Submit from '../../UI/Submit';
import { AnimatePresence } from 'framer-motion';

const Contacto = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalContact = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      <ContactWrapper>
        <h2>¡Contáctanos!</h2>
        <Formik
          initialValues={checkoutInitialValues}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values, { resetForm }) => {
            // Realiza el envío de datos o cualquier otra lógica aquí

            // Muestra el modal
            toggleModalContact();

            // Reinicia el formulario después de mostrar el modal
            resetForm();
          }}
        >
          {() => (
            <Form>
              <Input name="name" htmlFor="nombre" type="text" id="nombre" placeholder="Tu nombre">
                Nombre
              </Input>

              <Input name="surname" htmlFor="apellido" type="text" id="apellido" placeholder="Tu apellido">
                Apellido
              </Input>

              <Input name="email" htmlFor="mail" type="email" id="mail" placeholder="Tu email">
                Email
              </Input>

              <Input name="asunto" htmlFor="asunto" type="text" id="affair" placeholder="Escribi asunto">
                Asunto
              </Input>

              <Submit>Enviar</Submit>
                {showModal && (
                  <ContactModalWrapper
                    initial={{ translateY: 400 }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: 600 }}
                    transition={{ type: 'spring', damping: 27, duration: 0.1 }}
                    key="contact-modal"
                  >
                    <h4>Mensaje enviado con éxito</h4>
                  </ContactModalWrapper>
                )}
            </Form>
          )}
        </Formik>
      </ContactWrapper>
    </AnimatePresence>
  );
};

export default Contacto;
