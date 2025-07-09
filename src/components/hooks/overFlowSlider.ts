import { useEffect } from "react";
interface OverFlowSliderProps {
    viewportRef: React.RefObject<HTMLDivElement | null>
    currentIndex: number
}
export function useOverFlowSlider ({viewportRef, currentIndex }: OverFlowSliderProps) {
        //  const viewportRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;
        // каждый «слайд» ровно по ширине viewport-а
        const slideWidth = vp.clientWidth;
        console.log(slideWidth, '❤️')
        vp.scrollTo({ left: slideWidth * currentIndex, behavior: 'smooth' });
      }, [viewportRef ,currentIndex]);

    //   return viewportRef
}