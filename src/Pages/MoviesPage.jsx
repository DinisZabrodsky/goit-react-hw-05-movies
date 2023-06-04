import { useEffect, useState } from "react"
import { getSearchFilms } from "../api/getFilms"


import FilmsList from "components/FilmsList/FilmsList";
import { Loading } from "components/Loading/Loading";
import { AddMore } from "components/AddMore/AddMore";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage () {

    const [searchfilmList, setSearchFilmList] = useState([])
    const [firstRender, setFirstRender] = useState(true)
    const [search, setSearch] = useState({search: "", page: 1, get: false, loading: false})
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('query') ?? ''
    

    useEffect(() => {
        if(searchQuery !== "" && firstRender) {
            console.log(searchQuery)
            setFirstRender(false)
            setSearch({page: 1, search: searchQuery, get: true, loading: true})
            return
        }
    },[searchQuery, firstRender])

    useEffect(() => {
        
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

    const searchSubmit = (value) => {
        if(value === search.search) {
            return  alert(`Ви ввели запит "${value}" повторно`)
        } else {
            setSearch({page: 1, search: value, get: true, loading: true})
            setSearchParams({query: value})
        }
    }

    const addMoreFn = () => {
        return setSearch((prev) => { return {...prev, page: prev.page + 1, get: true, loading: true}})
    }

    return <>
        <SearchForm searchValue={searchQuery} searchSubmit={searchSubmit}/>

        {searchfilmList.length !== 0 && <FilmsList filmData={searchfilmList} sectionTitle={`Результати пошуку за запитом "${search.search}"`}/>}

        { search.loading ? <Loading /> : (searchfilmList.length !== 0 &&  <AddMore addMoreFn={addMoreFn}/>)}
    </>
}