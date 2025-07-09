import s from './header.module.css';
import type { AllComponentsProps } from './AllComponents';
// import { useEffect, useRef } from 'react';
import { useAnimationDurationTime } from './hooks/animationDurationTime';
export interface CircleProps extends AllComponentsProps {
  setCurrentIndex: (prev: number) => void;
  currentIndex: number;
}
export function CircleNav({
  currentIndex,
  setCurrentIndex,
  response,
}: CircleProps) {
  const timeMoveCircle = useAnimationDurationTime(currentIndex);
  //   const prevRef = useRef(currentIndex);
  //   const cirlceRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (!cirlceRef) {
  //       return;
  //     }
  //     if (cirlceRef.current) {
  //       const diff = Math.abs(currentIndex - prevRef.current);
  //       cirlceRef.current.style.setProperty(
  //         '--transitionDuration',
  //         `${diff * 200}ms`
  //       );
  //     }
  //     prevRef.current = currentIndex;
  //   }, [currentIndex]);

  return (
    <div className={s.cercleParent}>
      <div className={s.circle} ref={timeMoveCircle}>
        {response.map((obj, i) => {
          const n = response.length;
          const step = 360 / n;
          const deg = step * (i - currentIndex);
          
          return (
            <div>
               
              <div
                key={obj.nameBlock}
                className={s.dot}
                style={{ '--degree': deg.toString() } as React.CSSProperties}
                onClick={() => setCurrentIndex(i)}
              >
                 <div
                className={s.nameDot}
                style={{ '--degree': (deg - 180).toString() } as React.CSSProperties}
                > {obj.nameBlock}</div>
                <div className={s.inner}> {i + 1}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
