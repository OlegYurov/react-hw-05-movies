import axios from 'axios'

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';
const PARAM = {
  trending: '/trending/all/day',
  search: '/search/movie',
  movieID: '/movie',
  reviews: '/reviews',
  credits: '/credits',
};

export const getTrendingMovies = async () => {
    const { data } = await axios(`${BASE_URL}${PARAM.trending}?api_key=${API_KEY}`)
    return data
};

export const getMovieId = async (id) => {
    const { data } = await axios(`${BASE_URL}${PARAM.movieID}/${id}?api_key=${API_KEY}`)
    return data;
}

export const getCast = async (id) => {
    const { data } = await axios(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
 
    return data;
}
export const getReviews = async (id) => {
    const { data } = await axios(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
 
    return data;
}

export const getMovieSearch = async (request) => {
    const { data } = await axios(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${request}`);
 
    return data;
}