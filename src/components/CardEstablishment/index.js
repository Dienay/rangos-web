import {
  CardContainer,
  EstablishmentLogo,
  CardContent,
  EstablishmentName,
  CardInfo,
  EstablishmentCategory,
  CardInfoShipping,
  CardInfoOpening,
} from "./styles";
import Logo from "../../Images/logo-rangos.svg";

const CardEstablishment = ({ establishment, onClick }) => {
  const isEstablishmentOpen = (openingHours) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

    for (const hourRange of openingHours) {
      if (
        hourRange.openDays.includes(days[currentDay]) ||
        hourRange.openDays.includes("Every day")
      ) {
        for (const hour of hourRange.hours) {
          const [openHour, openMinute] = hour.open.split(":").map(Number);
          const [closeHour, closeMinute] = hour.close.split(":").map(Number);

          const openTime = openHour * 60 + openMinute;
          const closeTime = closeHour * 60 + closeMinute;

          if (openTime < closeTime) {
            if (currentTime >= openTime && currentTime <= closeTime) {
              return true;
            }
          } else {
            if (currentTime >= openTime || currentTime < closeTime) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  return (
    <CardContainer onClick={onClick}>
      <EstablishmentLogo
        src={establishment.coverPhoto}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Logo;
        }}
        alt="Foto do establishment"
      />
      <CardContent>
        <EstablishmentName>{establishment.name}</EstablishmentName>
        <EstablishmentCategory>{establishment.category}</EstablishmentCategory>
        <CardInfo>
          {/* <CardInfoOpening>
            {isEstablishmentOpen(establishment.openingHours) ? (
              <span className="opened">aberto</span>
            ) : (
              <span className="closed">fechado</span>
            )}
          </CardInfoOpening> */}
          <CardInfoShipping>
            Entrega: {establishment.deliveryTime} min -
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
