import styles from './product-list.module.css';
import { Button } from '@techtalks/design-system/buttons';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      <Button />
    </div>
  );
}

export default ProductList;
