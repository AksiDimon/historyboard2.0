import s from './header.module.css';
import type { CircleProps } from './CircleNav';

type YearsProps = Pick <CircleProps, 'currentIndex' | 'response'>
export function Years ( {currentIndex, response}: YearsProps) {
    const lengthPeriod = response[currentIndex].data.length;
    const startYear = response[currentIndex].data[0].yaer;
    const endYear = response[currentIndex].data[lengthPeriod - 1].yaer;
    return (
        <div className = { s.yearContainer}>
            <div style={{color: '#5D5FEF '}} >
                {startYear}
            </div>
            {' '}
            <div style={{color: '#ef5dbc'}}>
                {endYear}
            </div>
        </div>
    )
}