import styled from "styled-components";

export const Fieldset = styled.fieldset`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

export const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textLight};
  display: inline-block;
  font-size: ${({ theme }) => theme.font.size.small};
  height: 18px;
  left: ${({ theme }) => theme.spacing(4)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  position: absolute;
  top: -7px;
  min-width: 80px;
`;

export const Input = styled.input`
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.textLight};
  font-size: ${({ theme }) => theme.font.size.base};
  padding: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  box-sizing: border-box;
`;

export const ViewPasswordIcon = styled.img`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  height: 20px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  height: 24px;
  padding: 0 ${({ theme }) => theme.spacing(2)};

  p {
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.font.size.small};
    line-height: 24px;
    margin: 0;
  }
`;
