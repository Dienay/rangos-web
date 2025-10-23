import styled from "styled-components";

export const CardContainer = styled.section`
  border-radius: ${({ theme }) => theme.radius.medium};
  border: ${({ theme, $isOpen }) =>
    $isOpen
      ? `${theme.borders.thin} ${theme.colors.secondary}`
      : `${theme.borders.thin} ${theme.colors.borderLight}`};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 80px;
  min-width: 320px;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;

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
  filter: ${({ $isOpen }) =>
    $isOpen ? "saturate(100%) opacity(1)" : "saturate(20%) opacity(0.5)"};
  transition: filter 0.3s ease;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const CardInfoShipping = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.label};
  line-height: 1;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
