import { useEffect, useState } from "react"
import cssSF from './SearchForm.module.css'


export function SearchForm ({searchValue, searchSubmit}) {

    const [inputValue, setInputValue] = useState('')
    const [firstRenderForm, setFirstRenderForm] = useState(true)

    useEffect(()=>{
        if(firstRenderForm) {
            setInputValue(searchValue)
            setFirstRenderForm(false)
            return
        }
    },[firstRenderForm, searchValue])

    const handelChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const handelForm = (event) => {
        event.preventDefault()
        
        if(!inputValue) {
            return  alert('Введіть запит')
        } else {
            searchSubmit(inputValue)
            setFirstRenderForm(false)
        }


    }

    return (
        <form className={cssSF.form} action="query" onSubmit={handelForm}>
            <input type="text" onChange={handelChange} value={inputValue}/>

            <button type='submit'>Пошук</button>
        </form>  
    )
}