import styled, { keyframes } from "styled-components";

const fade = keyframes`
from{
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LoginContainer = styled.section`
  align-items: center;
  animation-duration: 1s;
  animation-name: ${fade};
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: calc(100vw - ${({ theme }) => theme.spacing(8)});
`;

export const LoginForm = styled.form`
  margin-top: ${({ theme }) => theme.spacing(6)};
  width: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Link = styled.a`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.font.size.base};
  text-decoration: underline;
  cursor: pointer;
`;
