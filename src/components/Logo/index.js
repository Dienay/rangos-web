import { LogoLink, LogoStyle } from "./style";
import LogoImage from "../../Images/logo-rangos.svg";

function Logo({ $variant = "normal", asLink = true }) {
  const logoImg = (
    <LogoStyle src={LogoImage} alt="Logo Rangos" $variant={$variant} />
  );
  return asLink ? <LogoLink to="/">{logoImg}</LogoLink> : logoImg;
}

export default Logo;
