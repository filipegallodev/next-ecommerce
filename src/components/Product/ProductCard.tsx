import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addProduct } from "@/store/reducers/cart";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Rating from "@mui/material/Rating";

const ProductCard = (data: IProduct) => {
  const { title, price, image, rating, id } = data;
  const dispatch = useAppDispatch();

  const [addedOnCart, setAddedOnCart] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Buy");
  const buyButton = useRef<HTMLButtonElement>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const router = useRouter();

  function handleBuyButton() {
    dispatch(addProduct(data));
    setButtonText("Added to cart!");
    setAddedOnCart(true);
    setTimeout(() => {
      setAddedOnCart(false);
      setButtonText("Buy");
    }, 750);
  }

  return (
    <ProductContainer>
      <MainContent onClick={() => router.push(`/product/${id}`)}>
        <ImageContainer>
          {imageLoading && <ImageSkeleton />}
          <Image
            src={image}
            alt={title}
            onLoad={() => setImageLoading(false)}
          />
        </ImageContainer>
        <InfoContainer>
          <TitleAndPriceContainer>
            <Title>
              {title.length >= 41 ? `${title.slice(0, 40)}...` : title}
            </Title>
            <Price>${price}</Price>
          </TitleAndPriceContainer>
          <RatingContainer>
            {rating.rate}
            <Rating
              name="half-rating-read"
              defaultValue={rating.rate}
              precision={0.5}
              readOnly
            />
            {rating.count}
          </RatingContainer>
        </InfoContainer>
      </MainContent>
      <BuyButton
        ref={buyButton}
        onClick={handleBuyButton}
        disabled={addedOnCart}
      >
        <AddShoppingCartRoundedIcon />
        {buttonText}
      </BuyButton>
    </ProductContainer>
  );
};

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProductContainer = styled.li`
  background-color: #f5f5f5;
  height: 400px;
  width: 360px;
  border-radius: 8px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;
  animation: ${fade} 0.3s linear forwards;
  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  }
`;

const MainContent = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  grid-area: 1/1;
  margin: 24px auto;
  max-height: 172px;
`;

const skeleton = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const ImageSkeleton = styled.div`
  grid-area: 1/1;
  height: 220px;
  width: 360px;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 12px;
`;

const TitleAndPriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const Price = styled.span`
  padding: 8px;
  background-color: #444;
  border-radius: 4px;
  color: #fc5;
  font-size: 1rem;
  font-weight: 500;
`;

export const RatingContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin: 8px 0;
  color: #333;
  font-weight: 500;
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #3747d6;
  width: 100%;
  padding: 16px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #1425c0;
  }
  &:disabled {
    background-color: #333;
    color: #fc5;
    cursor: not-allowed;
  }
`;

export default ProductCard;
