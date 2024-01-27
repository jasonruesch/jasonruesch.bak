import styles from './tailwind.module.css';

/* eslint-disable-next-line */
export interface TailwindProps {}

export function Tailwind(props: TailwindProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to my custom Tailwind CSS configuration!</h1>
    </div>
  );
}

export default Tailwind;
