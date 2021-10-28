const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
        )
      },
      {
        slug: "trending",
        title: "Recommended For You",
        items: await basicFetch(
          `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await basicFetch(
          `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${process.env.REACT_APP_API_KEY}`
        )
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${process.env.REACT_APP_API_KEY}`
        )
      }
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  }
};
