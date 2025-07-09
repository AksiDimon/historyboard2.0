import s from './header.module.css'
import { Button } from "./Button"
import type { OnClicks } from './buttonsCom'
export function FooterButtons ({onPrev, onNext}: OnClicks ) {
    return (
        <div className={s.bntFooterButton} >
            <Button 
            style ={{width: '2.083vw', height: '2.083vw', background: 'white'}}
            direction='left'
            onClick={onPrev}
             />
            <Button
            style ={{width: '2.083vw', height: '2.083vw', background: 'white'}}
            direction='right'
            onClick={onNext}
            />
        </div>
    )
}