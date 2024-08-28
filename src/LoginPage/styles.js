import styled, { keyframes } from 'styled-components';
import { backgroundColor, fontSize } from '../styles/styleUtils';

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
  width: calc(100vw - 32px);
`;

export const LoginForm = styled.form`
  margin-top: 24px;
  width: 100%;
`;

export const Text = styled.p`
  ${fontSize('body')};
  margin-top: 24px;
`;

export const Link = styled.a`
  display: inline-block;
  margin-left: 4px;
  ${fontSize('body')};
  text-decoration: underline;
  cursor: pointer;
`;
