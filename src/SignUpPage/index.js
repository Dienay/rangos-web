import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignUpContainer, SignUpForm, Title } from './styles';
import useInput from '../Hooks/useInput';
import Logo from '../Components/Logo';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const baseUrl = 'http://localhost:3003';

function SignUp() {
  const navigate = useNavigate();
  const { form, onChange } = useInput({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [inputError, setInputError] = useState({
    confirmPassword: false,
    confirmPasswordMessage: '',
    email: false,
    emailMessage: '',
    phone: false,
    phoneMessage: '',
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

  const signup = async (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    if (form.password !== form.confirmPassword) {
      setInputError({
        confirmPassword: true,
        confirmPasswordMessage: 'As senhas não coincidem',
      });
      return;
    }

    axios
      .post(`${baseUrl}/signup`, body)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);

        if (response.data.token) {
          console.log(response.data.token);
          navigate('/home');
        }
      })
      .catch((e) => {
        if (e.response.data.message.includes('Phone')) {
          setInputError({
            phone: true,
            phoneMessage: 'Este número já está sendo usado por alguém',
          });
        } else if (e.response.data.message.includes('Email')) {
          setInputError({
            email: true,
            emailMessage: 'Este email já está sendo usado por alguém',
          });
        }
      });
  };

  return (
    <section className="main-container">
      <SignUpContainer>
        <Logo />
        <Title>Cadastrar</Title>
        <SignUpForm onSubmit={signup}>
          <InputField
            label="Nome *"
            value={form.name}
            name="name"
            placeholder="Nome Completo"
            type="text"
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Email *"
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
            label="Celular *"
            value={form.phone}
            name="phone"
            placeholder="Ex: 00 00000-0000"
            type="phone"
            onChange={handleInputChange}
            required
            error={inputError.phone}
            message={inputError.phoneMessage}
          />
          <InputField
            label="Senha *"
            value={form.password}
            name="password"
            placeholder="Mínimo de 6 caracteres"
            type="password"
            onChange={handleInputChange}
            required
            error={inputError.confirmPassword}
          />
          <InputField
            label="Confirmar Senha *"
            value={form.confirmPassword}
            name="confirmPassword"
            placeholder="Mínimo de 6 caracteres"
            type="password"
            onChange={handleInputChange}
            required
            error={inputError.confirmPassword}
            message={inputError.confirmPasswordMessage}
          />
          <Button type="submit">Cadastrar</Button>
          <Button
            onClick={() => {
              navigate('/login');
            }}
            variant="outline"
          >
            Voltar
          </Button>
        </SignUpForm>
      </SignUpContainer>
    </section>
  );
}

export default SignUp;
