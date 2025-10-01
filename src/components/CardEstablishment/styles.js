import styled from "styled-components";

export const CardContainer = styled.section`
  width: 320px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
`;

export const EstablishmentLogo = styled.img`
  width: 80px;
  height: 80px;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: -2px 2px 12px -4px rgba(0, 0, 0, 0.45);
  object-fit: contain;
`;

export const CardContent = styled.section`
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const EstablishmentNome = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const EstablishmentCategory = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.small};
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
  font-size: ${({ theme }) => theme.font.size.small};
`;
