import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

import { Container, SearchInput, EstablishmentList } from './styles';

import Logo from '../Images/logo-rangos.svg';
import Header from '../Components/Header';
import CardEstablishment from '../Components/CardEstablishment';

const HomePage = () => {
  const navigate = useNavigate();

  const baseUrl = 'http://localhost:3003';

  const [establishmentList, setEstablishmentList] = useState([]);
  const [search, setSearch] = useState('');

  const getRestaurantes = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/establishments`);

      setEstablishmentList(response.data.establishments);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const clicaestablishment = (id) => {
    navigate(`/restaurantes/${id}`);
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
            <EstablishmentList>
              {filteredEstablishments.map((establishment) => {
                return <CardEstablishment establishment={establishment} />;
              })}
            </EstablishmentList>
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;
