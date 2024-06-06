import { css } from 'styled-components';

export const fontSize = (size) => css`
  font-size: ${({ theme }) => theme.fontSize[size]};
`;

export const fontWeight = (weight) => css`
  font-weight: ${({ theme }) => theme.fontWeight[weight]};
`;

export const color = (color) => css`
  color: ${({ theme }) => theme.colors[color]};
`;

export const backgroundColor = (colorName) => css`
  background-color: ${({ theme }) => theme.colors[colorName]};
`;

export const border = (borderStyle, color) => css`
  border: ${(
    props,
  ) => `${props.theme.borders[borderStyle]} ${props.theme.colors[color]}
`};
`;
