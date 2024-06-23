import styled from 'styled-components';
import { border, color, fontSize } from '../styles/styleUtils';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  padding: 16px 8px;
  width: 90vw;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  ${border('thin', 'textGrey')}
  ${fontSize('body')};
  ${color('textGrey')};
`;

export const EstablishmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
`;

export const ResultadoTexto = styled.p`
  width: 100%;
  margin: 12px 0;
  padding: 0;
  font-size: 16px;
  text-align: center;
  color: #000;
`;
export const PedidoEmAndamento = styled.div`
  width: 360px;
  height: 118px;
  background-color: #e86e5a;
  position: fixed;
  bottom: 48px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80px 280px;
`;
export const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DadosDoPedido = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  > * {
    margin-top: 8px;
  }
`;
export const PedidoText = styled.div`
  width: 256px;
  height: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: white;
`;
export const Subtotal = styled.div`
  width: 256px;
  height: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;
export const EnderecoRestaurante = styled.div`
  width: 256px;
  height: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;
