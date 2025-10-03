import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, EstablishmentList, Feed } from "./styles";

import { Loading, Header, CardEstablishment } from "../../components";
import { env } from "../../utils";

const HomePage = () => {
  const navigate = useNavigate();

  const { API_URL } = env;

  const [productList, setProductList] = useState([]);
  const [establishmentList, setEstablishmentList] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);

      setProductList(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }, [API_URL]);

  const getEstablishments = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/establishments`);

      setEstablishmentList(response.data.establishments);
    } catch (err) {
      console.log(err);
    }
  }, [API_URL]);

  const openEstablishment = (id) => {
    navigate(`/establishment/${id}`);
  };

  useEffect(() => {
    getProducts();
    getEstablishments();
  }, [getEstablishments, getProducts]);

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
                {establishmentList.map((establishment) => {
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

export default HomePage;
