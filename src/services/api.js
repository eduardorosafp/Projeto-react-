// Url da API: https://api.themoviedb.org/3/movie/now_playing?api_key=ae7860566be811bfda6231c351201cbe&language=pt-BR
// Url da API: https://api.themoviedb.org/3/


import axios from 'axios'; 

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});
export default api;