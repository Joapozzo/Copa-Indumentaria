import React from 'react'
import {InputStyled, ErrorMessageForm,InputBoxStyled } from "./InputStyles"
import { ErrorMessage, Field } from 'formik'

const Input = ({children, htmlFor, type, id, placeholder, name}) => {
  return (
    <Field name = {name}>
        {
            ({field, form: {errors, touched}}) => (

                <InputBoxStyled>
                    <InputStyled
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    {...field}
                    iserror = {errors[field.name] && touched[field.name]}
                    />

                    <ErrorMessage name={field.name}>
                        {
                            (message) => <ErrorMessageForm>{message}</ErrorMessageForm>
                        }
                    </ErrorMessage>
                </InputBoxStyled>

            )
        }
    </Field>
    )
}

export default Input