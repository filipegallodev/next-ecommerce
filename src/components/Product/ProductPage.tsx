import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BuyButton, RatingContainer } from "./ProductCard";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addProduct } from "@/store/reducers/cart";
import { fetchOneProduct } from "@/store/reducers/product";
import Loading from "../Loading";
import { Rating } from "@mui/material";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading } = useAppSelector((state: IReduxState) => state.product);
  const { product } = useAppSelector((state: IReduxState) => state.product);
  const dispatch = useAppDispatch();
  const [addedOnCart, setAddedOnCart] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Buy");
  const buyButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (id === null || id === undefined) return;
    dispatch(fetchOneProduct(String(id)));
  }, [dispatch, id]);

  function handleBuyButton() {
    dispatch(addProduct(product));
    setButtonText("Added to cart!");
    setAddedOnCart(true);
    setTimeout(() => {
      setAddedOnCart(false);
      setButtonText("Buy");
    }, 750);
  }

  if (!product)
    return (
      <ReturnButton onClick={router.back}>
        <ArrowBackIosNewRoundedIcon />
      </ReturnButton>
    );
  if (loading) return <Loading />;
  return (
    <MainContainer>
      <ReturnButton onClick={router.back}>
        <ArrowBackIosNewRoundedIcon />
      </ReturnButton>
      <ProductSection>
        <ImageContainer>
          <Image src={product.image} alt={product.title} />
        </ImageContainer>
        <InfoContainer>
          <div>
            <Category>{product.category.toUpperCase()}</Category>
            <Title>{product.title}</Title>
            <RatingContainer>
              {product.rating.rate}
              <Rating
                name="half-rating-read"
                defaultValue={product.rating.rate}
                precision={0.5}
                readOnly
              />
              {product.rating.count}
            </RatingContainer>
            <Description>{product.description}</Description>
          </div>
          <BuyButton
            style={{ borderRadius: "6px" }}
            ref={buyButton}
            onClick={handleBuyButton}
            disabled={addedOnCart}
          >
            <AddShoppingCartRoundedIcon />
            {buttonText}
          </BuyButton>
        </InfoContainer>
      </ProductSection>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 32px auto;
  @media (max-width: 1600px) {
    margin: 32px;
  }
`;

const ReturnButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 6px 32px;
  border-radius: 6px;
  margin-bottom: 32px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #444;
    color: #fb5;
  }
`;

const ProductSection = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border: 1px solid #333;
  border-radius: 6px;
  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  max-height: 190px;
  max-width: 280px;
  @media (max-width: 400px) {
    max-width: 220px;
    max-height: 160px;
  }
`;

const InfoContainer = styled.div`
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 610px) {
    height: auto;
  }
`;

const Category = styled.p`
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin: 32px 0;
`;

export default ProductPage;
