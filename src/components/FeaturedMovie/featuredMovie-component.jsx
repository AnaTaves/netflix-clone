import React from "react";

import * as S from "./featuredMovie-styles";

const FeaturedMovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);

  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let descr = item?.overview;
  if (descr?.length > 200) {
    descr = descr.substring(0, 200) + "...";
  }

  return (
    <S.Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <S.FeaturedVertical>
        <S.FeaturedHorizontal>
          <S.Name>{item.name}</S.Name>
          <S.FeaturedInfo>
            <S.FeaturedPoints>{item.vote_average} points</S.FeaturedPoints>
            <S.FeaturedYear>{firstDate.getFullYear()}</S.FeaturedYear>
            <S.FeaturedSeasons>
              {item.number_of_seasons} season
              {item.number_of_season !== 1 ? "s" : ""}
            </S.FeaturedSeasons>
          </S.FeaturedInfo>
          <S.FeaturedDescription>{descr}</S.FeaturedDescription>
          <S.FeaturedButtons>
            <S.FeaturedWatchButton href={`/watch/${item.id}`}>
              ► Watch Now
            </S.FeaturedWatchButton>
            <S.FeaturedMyListButton href={`/list/add/${item.id}`}>
              +Add To My List
            </S.FeaturedMyListButton>
          </S.FeaturedButtons>
          <S.FeaturedGenres>
            Genre: <strong> {genres.join(", ")} </strong>
          </S.FeaturedGenres>
        </S.FeaturedHorizontal>
      </S.FeaturedVertical>
    </S.Featured>
  );
};

export default FeaturedMovie;
