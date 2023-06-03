import { useEffect, useState } from "react"
import { getSearchFilms } from "../api/getFilms"


import FilmsList from "components/FilmsList/FilmsList";
import { Loading } from "components/Loading/Loading";
import { AddMore } from "components/AddMore/AddMore";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage () {

    const [searchfilmList, setSearchFilmList] = useState([])
    const [search, setSearch] = useState({search: "", page: 1, get: false, loading: false})
    const [searchParams, setSearchParams] = useSearchParams()
    

    useEffect(() => {
        console.log(search)

        if(search.get && search.search !== "") {
            responceSearch()

            async function responceSearch () {
                const data = await getSearchFilms(search.search, search.page)

                if(!data.results.length) {
                    alert(`За вишим запитом ${search.search}  результати не знайдені`)
                } else if(search.page === 1) {
                  setSearchFilmList(data.results)
                  setSearch((prev) => {return{...prev, get: false, loading: false}})
                } else {
                    setSearchFilmList((prev) => {return [...prev, ...data.results]})
                    setSearch((prev) => {return{...prev, get: false, loading: false}})
                }
            }
        }
    }, [search])

    const searchValue = (value) => {
        setSearch({page: 1, search: value, get: true, loading: true})
        setSearchParams({query: value})
    }

    const addMoreFn = () => {
        return setSearch((prev) => { return {...prev, page: prev.page + 1, get: true, loading: true}})
    }

    return <>
        <SearchForm searchValue={searchValue}/>

        {searchfilmList.length !== 0 && <FilmsList filmData={searchfilmList} sectionTitle={`Результати пошуку за запитом "${search.search}"`}/>}

        { search.loading ? <Loading /> : (searchfilmList.length !== 0 &&  <AddMore addMoreFn={addMoreFn}/>)}
    </>
}