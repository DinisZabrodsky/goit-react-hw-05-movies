// https://api.themoviedb.org/3/trending/movie/day?api_key=0be02f5f058327c2bd49d504ef7b13d9
// 0be02f5f058327c2bd49d504ef7b13d9
// https://image.tmdb.org/t/p/w500//3IhGkkalwXguTlceGSl8XUJZOVI.jpg
import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY =  '0be02f5f058327c2bd49d504ef7b13d9'



export async function getFilmsOfDay (page) {
    const {data} = await axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    return data
}