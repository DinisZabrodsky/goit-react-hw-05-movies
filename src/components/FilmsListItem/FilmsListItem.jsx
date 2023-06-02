import { Link, useLocation } from "react-router-dom"

import cssTFDL from "./FilmsListItem.module.css"

export function FilmsListItem ({id, title, poster}) {
    const pageLocation = useLocation()

    return<>
        <Link to={`movie/${id}`} state={pageLocation}>
            <li className={cssTFDL.listItem}>
                <img className={cssTFDL.listItemIMG}src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} width={300}/>
                <div className={cssTFDL.description}>
                    <h3>{title}</h3>
                </div>
            </li>
        </Link>
    </>
}