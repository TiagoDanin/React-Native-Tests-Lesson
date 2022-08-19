import * as Yup from 'yup';

export interface FormInputs {
  phone: string;
  state: string;
}

export const useValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Telefone é obrigatório')
      .min(14, 'Telefone inválido'),
  });

  return { validationSchema };
};
