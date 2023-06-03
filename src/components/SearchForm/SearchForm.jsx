

export function SearchForm ({searchValue}) {

    const handelForm = (event) => {
        event.preventDefault()
        const value = event.target[0].value
        
        if(!value) {
            return  alert('Введіть запит')
        } else {
            searchValue(value)
        }


    }

    return (
        <form action="query" onSubmit={handelForm}>
            <label>
                Введіть назву
                <input type="text" />
            </label>

            <button type='submit'>Пошук</button>
        </form>  
    )
}