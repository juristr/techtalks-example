import styles from './product-detail.module.css';
import { Button } from '@techtalks/design-system/buttons';

/* eslint-disable-next-line */
export interface ProductDetailProps {}

export function ProductDetail(props: ProductDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductDetail!</h1>
      <Button />
    </div>
  );
}

export default ProductDetail;
