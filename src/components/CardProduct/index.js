import { Card, Image, Info, Price, Name, OldPrice, Badge } from "./styles";
import Logo from "../../Images/logo-rangos.svg";

const CardProduct = ({ product, onClick, rank }) => {
  return (
    <Card onClick={onClick}>
      {rank && <Badge>{rank}</Badge>}
      <Image
        src={product.coverPhoto}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Logo;
        }}
      />
      <Info>
        <Price>
          {product.discountPrice ? (
            <>
              <span>R${product.discountPrice.toFixed(2)}</span>
              <OldPrice>R${product.price.toFixed(2)}</OldPrice>
            </>
          ) : (
            <span>R${product.price.toFixed(2)}</span>
          )}
        </Price>
        <Name>{product.name}</Name>
      </Info>
    </Card>
  );
};

export default CardProduct;
