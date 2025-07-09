import s from './header.module.css'
export function Lines () {
    return (
        <>
        <div className={s.verticalLines} > </div>
         <div className={s.verticalLineCenter} > </div>
         <div className={s.horisontalLineCenter}></div>
        </>
    )
}