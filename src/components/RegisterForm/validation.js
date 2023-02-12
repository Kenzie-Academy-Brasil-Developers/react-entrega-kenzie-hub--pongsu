import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("É preciso informar seu nome"),
    email: yup.string().required("É preciso informar seu email").email("E-mail inválido"),
    password: yup
    .string().required("É preciso cadastrar uma senha")
    .matches(/[a-z]|[A-Z]/, "Deve conter ao menos 1 letra")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    passwordConfirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ).required('A confirmação da senha é obrigatória'),
    bio: yup.string().required("A descrição é obrigatória"),
    contact: yup.string().required("É preciso informar seu contato"),
    course_module: yup.string().required("Modulo atual obrigatório"),
  })
  .required();
