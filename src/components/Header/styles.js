import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(8)};

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const LogoContainer = styled.div`
  display: inline-block;
  line-height: 0;
  cursor: pointer;

  img {
    @media (max-width: 768px) {
      height: 32px;
    }
  }
`;

export const SearchContainer = styled.div`
  text-align: center;
  position: relative;
  flex: 1;
  max-width: 768px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
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
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.borderLight}`};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};

  overflow-y: auto;
  overflow-x: hidden;

  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderLight};
    border-radius: ${({ theme }) => theme.radius.medium};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radius.medium};
  }

  @media (max-width: 768px) {
    width: calc(100vw - 8px);
    border-radius: 0;
    left: 50%;
    right: auto;
    transform: translateX(calc(-50% + 8px));
    top: 44px;
    max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  }
`;

export const SearchItemText = styled.div`
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const SearchItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  transition:
    background-color 0.2s,
    opacity 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${SearchItemText} {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SearchItemImage = styled.img`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.small};
  object-fit: contain;
`;

export const HeaderActions = styled.div`
  height: 36px;
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

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const BuyInfo = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 768px) {
    gap: 0;
  }
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

  @media (max-width: 768px) {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const BagCounter = styled.p`
  font-size: ${({ theme }) => theme.font.size.label};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -6px;
  right: -8px;
  padding: 2px 4px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.font.weight.bold};
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
