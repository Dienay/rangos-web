import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  Text,
  SignUpLink,
  LoginForm,
  LoginWrapper,
} from "./styles";

import { useInput } from "../../hooks";
import { InputField, Button, Logo } from "../../components";
import { login } from "../../api";

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, resetInput } = useInput({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: false,
    emailMessage: "",
    password: false,
    passwordMessage: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);

    setInputError((prevErrors) => ({
      ...prevErrors,
      [`${name}`]: false,
      [`${name}Message`]: "",
    }));
  };

  const logIn = async (event) => {
    event.preventDefault();
    try {
      const data = await login({ email: form.email, password: form.password });

      window.localStorage.setItem("token", data.token);
      if (data.token) {
        resetInput();
        navigate("/");
      } else {
        navigate("/signup");
      }
    } catch (err) {
      console.log("Erro:", err.message);

      if (err.response) {
        // Somente tente acessar err.response.status se err.response estiver definido
        if (err.response.status === 404) {
          setInputError({
            email: true,
            emailMessage: "E-mail inválido",
          });
        } else if (err.response.status === 422) {
          setInputError({
            password: true,
            passwordMessage: "Senha inválida",
          });
        }
      } else {
        // Lide com outros tipos de erros aqui
        console.log("Erro desconhecido", err);
      }
    }
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <Logo $variant="large" />
        <LoginForm onSubmit={logIn}>
          <InputField
            label="E-mail *"
            value={form.email}
            name="email"
            placeholder="email@email.com"
            type="email"
            onChange={handleInputChange}
            required
            error={inputError.email}
            message={inputError.emailMessage}
          />
          <InputField
            label="Senha *"
            value={form.password}
            name="password"
            placeholder="Mínimo 6 caracteres"
            type="password"
            onChange={handleInputChange}
            required
            error={inputError.password}
            message={inputError.passwordMessage}
          />
          <Button type="submit">Entrar</Button>
        </LoginForm>
        <Text>
          Não possui cadastro?
          <SignUpLink to="/signup">Clique aqui</SignUpLink>
        </Text>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default LoginPage;
