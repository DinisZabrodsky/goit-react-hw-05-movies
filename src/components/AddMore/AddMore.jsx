import cssAMB from "./AddMore.module.css"

export function AddMore ({addMoreFn}) {
    return (
        <button onClick={addMoreFn} className={cssAMB.addMoreBtn}>AddMore</button>
    )
}