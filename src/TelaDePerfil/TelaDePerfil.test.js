import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TelaDePerfil from "./index";
import App from "../App";
import axios from "axios";
import { usenavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemorynavigate } from "navigate";

axios.get = jest.fn().mockResolvedValue();

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants";

const mockData = {
  user: {
    id: "qffz21zaj9kHAbDDz9ur",
    name: "Laranja",
    email: "laranja@gmail.com",
    cpf: "777.777.777.77",
    hasAddress: true,
    address: "Rua teste, 11, Casa - Teste",
  },
};

test("Renderizar Tela", async () => {
  axios.get = jest.fn().mockResolvedValue({ data: mockData });

  const navigate = createMemorynavigate();
  const { findByText } = render(
    <Router navigate={navigate}>
      <TelaDePerfil />
    </Router>,
  );

  const titulo = await findByText("Meu Perfil");
  expect(titulo).toBeInTheDocument();
});
