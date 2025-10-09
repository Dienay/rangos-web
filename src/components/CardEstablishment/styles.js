import styled from "styled-components";

export const CardContainer = styled.section`
  border-radius: ${({ theme }) => theme.radius.medium};
  border: ${({ theme }) => `${theme.borders.thin} ${theme.colors.borderLight}`};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 80px;
  min-width: 320px;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const EstablishmentLogo = styled.img`
  align-self: center;
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.medium};
  object-fit: contain;
`;

export const CardContent = styled.section`
  padding: ${({ theme }) => theme.spacing(1)};
  display: grid;
  align-content: space-between;
`;

export const EstablishmentName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.h3};
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const EstablishmentCategory = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 1;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInfoOpening = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.small};

  .opened {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .closed {
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.7;
  }
`;

export const CardInfoShipping = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.label};
  line-height: 1;
`;
