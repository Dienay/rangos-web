import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { getProducts, getEstablishments, getTopProducts } from "../../api";

import { CategoryList, Container, Feed } from "./styles";

import {
  Loading,
  Header,
  NoticePill,
  CardEstablishment,
  Carousel,
  CardProduct,
} from "../../components";
import { isOpenNow } from "../../hooks";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [establishments, setEstablishments] = useState([]);

  // --- Data Fetching ---
  const loadData = useCallback(async () => {
    try {
      const [establishmentData, productData, topProductData] =
        await Promise.all([
          getEstablishments(),
          getProducts(),
          getTopProducts(),
        ]);

      setEstablishments(establishmentData);
      setProducts(productData);
      setTopProducts(topProductData);
    } catch (err) {
      console.log("Erro ao carregar dados:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // --- Filters ---

  // Free Shipping
  const freeShipping = useMemo(() => {
    return establishments.filter((e) => e.shippingCost === 0);
  }, [establishments]);

  // Open Now
  const openNow = useMemo(() => {
    return establishments.filter((e) => isOpenNow(e.openingHours));
  }, [establishments]);

  const openEstablishment = (id) => {
    navigate(`/establishment/${id}`);
  };

  const openProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Header
        orderLength={0}
        products={products}
        establishments={establishments}
      />
      <NoticePill />
      <Container>
        <Feed>
          {freeShipping.length > 0 && (
            <CategoryList>
              <h2>Entrega Grátis</h2>
              <Carousel>
                {freeShipping.map((establishment) => (
                  <CardEstablishment
                    key={establishment._id}
                    establishment={establishment}
                    onClick={() => openEstablishment(establishment._id)}
                  />
                ))}
              </Carousel>
            </CategoryList>
          )}

          {openNow.length > 0 && (
            <CategoryList>
              <h2>Aberto Agora</h2>
              <Carousel>
                {openNow.map((establishment) => (
                  <CardEstablishment
                    key={establishment._id}
                    establishment={establishment}
                    onClick={() => openEstablishment(establishment._id)}
                  />
                ))}
              </Carousel>
            </CategoryList>
          )}

          {topProducts.length > 0 && (
            <CategoryList>
              <h2>Top 10 mais Vendidos</h2>
              <Carousel>
                {topProducts.map((product, index) => (
                  <CardProduct
                    key={product._id}
                    product={product}
                    rank={index + 1}
                    onClick={() => openProduct(product._id)}
                  />
                ))}
              </Carousel>
            </CategoryList>
          )}
        </Feed>
      </Container>
    </>
  );
};

export default Home;
