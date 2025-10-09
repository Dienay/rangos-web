import styled from "styled-components";

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
