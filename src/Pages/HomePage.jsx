import { useEffect, useState } from "react"
import { getFilmsOfDay } from "../api/getFilms"

import TrendingForDay from "components/TrendingForDay/TrendingForDay";
import { Loading } from "components/Loading/Loading";
import { AddMore } from "components/AddMore/AddMore";

export function HomePage () {
    
    const [filmList, setFilmList] = useState([])
    const [search, setSearch] = useState({search: "", page: 1, get: false})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (filmList.length === 0 || search.get === true ){
            

            const responce = async () => {
                const filmBase = await getFilmsOfDay(search.page)

                if (search.get === true ) {
                    setFilmList((prev) => [...prev, ...filmBase.results])
                    setSearch((prev) => {return{...prev, get: false}})
                    console.log("get")
                } else {setFilmList(filmBase.results)}

                
            }
        
            responce()
            console.log('ok')
        }
        setTimeout(() => {setLoading(false)},250)
        

    },[filmList, search])

    const addMoreFn = () => {
        return setSearch((prev) => { return {...prev, page: prev.page + 1, get: true}})
    }

    return <>
        <div>Home HomePage</div>
        <TrendingForDay filmData={filmList}/>


        {loading || filmList.length === 0 ? <Loading /> : <AddMore addMoreFn={addMoreFn}/>} 
    </>
}