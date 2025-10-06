import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  align-items: center;
  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(8)};
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  line-height: 0;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  text-align: center;
  position: relative;
  flex: 1;
  max-width: 768px;
`;

export const SearchInput = styled.input`
  height: 36px;
  display: inline-block;
  width: 100%;
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

export const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  text-align: left;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.borderLight}`};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
`;

export const SearchItem = styled.div`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const SearchItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.small};
  object-fit: contain;
`;

export const SearchItemText = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: ${({ theme }) => theme.font.size.base};
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const SignUpLink = styled(Link)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BuyInfo = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const BagButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const BagDetails = styled.div``;

export const BagPrice = styled.p`
  font-size: ${({ theme }) => theme.font.size.small};
`;

export const BagCounter = styled.p`
  font-size: ${({ theme }) => theme.font.size.label};
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
