import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to Buttons!</h2>
    </div>
  );
}

export default Button;
