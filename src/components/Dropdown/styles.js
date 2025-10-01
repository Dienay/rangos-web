import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const DropdownContainer = styled.section`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  border: none;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DropdownContent = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.textLight}`};
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.small};
  right: 0;
  top: 30px;
  text-align: right;
  min-width: max-content;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s forwards;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textLight};
  }
`;
