import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ArrowButton,
  Arrows,
  CarouselContainer,
  CarouselTrack,
} from "./styles";

const Carousel = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8; // Rola 80% da largura visível
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <CarouselContainer>
      <Arrows>
        <ArrowButton left onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </ArrowButton>
        <ArrowButton right onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </ArrowButton>
      </Arrows>
      <CarouselTrack ref={scrollRef}>{children}</CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel;
