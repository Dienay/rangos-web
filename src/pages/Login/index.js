import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LoginContainer, Text, Link, LoginForm } from "./styles";

import { useInput } from "../../hooks";
import { InputField, Button, Logo } from "../../components";
import { env } from "../../utils";

const { API_URL } = env;

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

  const login = async (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${API_URL}/login`, body)
      .then((response) => {
        console.log("Login response:", response.data);

        window.localStorage.setItem("token", response.data.token);
        if (response.data.token) {
          resetInput();
          navigate("/home");
        } else {
          navigate("/cadastro");
        }
      })
      .catch((err) => {
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
      });
  };

  return (
    <section className="main-container">
      <LoginContainer>
        <Logo />
        <LoginForm onSubmit={login}>
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
          <Link
            onClick={() => {
              navigate("/cadastro");
            }}
          >
            Clique aqui
          </Link>
        </Text>
      </LoginContainer>
    </section>
  );
}

export default LoginPage;
