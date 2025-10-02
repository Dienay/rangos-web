import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, SearchInput, EstablishmentList, Feed } from "./styles";

import { Loading, Header, CardEstablishment } from "../../components";
import { env } from "../../utils";

const HomePage = () => {
  const navigate = useNavigate();

  const { API_URL } = env;

  const [establishmentList, setEstablishmentList] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredEstablishments = establishmentList.filter((establishment) =>
    establishment.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    getEstablishments();
  }, [getEstablishments]);

  return (
    <>
      {!establishmentList || establishmentList.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Header orderLength={0} />
          <Container>
            <Feed>
              <EstablishmentList>
                {filteredEstablishments.map((establishment) => {
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
