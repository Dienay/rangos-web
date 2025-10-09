import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 192px;
  min-width: 192px;
  height: 186px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.label};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
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
`;
