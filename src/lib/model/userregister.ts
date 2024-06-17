import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  username: yup.string().required("Digite um nome de usuário válido"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  password: yup.string().required("Digite uma senha válida"),
});

