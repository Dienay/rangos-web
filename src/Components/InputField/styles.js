import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  position: relative;
  margin-bottom: 4px;
  width: 100%;
`;

export const Label = styled.label`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.textGrey};
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.label};
  height: 18px;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -7px;
  width: 80px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.error
        ? (props) => props.theme.colors.error
        : (props) => props.theme.colors.textGrey};
  font-size: 1rem;
  font-size: ${(props) => props.theme.fontSize.body};
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
    color: ${(props) => props.theme.colors.error};
    font-size: ${(props) => props.theme.fontSize.label};
    line-height: 24px;
  }
`;
