import {
  Card,
  Image,
  Info,
  Price,
  Name,
  OldPrice,
  Badge,
  SoldBadge,
} from "./styles";
import Rango from "../../assets/placeholders/product-placeholder.png";

const CardProduct = ({ product, onClick, rank }) => {
  return (
    <Card
      onClick={onClick}
      aria-label={`Produto rank ${rank}, ${product.name}`}
    >
      {rank && (
        <Badge aria-label={`Posição ${rank}`}>
          <span>{rank}</span>
        </Badge>
      )}
      <Image
        src={product.coverPhoto}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Rango;
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
      {product.totalSales !== undefined && (
        <SoldBadge aria-label={`${product.soldQuantity} vendidos`}>
          Vendidos: {product.totalSales}
        </SoldBadge>
      )}
    </Card>
  );
};

export default CardProduct;
