import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  padding: 16px;
  text-align: center;
  width: 100%;
`;
