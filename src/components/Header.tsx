import s from './header.module.css';
export function Header() {
  return (
    <div className={s.header}>
      <div className={s.vertLine}> </div>
      <div className={s.nameTitle}>Исторические даты</div>
    </div>
  );
}
