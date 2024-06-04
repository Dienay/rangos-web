import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  LoginContainer,
  Text,
  Title,
  LogoIcon,
  Link,
  LoginForm,
} from './styles';

import Logo from '../Images/logo-rangos.svg';
import useInput from '../Hooks/useInput';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const baseUrl = 'http://localhost:3003';

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, resetInput } = useInput({
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    email: false,
    emailMessage: '',
    password: false,
    passwordMessage: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);

    setInputError((prevErrors) => ({
      ...prevErrors,
      [`${name}`]: false,
      [`${name}Message`]: '',
    }));
  };

  const login = async (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);
        if (response.data.token) {
          resetInput();
          navigate('/home');
        } else {
          navigate('/cadastro');
        }
      })

      .catch((err) => {
        console.log('Erro', err.message);
        if (err.response.status === 404) {
          setInputError({
            email: true,
            emailMessage: 'E-mail inválido',
          });
        } else if (err.response.status === 422) {
          setInputError({
            password: true,
            passwordMessage: 'Senha inválida',
          });
        }
      });
  };

  return (
    <section className="main-container">
      <LoginContainer>
        <LogoIcon src={Logo} alt="Logo Rangos" />
        <Title>
          <p>Entrar</p>
        </Title>
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
              navigate('/cadastro');
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
