import React, { useState } from "react";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import * as S from "./movieList-styles";

const MovieList = ({ title, items, movieId }) => {
  const [scrollX, setScrollX] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <S.MovieRow>
      <h2>{title}</h2>
      <S.MovieRowRight onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </S.MovieRowRight>
      <S.MovieRowLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </S.MovieRowLeft>
      <S.MovieRowListArea>
        <S.MovieRowList
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <S.MovieRowItem key={key}>
                <S.MovieRowImage
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="poster"
                />
              </S.MovieRowItem>
            ))}
        </S.MovieRowList>
      </S.MovieRowListArea>
    </S.MovieRow>
  );
};
export default MovieList;
