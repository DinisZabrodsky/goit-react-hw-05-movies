import { TrendingForDayList } from "components/TrendingForDayList/TrendingForDayList"
import { getFilmsOfDay } from "../../api/getFilms"
import { useEffect, useState } from "react"


export default function TrendingForDay () {

    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        if (filmList.length === 0){

            const responce = async () => {
                const filmBase = await getFilmsOfDay()
                setFilmList(filmBase.results)
            }
        
            responce()
            console.log('ok')
        }
    },[filmList])

    console.log(filmList)

    return <>
        <h1>Top movies today</h1>
        <ul>
           {filmList.map(film => {
                return <TrendingForDayList key={film.id} title={film.title}/>
           })} 
        </ul>

    </>
}