import cssLoading from './Loading.module.css'

export function Loading () {
    return <>
        <div className={cssLoading.loadConteiner}>
            <p>Loading...</p>
        </div>
    </>
}