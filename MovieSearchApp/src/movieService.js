import axios from 'axios';

const API_KEY = 'fba2412e';
const BASE_URL = 'http://www.omdbapi.com/';

const movieService = {
  searchMovies: async (searchTerm) => {
    const { data } = await axios.get(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const movies = data.Search || [];

  
    const detailedMovies = await Promise.all(
      movies.map(movie => axios.get(`${BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`))
    );

    return detailedMovies.map(res => res.data);
  },
};

export default movieService;
