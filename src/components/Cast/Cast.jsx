import { getFilmInfoCast } from "api/getFilms"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import cssCast from './Cast.module.css'

export default function Cast () {

    const {movieId} = useParams()
    const [actorsContent, setActorsContent] = useState([])

    useEffect(()=> {
        reviewsData()
        async function reviewsData () {
            const data = await getFilmInfoCast(movieId)
            setActorsContent(data.cast)
            
        }
    },[movieId])

    return <>
    <ul className={cssCast.actorList}>
        {actorsContent && actorsContent.map(el => (
            <li key={el.cast_id} className={cssCast.actorIten}>
                <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} />
                <h4>{el.name}</h4>
                <p>{el.character}</p>
            </li>
        ))}
    </ul>
        
    </>
}