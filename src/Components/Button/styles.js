import styled, { css } from 'styled-components';

const flat = css`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
`;

const outline = css`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const rounded = css`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Btn = styled.button`
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 16px;
  text-align: center;
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'flat':
        return flat;
      case 'outline':
        return outline;
      case 'rounded':
        return rounded;
      default:
        return flat;
    }
  }}

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;
