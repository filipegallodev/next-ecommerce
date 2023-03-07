import React, { useState, useEffect } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import styled from "styled-components";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeFavorite, saveFavorite } from "@/store/reducers/favorite";
import { useAppSelector } from "@/hooks/useAppSelector";

const ProductFavoriteIcon = (data: IProduct) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: IReduxState) => state.favorite);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (items.find((item) => item.id === data.id)) return setFavorite(true);

    return setFavorite(false);
  }, [items, data]);

  return (
    <FavoriteIconContainer>
      {favorite ? (
        <FavoriteRoundedIcon
          className="filled"
          onClick={() => dispatch(removeFavorite(data))}
        />
      ) : (
        <FavoriteBorderRoundedIcon
          onClick={() => dispatch(saveFavorite(data))}
        />
      )}
    </FavoriteIconContainer>
  );
};

const FavoriteIconContainer = styled.div`
  position: absolute;
  margin: 0.5rem;
  color: #f88;
  cursor: pointer;
  transition: 0.2s;
  transform: scale(1.25);
  &:hover {
    transform: scale(1.5);
    color: #f00;
  }
  & .filled {
    color: #f00;
  }
`;

export default ProductFavoriteIcon;
