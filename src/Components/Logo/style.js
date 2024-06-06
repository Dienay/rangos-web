import styled, { css } from 'styled-components';

const small = css`
  height: 48px;
`;

const normal = css`
  height: 64px;
`;

const large = css`
  height: 80px;
`;

export const LogoStyle = styled.img`
  object-fit: contain;

  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return small;
      case 'normal':
        return normal;
      case 'large':
        return large;
      default:
        return normal;
    }
  }}
`;
