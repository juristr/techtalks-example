import styles from './forms.module.css';

/* eslint-disable-next-line */
export interface FormsProps {}

export function Forms(props: FormsProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to Forms!</h2>
    </div>
  );
}

export default Forms;
