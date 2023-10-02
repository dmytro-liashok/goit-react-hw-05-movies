import API_KEY from './api-key';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again!');
    throw error;
  }
}

export async function getDetailsMovies(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again!');
    throw error;
  }
}

export async function getMovieCast(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again! ');
    throw error;
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again!');
    throw error;
  }
}

export async function getMovieSearch(movieQuery, page) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieQuery}&page=${page}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again!');
    throw error;
  }
}

export async function getGenresMovieList(movieQuery, page) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error('Oops! Something went wrong! Please try again!');
    throw error;
  }
}

// export default async function getMovies({
//   movieId = '',
//   searchParameter = '',
//   searchParameterPrimary = '',
//   movieQuery = '',
// }) {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/${searchParameterPrimary}movie${movieId}${searchParameter}?api_key=${API_KEY}${movieQuery}`
//     );
//     return response.data;
//   } catch (error) {
//     toast.error('Oops! Something went wrong! Please try again!');
//   }
// }
