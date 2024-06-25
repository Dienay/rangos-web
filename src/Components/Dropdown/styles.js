import styled, { keyframes } from 'styled-components';
import {
  backgroundColor,
  border,
  color,
  fontSize,
  fontWeight,
} from '../../styles/styleUtils';

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
  ${color('text')}
`;

export const DropdownButton = styled.button`
  ${backgroundColor('transparent')}
  ${color('text')}
  ${fontSize('body')}
  ${fontWeight('bold')}
  cursor: pointer;

  &:hover {
    ${color('primary')}
  }
`;

export const DropdownContent = styled.ul`
  ${backgroundColor('white')}
  ${border('thin', 'textGrey')}
  position: absolute;
  border-radius: 4px;
  right: 0;
  text-align: right;
  top: 30px;
  min-width: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s forwards;
  z-index: 1;
`;
export const DropdownItem = styled.li`
  padding: 12px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textGrey};
  }
`;
