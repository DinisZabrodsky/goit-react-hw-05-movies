import { Suspense, useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

import { getFilmInfo } from "../api/getFilms"
import { FilmMoreInfo } from "components/FilmMoreInfo/FilmMoreInfo"

export default function MovieDetailsPage () {
    const location = useLocation()
    const {movieId} = useParams()
    const [aboutFilm, setAboutFilm] = useState({})

    useEffect(() => {
        filmsInfo()

        async function filmsInfo() {
            const filmsData = await getFilmInfo(movieId)
            setAboutFilm(filmsData)
        } 
    },[movieId])
    
    return <div className="pageConteiner">
            <Link className="pageBtnBack" to={location.state ? location.state : '/'}>
				Back
			</Link>
            <FilmMoreInfo aboutFilm={aboutFilm}/>

            <ul>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </ul>

            <Suspense>
                <Outlet/>
            </Suspense>

    </div>
}