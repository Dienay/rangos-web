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

export const LoginContainer = styled.section`
  align-items: center;
  animation-duration: 1s;
  animation-name: ${fade};
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: calc(100vw - 32px);
`;

export const LogoIcon = styled.img`
  object-fit: contain;
  width: 148px;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: 300;
  margin: 24px 0;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-top: 24px;
`;

export const Link = styled.a`
  background-color: white;
  display: inline-block;
  margin-left: 4px;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;
