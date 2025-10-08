import styled from "styled-components";

export const PillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  margin: ${({ theme }) => theme.spacing(3)} auto;
  width: fit-content;
  max-width: 90%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  font-size: ${({ theme }) => theme.font.size.small};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const PillText = styled.span`
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &:hover {
      text-decoration: none;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 0.3rem;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
