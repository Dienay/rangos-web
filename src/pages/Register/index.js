import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignUpContainer, SignUpForm, UserType } from "./styles";
import { useInput } from "../../hooks";
import { Logo, InputField, Button } from "../../components";
import { env } from "../../utils";

const { API_URL } = env;

function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Customer");
  const [customerButton, setCustomerButton] = useState(true);
  const [establishmentButton, setEstablishmentButton] = useState(false);
  const { form, onChange } = useInput({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    typeUser: "",
  });

  const [inputError, setInputError] = useState({
    confirmPassword: false,
    confirmPasswordMessage: "",
    email: false,
    emailMessage: "",
    phone: false,
    phoneMessage: "",
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

  const signup = async (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      typeUser: userType,
    };

    if (form.password !== form.confirmPassword) {
      setInputError({
        confirmPassword: true,
        confirmPasswordMessage: "As senhas não coincidem",
      });
      return;
    }

    axios
      .post(`${API_URL}/signup`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);

        if (response.data.token) {
          navigate("/home");
        }
      })
      .catch((e) => {
        if (e.response.data.message.includes("Phone")) {
          setInputError({
            phone: true,
            phoneMessage: "Este número já está sendo usado por alguém",
          });
        } else if (e.response.data.message.includes("Email")) {
          setInputError({
            email: true,
            emailMessage: "Este email já está sendo usado por alguém",
          });
        }
      });
  };

  const handleUserType = (type) => {
    setUserType(type);
  };

  const handleButtonUserType = useCallback(() => {
    if (userType === "Customer") {
      setCustomerButton(true);
      setEstablishmentButton(false);
    } else if (userType === "Establishment") {
      setCustomerButton(false);
      setEstablishmentButton(true);
    }
  }, [userType]);

  useEffect(() => {
    handleButtonUserType();
  }, [handleButtonUserType]);

  return (
    <section className="main-container">
      <SignUpContainer>
        <Logo />
        <UserType>
          <Button
            onClick={() => {
              handleUserType("Customer");
            }}
            $variant={customerButton ? "flat" : "outline"}
          >
            Cliente
          </Button>
          <Button
            onClick={() => {
              handleUserType("Establishment");
            }}
            $variant={establishmentButton ? "flat" : "outline"}
          >
            Estabelecimento
          </Button>
        </UserType>
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
              navigate("/login");
            }}
            $variant="outline"
          >
            Voltar
          </Button>
        </SignUpForm>
      </SignUpContainer>
    </section>
  );
}

export default SignUp;
