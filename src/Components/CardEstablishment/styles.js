import styled from "styled-components";
import { color, fontSize } from "../../styles/styleUtils";

export const CardContainer = styled.section`
  width: 320px;
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const EstablishmentLogo = styled.img`
  width: 80px;
  height: 80px;
  padding: 4px;
  border-radius: 8px;
  box-shadow: -2px 2px 12px -4px rgba(0, 0, 0, 0.45);
  object-fit: contain;
`;

export const CardContent = styled.section`
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const EstablishmentNome = styled.p`
  ${color("text")}
  ${fontSize("body")}
`;

export const EstablishmentCategory = styled.span`
  ${color("textGrey")}
  ${fontSize("label")}
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInfoOpening = styled.p`
  ${color("textGrey")}
  ${fontSize("label")}

  .opened {
    color: #24a724;
  }

  .closed {
    ${color("textGrey")}
    opacity: 0.7;
  }
`;

export const CardInfoShipping = styled.p`
  ${color("textGrey")}
  ${fontSize("label")}
`;
