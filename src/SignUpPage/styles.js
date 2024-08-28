import styled, { keyframes } from 'styled-components';
import { fontSize } from '../styles/styleUtils';

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
  ${fontSize('h1')};
  font-weight: 300;
  margin: 24px 0;
`;

export const UserType = styled.section`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  width: 100%;
`;

export const SignUpForm = styled.form`
  margin-top: 24px;
  width: 100%;

  button:first-of-type {
    margin-bottom: 16px;
  }
`;
