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

export const SignUpContainer = styled.section`
  align-items: center;
  animation-duration: 1s;
  animation-name: ${fade};
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: calc(100vw - ${({ theme }) => theme.spacing(8)});
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: ${({ theme }) => theme.spacing(6)} 0;
`;

export const UserType = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  width: 100%;
`;

export const SignUpForm = styled.form`
  margin-top: ${({ theme }) => theme.spacing(6)};
  width: 100%;

  button:first-of-type {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;
