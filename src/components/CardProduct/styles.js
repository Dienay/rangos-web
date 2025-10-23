import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 192px;
  height: 206px;
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.borderLight}`};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
  pointer-events: none;
  user-select: none;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 56px 56px 0;
    border-color: transparent ${({ theme }) => theme.colors.primary} transparent
      transparent;
  }

  span {
    position: absolute;
    top: 4px;
    right: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.base};
    z-index: 11;
    pointer-events: auto;
  }
`;

export const SoldBadge = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.label};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  user-select: none;
  z-index: 2;
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  height: 76px;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Price = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.text};

  span {
    margin-right: 4px;
  }
`;

export const OldPrice = styled.span`
  font-size: ${({ theme }) => theme.font.size.label};
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: line-through;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
