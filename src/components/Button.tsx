import s from './header.module.css';

interface ArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
  onClick: () => void;
}

export function Button({ direction, onClick, style, ...restProps }: ArrowProps) {
  const wayArrow = direction === 'left' ? '-45' : '135';
  return (
    <button 
    className={s.button}
     onClick={onClick}
      style={style}
      {...restProps}
      >
      <div
        className={s.arrow}
        style={{
          transform: `translate(-50%, -50%)  rotate(${wayArrow}deg)`,
          //  left: direction === 'left' ? '0.3vw' : '-0.1vw'
        }}
      ></div>
    </button>
  );
}
