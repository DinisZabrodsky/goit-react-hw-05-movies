
import { TrendingForDayList } from "components/TrendingForDayList/TrendingForDayList"
import cssTFD from './TrendingForDay.module.css'


export default function TrendingForDay ({filmData}) {

    return <div className={cssTFD.conteiner}>
        <h1 className={cssTFD.title}>Top movies today</h1>
        <ul className={cssTFD.list}>
           {filmData.map(film => {
                return <TrendingForDayList key={film.id} id={film.id} title={film.title} poster={film.poster_path} />
           })} 
        </ul>

    </div>
}