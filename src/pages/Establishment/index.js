import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Loading } from "../../components";
import { CarrinhoContext } from "../../contexts";

import {
  Container,
  EstablishmentInfo,
  CardProduto,
  CardImagem,
  CardTexto,
  CardNome,
  CardDescription,
  CardPrice,
  CardInfo,
  CardTextoDelivery,
  BoxQuantidade,
  BoxTexto,
  BoxSelect,
  BoxBtn,
  ProductList,
  EstablishmentLogo,
} from "./styles";

import { Header } from "../../components";
import { getEstablishmentById, getProductsByEstablishment } from "../../api";

function TelaListaDeRestaurantes() {
  const navigate = useNavigate();
  const pathParams = useParams();

  const [establishment, setEstablishment] = useState();
  const [products, setProducts] = useState();
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
  const [boxQuantidade, setBoxQuantidade] = useState(false);

  const carrinhoContext = useContext(CarrinhoContext);

  const loadData = useCallback(async () => {
    const id = pathParams.id;

    try {
      const [establishmentData, productList] = await Promise.all([
        getEstablishmentById(id),
        getProductsByEstablishment(id),
      ]);
      setEstablishment(establishmentData);
      setProducts(productList);
    } catch (err) {
      console.log(err);
    }
  }, [pathParams.id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log(establishment);
  console.log(products);

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
                    Entrega: {establishment.deliveryTime.min}-
                    {establishment.deliveryTime.max} min - R$
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
