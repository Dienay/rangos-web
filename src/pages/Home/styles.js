import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  position: relative;
  padding: 16px 8px;
  width: 100vw;
`;

export const Feed = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} 0;
`;

export const EstablishmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ResultadoTexto = styled.p`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(3)} 0;
  font-size: ${({ theme }) => theme.font.size.base};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
export const PedidoEmAndamento = styled.div`
  width: 360px;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(12)};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80px 280px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DadosDoPedido = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
export const PedidoText = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
export const Subtotal = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.text};
`;
export const EnderecoRestaurante = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.text};
`;
