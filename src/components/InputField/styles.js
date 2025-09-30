import styled from "styled-components";
import { backgroundColor, color, fontSize } from "../../styles/styleUtils";

export const Fieldset = styled.fieldset`
  position: relative;
  margin-bottom: 4px;
  width: 100%;
`;

export const Label = styled.label`
  ${backgroundColor("white")};
  ${color("textGrey")};
  display: inline-block;
  ${fontSize("label")};
  height: 18px;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -7px;
  min-width: 80px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.error
        ? (props) => props.theme.colors.error
        : (props) => props.theme.colors.textGrey};
  ${fontSize("body")};
  padding: 20px;
  width: 100%;
`;

export const ViewPasswordIcon = styled.img`
  top: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
`;

export const ErrorMessage = styled.div`
  height: 24px;
  padding: 0 8px;

  p {
    ${color("error")};
    ${fontSize("label")};
    line-height: 24px;
  }
`;
