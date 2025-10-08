import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../api/productService";
import { getEstablishments } from "../../api/establishmentService";

import { Container, EstablishmentList, Feed } from "./styles";

import { Loading, Header, CardEstablishment } from "../../components";

const Home = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [establishmentList, setEstablishmentList] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const products = await getProducts();

      setProductList(products);
    } catch (err) {
      console.log("Erro ao carregar produtos:", err);
    }
  }, []);

  const loadEstablishments = useCallback(async () => {
    try {
      const establishments = await getEstablishments();

      setEstablishmentList(establishments);
    } catch (err) {
      console.log("Erro ao carregar estabelecimentos:", err);
    }
  }, []);

  const openEstablishment = (id) => {
    navigate(`/establishment/${id}`);
  };

  useEffect(() => {
    loadProducts();
    loadEstablishments();
  }, [loadProducts, loadEstablishments]);

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
          <Container>
            <Feed>
              <EstablishmentList>
                {Array.isArray(establishmentList) &&
                  establishmentList.map((establishment) => {
                    return (
                      <CardEstablishment
                        key={establishment._id}
                        establishment={establishment}
                        onClick={() => openEstablishment(establishment._id)}
                      />
                    );
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
