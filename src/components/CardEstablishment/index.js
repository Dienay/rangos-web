import {
  CardContainer,
  EstablishmentLogo,
  CardContent,
  EstablishmentName,
  CardInfo,
  EstablishmentCategory,
  CardInfoShipping,
} from "./styles";
import DefaultImage from "../../assets/placeholders/establishment-placeholder.png";
import { isOpenNow } from "../../hooks";

const CardEstablishment = ({ establishment, onClick }) => {
  const isOpen = isOpenNow(establishment.openingHours);

  return (
    <CardContainer onClick={onClick} $isOpen={isOpen}>
      <EstablishmentLogo
        src={establishment.coverPhoto}
        $isOpen={isOpen}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DefaultImage;
        }}
        alt="Foto do establishment"
      />
      <CardContent>
        <EstablishmentName>{establishment.name}</EstablishmentName>
        <EstablishmentCategory>{establishment.category}</EstablishmentCategory>
        <CardInfo>
          <CardInfoShipping>
            Entrega: {establishment.deliveryTime.min}-
            {establishment.deliveryTime.max} min -
            {establishment.shipping
              ? ` R$${establishment.shipping},00`
              : " grátis"}
          </CardInfoShipping>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
};

export default CardEstablishment;
