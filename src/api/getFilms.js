// https://api.themoviedb.org/3/trending/movie/day?api_key=0be02f5f058327c2bd49d504ef7b13d9
// 0be02f5f058327c2bd49d504ef7b13d9
// https://image.tmdb.org/t/p/w500//3IhGkkalwXguTlceGSl8XUJZOVI.jpg
import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY =  '0be02f5f058327c2bd49d504ef7b13d9'


// Пошук популярних філтмі за день

export async function getFilmsOfDay (page) {
    const {data} = await axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    return data
}

// Пошук фільмів за ключовим словом
export async function getSearchFilms (searchQuery, page) {
    const {data} = await axios(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}`)
    return data
}

// Пошук детальної інформації про фільм
export async function getFilmInfo (id) {
    const {data} = await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    return data
}