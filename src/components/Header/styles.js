import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(8)};
  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
`;

export const UserUtilities = styled.section`
export const SearchInput = styled.input`
  height: 36px;
  display: inline-block;
  width: 100%;
  max-width: 768px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radius.medium};
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.borderLight}`};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.textLight};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textGrey};
  }
`;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const SignUpLink = styled.a`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 24px;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.small};
  text-align: center;
  line-height: 1;
`;
