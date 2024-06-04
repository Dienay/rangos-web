import styled, { keyframes } from 'styled-components';

const fade = keyframes`
from{
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SignUpContainer = styled.section`
  align-items: center;
  animation-duration: 1s;
  animation-name: ${fade};
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: calc(100vw - 32px);
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: 300;
  margin: 24px 0;
`;

export const CamposDeCadastro = styled.input`
  border: ${(props) => props.borda};
  width: 92vw;
  height: 56px;
  border-radius: 4px;
  margin-bottom: 16px;
  padding-left: 8px;
`;
export const Imagem = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
`;
export const SignUpForm = styled.form`
  width: 100%;

  button:first-of-type {
    margin-bottom: 16px;
  }
`;
