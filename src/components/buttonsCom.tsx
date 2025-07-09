import s from './header.module.css'
import type { SphereBlock } from "../mock/types"
import { Button } from './Button'
interface  ButtonsComponentProps extends OnClicks {
  response: SphereBlock[],
  currentPeriod: number
}
export interface OnClicks {
      onNext: () => void,
  onPrev: () => void,
}
export function ButtonsComponent ({response, onNext, onPrev, currentPeriod}: ButtonsComponentProps) {

    return (
        <div className={s.buttonsContainer}>
            <div className={s.countContainer } >
                 {`${String(currentPeriod).padStart(2, '0')}/${String(response.length).padStart(2, '0')}` }
                 </div>
            <div className={s.buttonsWithCount}>
                <Button 
                direction = 'left'
                onClick= {onPrev}
                />
                <Button 
                direction='right'
                onClick= {onNext}
                />
                {/* <button className= {s.button}>
                    <div className={s.arrow} direction = 'left'></div>
                </button>
                <button className= {s.button}>
                    <div className={s.arrow} direction = 'right'></div>
                </button> */}
            </div>
        </div>
    )
}