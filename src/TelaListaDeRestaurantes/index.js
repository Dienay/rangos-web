import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedRoute from "../Hooks/useProtectedRoute";

import Loading from "../Components/Loading/index";
import CarrinhoContext from "../Contexts/CarrinhoContext";

import {
  Container,
  EstablishmentInfo,
  CardImagemRestaurante,
  CardProduto,
  CardImagem,
  CardTexto,
  CardNome,
  CardDescription,
  CardPrice,
  CardInfo,
  CardTextoDelivery,
  BtnQuantidade,
  BtnAlteraQuantidade,
  BtnRemoveQuantidade,
  BoxQuantidade,
  BoxTexto,
  BoxSelect,
  BoxBtn,
  ProductList,
  EstablishmentLogo,
} from "./styles";

import iconeVoltar from "../Images/back.svg";
import { API_URL } from "../config";
import Header from "../Components/Header";

function TelaListaDeRestaurantes() {
  const navigate = useNavigate();
  const pathParams = useParams();

  const baseUrl = API_URL;

  const [establishment, setEstablishment] = useState();
  const [products, setProducts] = useState();
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
  const [boxQuantidade, setBoxQuantidade] = useState(false);

  const carrinhoContext = useContext(CarrinhoContext);

  const getRestaurantes = useCallback(async () => {
    const id = pathParams.id;

    try {
      const response = await axios.get(
        `${baseUrl}/establishments/${id}/products`,
      );
      setEstablishment(response.data.establishment);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }, [baseUrl, pathParams.id]);

  useEffect(() => {
    getRestaurantes();
  }, [getRestaurantes]);

  const abrirBoxQuantidade = (id) => {
    const indexId = products.findIndex((produto) => {
      return produto.id === id;
    });

    const produto = products[indexId];

    setBoxQuantidade(produto);
  };

  // const adicionaQuantidadeProduto = (
  //   produto,
  //   quantidadeSelecionada,
  //   restauranteId,
  //   restauranteName,
  // ) => {
  //   if (quantidadeSelecionada > 0) {
  //     carrinhoContext.dispatch({
  //       type: 'ADICIONA_PRODUTO_CARRINHO',
  //       produto: produto,
  //       quantidadeSelecionada: quantidadeSelecionada,
  //       restauranteId: restauranteId,
  //     });
  //   }

  //   setBoxQuantidade(false);
  //   setQuantidadeSelecionada(0);
  // };
  // const contolaQuantidadeProduto = (e) => {
  //   setQuantidadeSelecionada(e.target.value);
  // };

  // const removerProduto = (produtoId) => {
  //   carrinhoContext.dispatch({
  //     type: 'REMOVE_PRODUTO_CARRINHO',
  //     produtoId: produtoId,
  //   });
  // };

  const optionQuantidade = () => {
    let quantidades = [];
    for (let i = 0; i < 11; i++) {
      quantidades.push(i);
    }
    return (
      <>
        {quantidades.map((numero) => {
          return (
            <option key={numero} value={numero}>
              {numero}
            </option>
          );
        })}
      </>
    );
  };

  const clicaVoltar = () => {
    navigate(`/`);
  };

  return (
    <>
      {!establishment || establishment === "" ? (
        <Loading />
      ) : (
        <>
          <Header orderLength={0} />
          <Container>
            {establishment && (
              <EstablishmentInfo>
                <EstablishmentLogo
                  src={establishment.coverPhoto}
                  alt={establishment.name}
                />
                <CardNome>{establishment.name}</CardNome>
                <CardInfo CardInfo>{establishment.category}</CardInfo>
                <CardTextoDelivery>
                  <CardInfo>
                    Entrega: {establishment.deliveryTime} min - R$
                    {establishment.shipping},00
                  </CardInfo>
                </CardTextoDelivery>
                <CardInfo>
                  {establishment.address.map((address) => {
                    return (
                      <CardInfo>
                        <p>description: {address.description}</p>
                        <p>street: {address.street}</p>
                        <p>number: {address.number}</p>
                        <p>complement: {address.complement}</p>
                        <p>neighborhood: {address.neighborhood}</p>
                        <p>city: {address.city}</p>
                        <p>state: {address.state}</p>
                      </CardInfo>
                    );
                  })}
                </CardInfo>
              </EstablishmentInfo>
            )}

            {establishment && products && (
              <ProductList>
                <>{products.length}</>
                {products.map((produto) => {
                  return (
                    <CardProduto key={produto.id}>
                      <CardImagem src={produto.coverPhoto} alt={produto.name} />
                      <CardTexto>
                        <CardNome>{produto.name}</CardNome>
                        <CardDescription>{produto.description}</CardDescription>
                        <CardPrice>
                          R${produto.price.toFixed(2).replace(".", ",")}
                        </CardPrice>
                      </CardTexto>

                      {/* {carrinhoContext.carrinho.map((produtoCarrinho) => {
                            if (produto.id === produtoCarrinho.id) {
                              return (
                                <BtnQuantidade key={produtoCarrinho.id}>
                                  {produtoCarrinho.quantity}
                                </BtnQuantidade>
                              );
                            }
                            return null;
                          })} */}

                      {/* {carrinhoContext.carrinho.findIndex(
                            (produtoCarrinho) =>
                              produto.id === produtoCarrinho.id,
                          ) !== -1 ? (
                            <BtnRemoveQuantidade
                            // onClick={() => removerProduto(produto.id)}
                            >
                              remover
                            </BtnRemoveQuantidade>
                          ) : (
                            <BtnAlteraQuantidade
                              onClick={() => abrirBoxQuantidade(produto.id)}
                            >
                              adicionar
                            </BtnAlteraQuantidade>
                          )} */}

                      {boxQuantidade.id === produto.id && (
                        <BoxQuantidade>
                          <BoxTexto>Selecione a quantidade desejada</BoxTexto>
                          <BoxSelect
                            // onChange={contolaQuantidadeProduto}
                            value={quantidadeSelecionada}
                          >
                            {optionQuantidade()}
                          </BoxSelect>
                          <BoxBtn
                          // onClick={() =>
                          //   adicionaQuantidadeProduto(
                          //     produto,
                          //     quantidadeSelecionada,
                          //     establishment.id,
                          //     establishment.name,
                          //   )
                          // }
                          >
                            Adicionar ao carrinho
                          </BoxBtn>
                        </BoxQuantidade>
                      )}
                    </CardProduto>
                  );
                })}
              </ProductList>
            )}
          </Container>
        </>
      )}
    </>
  );
}

export default TelaListaDeRestaurantes;
