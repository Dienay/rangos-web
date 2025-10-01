import styled, { css } from "styled-components";

const flat = css`
  border: none;
`;

const outline = css`
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
`;

const rounded = css`
  border-radius: ${({ theme }) => theme.radius.full};
`;

export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.base};
  border-radius: ${({ theme }) => theme.radius.small};
  cursor: pointer;
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  width: 100%;
  transition: all 0.2s ease-in-out;

  ${({ $variant }) => {
    switch ($variant) {
      case "flat":
        return flat;
      case "outline":
        return outline;
      case "rounded":
        return rounded;
      default:
        return flat;
    }
  }}

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;
