import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: 16px 8px;
  display: grid;
  gap: 16px;
  grid-template-rows: 1fr;
  grid-template-columns: 320px 1fr;
  position: relative;
`;

export const EstablishmentInfo = styled.div`
  /* background-color: aquamarine; */
  width: 100%;
`;

export const EstablishmentLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

export const ProductList = styled.ul`
  width: 100%;
`;

export const CardProduto = styled.div`
  width: 100%;
  height: 112px;
  margin: 8px auto;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const CardImagem = styled.img`
  width: 30%;
  height: 110px;
  margin: 0 auto;
  padding: 0;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;

export const CardTextoDelivery = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardTexto = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 16px;
`;

export const CardNome = styled.h2`
  width: 100%;
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: #e86e5a;
`;

export const CardDescription = styled.p`
  margin: 0;
  padding: 4px 0;
  font-size: 14px;
  color: #b8b8b8;
`;

export const CardInfo = styled.p`
  min-width: 104px;
  margin: 0;
  padding: 4px 0;
  font-size: 16px;
  color: #b8b8b8;
`;

export const CardPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

export const ResultadoTexto = styled.p`
  width: 100%;
  margin: 12px;
  padding: 0;
  font-size: 16px;
  text-align: center;
  color: #000;
`;

export const BtnQuantidade = styled.p`
  padding: 6px 12px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #e86e5a;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: -1px;
  background-color: transparent;
  color: #e86e5a;
`;

export const BtnAlteraQuantidade = styled.button`
  padding: 8px 24px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #000;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.29px;
  position: absolute;
  bottom: 0;
  right: -1px;
  cursor: pointer;
  background-color: transparent;
`;

export const BtnRemoveQuantidade = styled.button`
  padding: 8px 24px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e86e5a;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.29px;
  position: absolute;
  bottom: 0;
  right: -1px;
  cursor: pointer;
  background-color: transparent;
  color: #e86e5a;
`;

export const BoxQuantidade = styled.div`
  width: 328px;
  height: 216px;
  margin: auto;
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(50% - 108px);
  left: 0%;
  right: 0;
  background-color: #fff;
  z-index: 3;
`;

export const BoxTexto = styled.p`
  margin: 12px auto;
  font-size: 16px;
  text-align: center;
`;

export const BoxSelect = styled.select`
  width: 100%;
  margin: 20px auto;
  padding: 20px 16px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

export const BoxBtn = styled.button`
  width: 100%;
  display: block;
  margin-top: 8px;
  text-align: right;
  text-transform: uppercase;
  color: #4a90e2;
  background-color: transparent;
`;
