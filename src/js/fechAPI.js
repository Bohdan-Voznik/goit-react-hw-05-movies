const axios = require('axios');

const API_KEY = '410621b9cfc5cc5268eeae574da75634';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrending() {
  const options = {
    method: 'get',
    baseURL: BASE_URL,
    url: 'trending/movie/week',
    params: {
      api_key: API_KEY,
    },
  };

  const resonse = await axios(options);
  options.url = '/genre/movie/list';
  const response = await axios(options);
  const genresList = response.data.genres;

  const films = resonse.data.results.map(
    ({ poster_path, genre_ids, id, original_title, release_date }) => {
      const genres = genre_ids
        .map(idFilmmGenre => genresList.find(({ id }) => id === idFilmmGenre))
        .map(element => element.name)
        .join(', ');
      return {
        id,
        title: original_title,
        img:
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://bflix.biz/no-poster.png',
        reliseData: release_date === undefined ? '' : release_date.slice(0, 4),
        genres,
      };
    }
  );
  return films;
}

export async function fetchMovieById(id) {
  const options = {
    method: 'get',
    baseURL: BASE_URL,
    url: `/movie/${id}`,
    params: {
      api_key: API_KEY,
    },
  };

  const resonse = await axios(options);
  const {
    vote_average,
    genres: oldGenres,
    overview,
    original_title: title,
    poster_path,
  } = resonse.data;
  const useScore = vote_average * 10;
  const genres = oldGenres.map(({ name }) => name).join(', ');

  return {
    useScore,
    genres,
    overview,
    title,
    img:
      poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://bflix.biz/no-poster.png',
  };
}

export async function fetchMoviesByTag(tag) {
  const options = {
    method: 'get',
    baseURL: BASE_URL,
    url: '/search/movie',
    params: {
      api_key: API_KEY,
      query: tag,
    },
  };

  const resonse = await axios(options);
  options.url = '/genre/movie/list';
  const response = await axios(options);
  const genresList = response.data.genres;

  const films = resonse.data.results.map(
    ({ poster_path, genre_ids, id, original_title, release_date }) => {
      const genres = genre_ids
        .map(idFilmmGenre => genresList.find(({ id }) => id === idFilmmGenre))
        .map(element => element.name)
        .join(', ');
      return {
        id,
        title: original_title,
        img:
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://bflix.biz/no-poster.png',
        reliseData: release_date === undefined ? '' : release_date.slice(0, 4),
        genres,
      };
    }
  );
  return films;
}

export async function fetchCast(id) {
  const options = {
    method: 'get',
    baseURL: BASE_URL,
    url: `/movie/${id}/credits`,
    params: {
      api_key: API_KEY,
    },
  };

  const resonse = await axios(options);
  const cast = resonse.data.cast.map(
    ({ cast_id: id, name, character, profile_path }) => {
      const img =
        profile_path !== null
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : 'https://bflix.biz/no-poster.png';

      return { id, name, character, img };
    }
  );
  return cast;
}

export async function fetchReviews(id) {
  const options = {
    method: 'get',
    baseURL: BASE_URL,
    url: `/movie/${id}/reviews`,
    params: {
      api_key: API_KEY,
    },
  };

  const resonse = await axios(options);
  const reviews = resonse.data.results.map(({ id, author, content }) => {
    return { id, author, content };
  });
  return reviews;
}
