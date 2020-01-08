import axios from 'axios';

const BASE_URL = "https://yts.lt/api/v2";
const LIST_MOVIE_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIE_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  return movies;
}

export const getMovie = async movie_id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id
    }
  });

  return movie;
}

export const getSuggestions = async movie_id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id
    }
  });

  return movies;
}