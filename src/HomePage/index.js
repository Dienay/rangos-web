import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

import {
  Container,
  SearchInput,
  EstablishmentList,
  CardRestaurante,
  CardImagem,
  CardTexto,
  CardNome,
  CardInfo,
} from './styles';

import Logo from '../Images/logo-rangos.svg';
import Header from '../Components/Header';

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

  const isEstablishmentOpen = (openingHours) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

    for (const hourRange of openingHours) {
      if (
        hourRange.openDays.includes(days[currentDay]) ||
        hourRange.openDays.includes('Every day')
      ) {
        for (const hour of hourRange.hours) {
          const [openHour, openMinute] = hour.open.split(':').map(Number);
          const [closeHour, closeMinute] = hour.close.split(':').map(Number);

          const openTime = openHour * 60 + openMinute;
          const closeTime = closeHour * 60 + closeMinute;

          if (openTime < closeTime) {
            if (currentTime >= openTime && currentTime <= closeTime) {
              return true;
            }
          } else {
            if (currentTime >= openTime || currentTime < closeTime) {
              return true;
            }
          }
        }
      }
    }
    return false;
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
                return (
                  <CardRestaurante
                    key={establishment._id}
                    onClick={() => clicaestablishment(establishment.id)}
                  >
                    <CardImagem src={Logo} alt="Foto do establishment" />
                    <CardTexto>
                      <CardNome>{establishment.name}</CardNome>
                      <CardInfo>
                        {isEstablishmentOpen(establishment.openingHours) ? (
                          <span className="opened">aberto</span>
                        ) : (
                          <span className="closed">fechado</span>
                        )}
                      </CardInfo>
                      <CardInfo>
                        {establishment.shipping
                          ? `R$${establishment.shipping},00`
                          : 'Frete grátis'}
                      </CardInfo>
                    </CardTexto>
                  </CardRestaurante>
                );
              })}
            </EstablishmentList>
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;
