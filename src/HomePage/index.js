import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

import { Container, SearchInput, EstablishmentList, Feed } from './styles';

import Header from '../Components/Header';
import CardEstablishment from '../Components/CardEstablishment';
import { API_URL } from '../config';

const HomePage = () => {
  const navigate = useNavigate();

  const baseUrl = API_URL;

  const [establishmentList, setEstablishmentList] = useState([]);
  const [search, setSearch] = useState('');

  const getRestaurantes = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/establishments`);

      setEstablishmentList(response.data.establishments);
    } catch (err) {
      console.log(err);
    }
  }, [baseUrl]);

  const openEstablishment = (id) => {
    navigate(`/establishments/${id}`);
  };

  const filteredEstablishments = establishmentList.filter((establishment) =>
    establishment.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    getRestaurantes();
  }, [getRestaurantes]);

  return (
    <>
      {!establishmentList || establishmentList.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Header orderLength={0} />
          <Container>
            <SearchInput
              type="text"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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
