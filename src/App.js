import React, { useState, useEffect } from "react";

import { GlobalStyles } from "./GlobalStyles";

import Tmdb from "./API/Tmdb";

import MovieList from "./components/MovieList/movieList-component";
import FeaturedMovie from "./components/FeaturedMovie/featuredMovie-component";
import Header from "./components/Header/header-component";
import Footer from "./components/Footer/footer-component";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //catch the entire movie list
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //catch the featured movie
      const originals = list.filter((i) => i.slug === "originals");
      const randonChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randonChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Header black={blackHeader} />
      {!!featuredData && <FeaturedMovie item={featuredData} />}
      <section>
        {movieList.map((item, key) => (
          <MovieList
            key={key}
            title={item.title}
            items={item.items}
            movieId={item.id}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
