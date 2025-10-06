import styled, { css } from "styled-components";

const small = css`
  height: 32px;
`;

const base = css`
  height: 48px;
`;

const large = css`
  height: 64px;
`;

export const LogoStyle = styled.img`
  object-fit: contain;

  ${({ $variant }) => {
    switch ($variant) {
      case "small":
        return small;
      case "base":
        return base;
      case "large":
        return large;
      default:
        return base;
    }
  }}
`;
