import { getFilmInfoReviews } from "api/getFilms"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import cssReviews from './Reviews.module.css'

export default function Reviews () {
    const {movieId} = useParams()
    const [reviewsContent, setReviewsContent] = useState([])

    useEffect(()=> {
        reviewsData()
        async function reviewsData () {
            const data = await getFilmInfoReviews(movieId)
            setReviewsContent(data.results)
            
        }
    },[movieId])

    return <>
        {!reviewsContent.length ? <p>Наразі стрічка не має оглядів</p> : 
            <ol className={cssReviews.reviewsList}>
                {reviewsContent && reviewsContent.map(el => (
                    <li key={el.id} className={cssReviews.item}>
                        <h4>Автор: {el.author}</h4>
                        <p>{el.content}</p>
                    </li>
                ))}       
            </ol>
        }
    </>

}