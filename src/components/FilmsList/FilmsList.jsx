 
import { FilmsListItem } from "components/FilmsListItem/FilmsListItem"
import cssTFD from './FilmsList.module.css'


export default function FilmsList ({filmData, sectionTitle}) {

    return <div className={cssTFD.conteiner}>
        <h1 className={cssTFD.title}>{sectionTitle}</h1>
        <ul className={cssTFD.list}>
           {filmData.map(film => {
                return <FilmsListItem  key={film.id} id={film.id} title={film.title} poster={film.poster_path} />
           })} 
        </ul>

    </div>
}