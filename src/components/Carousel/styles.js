import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Arrows = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: -40px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0.5rem 0;

  /* Oculta a barra de rolagem */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2)};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  ${({ left }) => left && `left: -1rem;`}
  ${({ right }) => right && `right: -1rem;`}
`;
