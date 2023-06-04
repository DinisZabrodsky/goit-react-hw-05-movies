import cssFMI from './FilmMoreInfo.module.css'

export function FilmMoreInfo ({aboutFilm}) {
    const {poster_path, original_title, vote_average, overview, genres, release_date} = aboutFilm

    return<>
        <div className={cssFMI.fmiConteiner}>
            <div className={cssFMI.fmiImgConteiner}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
            </div>

            <div className={cssFMI.fmiTextConteiner}>
                <h1>{original_title}</h1>
                <p>User Score: {vote_average}</p>
                <p>Release Date: {release_date}</p>

                <h3>Overview</h3>
                <p>{overview}</p>

                <h3>Genres</h3>
                <ul>
                    {genres && genres.map(el => (<li key={el.id}>
                        <p>{el.name}</p>
                    </li>))}
                </ul>
            </div>

        </div>
    </>
}