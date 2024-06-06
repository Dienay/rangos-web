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

export const CardRestaurante = styled.div`
  width: 260px;
  margin: 8px auto;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  cursor: pointer;
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 120px;
  margin: 0 auto;
  padding: 0;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const CardTexto = styled.div`
  width: 100%;
  margin: 0;
  padding: 12px 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const CardNome = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
  font-size: 16px;
  color: #e86e5a;
`;

export const CardInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #b8b8b8;

  .opened {
    color: green;
  }

  .closed {
    color: gray;
  }
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
