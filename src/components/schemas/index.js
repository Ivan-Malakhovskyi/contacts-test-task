
import * as yup from 'yup'

export const createContactSchema = yup.object().shape({
    first_name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
        .required(),
     last_name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
        .required(),
     email: yup.string().email('Invalid email format').required()
})

