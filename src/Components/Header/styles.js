import styled from 'styled-components';
import { backgroundColor, color, fontSize } from '../../styles/styleUtils';

export const HeaderContainer = styled.div`
  padding: 8px 32px;
  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoButton = styled.button`
  ${backgroundColor('transparent')}
  cursor: pointer;
`;

export const UserUtilities = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const SingUpLink = styled.a`
  font-weight: 600;
  ${color('text')}
  ${fontSize('body')};
  cursor: pointer;
`;

export const CartButton = styled.button`
  height: 32px;
  width: 32px;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  ${fontSize('label')};
  top: -8px;
  right: -8px;
  min-width: 24px;
  padding: 2px 4px;
  border-radius: 25%;
  ${backgroundColor('primary')}
`;
