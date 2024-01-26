import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    surname: Yup.string().required('Campo Requerido'),
    email: Yup.string().required('Campo Requerido'),
    asunto: Yup.string().required('Campo Requerido')
})