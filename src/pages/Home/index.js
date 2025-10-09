import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { getProducts, getEstablishments, getOrders } from "../../api";

import { Container, EstablishmentList, Feed } from "./styles";

import {
  Loading,
  Header,
  NoticePill,
  CardEstablishment,
} from "../../components";

const Home = () => {
  const navigate = useNavigate();


  const [products, setProducts] = useState([]);
  const [establishments, setEstablishments] = useState([]);
  const [orders, setOrders] = useState([]);

  // --- Data Fetching ---
  const loadData = useCallback(async () => {
    try {
      const [establishmentData, productData, orderData] = await Promise.all([
        getEstablishments(),
        getProducts(),
        getOrders(),
      ]);

      setEstablishments(establishmentData);
      setProducts(productData);
      setOrders(orderData);
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
    return establishments.filter((e) => e.shipping === 0);
  }, [establishments]);

  // Open Now
  const openNow = useMemo(() => {
    const now = new Date();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = now.toTimeString().slice(0, 5);

    return establishments.filter((e) =>
      e.openingHours?.some(
        (period) =>
          period.openDays.includes(currentDay) &&
          period.hours.some(
            (hour) => currentTime >= hour.open && currentTime <= hour.close,
          ),
      ),
    );
  }, [establishments]);

  // Best Sellers
  const mostSoldProducts = useMemo(() => {
    const salesCount = {};

    orders.forEach((order) => {
      order.products.forEach((product) => {
        const id = String(product.productId);
        salesCount[id] = (salesCount[id] || 0) + product.quantity;
      });
    });

    return [...products]
      .map((product) => ({
        ...product,
        totalSold: salesCount[String(product._id)],
      }))
      .filter((product) => product.totalSold > 0)
      .sort((a, b) => b.totalSold - a.totalSold)
      .slice(0, 10);
  }, [orders, products]);

  const openEstablishment = (id) => {
    navigate(`/establishment/${id}`);
  };


  return (
    <>
      {!establishmentList || establishmentList.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Header
            orderLength={0}
            products={productList}
            establishments={establishmentList}
          />
          <NoticePill />
          <Container>
            <Feed>
      <NoticePill />
          {freeShipping.length > 0 && (
            <>
              <h2>Entrega Grátis</h2>
              <EstablishmentList>
                {freeShipping.map((establishment) => (
                  <CardEstablishment
                    key={establishment._id}
                    establishment={establishment}
                    onClick={() => openEstablishment(establishment._id)}
                  />
                ))}
              </EstablishmentList>
            </>
          )}

          {openNow.length > 0 && (
            <>
              <h2>Aberto Agora</h2>
              <EstablishmentList>
                {openNow.map((establishment) => (
                  <CardEstablishment
                    key={establishment._id}
                    establishment={establishment}
                    onClick={() => openEstablishment(establishment._id)}
                  />
                ))}
              </EstablishmentList>
            </>
          )}
          {mostSoldProducts.length > 0 && (
            <>
              <h2>Mais Vendidos</h2>
              <EstablishmentList>
                {mostSoldProducts.map((product) => {
                  return <div key={product._id}>{product.name}</div>;
                })}
              </EstablishmentList>
            </Feed>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
