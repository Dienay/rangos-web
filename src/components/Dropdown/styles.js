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
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  border: none;
  padding: 0;
  height: 36px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const DropdownContent = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.medium};
  right: 0;
  top: 110%;
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)};
  min-width: max-content;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s ease;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
