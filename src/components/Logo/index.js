import { LogoStyle } from "./style";
import LogoImage from "../../Images/logo-rangos.svg";
import { Link } from "react-router-dom";

function Logo({ $variant = "normal" }) {
  return (
    <Link to="/">
      <LogoStyle src={LogoImage} alt="Logo Rappi4" $variant={$variant} />
    </Link>
  );
}

export default Logo;
