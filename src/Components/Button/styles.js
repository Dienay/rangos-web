import styled, { css } from 'styled-components';
import {
  backgroundColor,
  border,
  color,
  fontSize,
} from '../../styles/styleUtils';

const flat = css`
  border: none;
`;

const outline = css`
  ${border('thin', 'primary')}
  ${color('primary')};
  background-color: transparent;
`;

const rounded = css`
  border-radius: 50px;
`;

export const Btn = styled.button`
  ${backgroundColor('primary')};
  ${color('white')};
  ${fontSize('body')};
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  padding: 16px;
  text-align: center;
  width: 100%;

  ${({ $variant }) => {
    switch ($variant) {
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
