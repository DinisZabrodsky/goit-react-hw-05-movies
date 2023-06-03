import { useLocation, useParams } from "react-router-dom"

export default function MovieDetailsPage () {
    const location = useLocation()
    const {movieId} = useParams()
    console.log(movieId)
    console.log(location)
    return <>

    {/* <Link
				to={location.state ? location.state : '/'}
				className='btn btn-success m-2'
			>
				Back
			</Link> */}
        <div>MovieDetailsPage</div>
    </>
}