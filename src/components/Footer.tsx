
import type { SphereBlock } from '../mock/types';
import s from './header.module.css'
import { useRef } from 'react';
import { useOverFlowSlider } from './hooks/overFlowSlider';
import { useSwipe } from './hooks/useSwipe';
interface  AllComponentsProps {
  response: SphereBlock[],
  currentIndex: number,
  onNext: () => void;
  onPrev: () => void;
}
export function Footer({response, currentIndex, onNext, onPrev}: AllComponentsProps) {

      const viewportRef = useRef<HTMLDivElement>(null);

      useOverFlowSlider({ viewportRef, currentIndex})

      useSwipe(viewportRef, {onNext, onPrev})

//   useEffect(() => {
//     const vp = viewportRef.current;
//     if (!vp) return;
//     // каждый «слайд» ровно по ширине viewport-а
//     const slideWidth = vp.clientWidth;
//     console.log(slideWidth, '❤️')
//     vp.scrollTo({ left: slideWidth * currentIndex, behavior: 'smooth' });
//   }, [currentIndex]);


  return (
    <div ref = {viewportRef} className={s.sliderViewport}>
        <div  className={s.sliderTrack} >
            {response.map((objPeriod) => {
        return (
          <div className={s.containerHistory}>
            {objPeriod.data.map((disc) => {
              return (
                <div className={s.blockDiscriptionHistory }>
                  <div style={{fontSize: '1.302vw', marginBottom: '1.2vh', color: '#3877EE', fontWeight: '400' }} >{disc.yaer}</div>
                  <p style={{fontSize: '1.1vw'}}>{disc.description}</p>
                </div>
              );
            })}
          </div>
        );
      })}
        </div>
    </div>
      

  );
}
