import styles from './ui-order-detail.module.css';

import { Button } from '@techtalks/design-system/buttons';

/* eslint-disable-next-line */
export interface UiOrderDetailProps {}

export function UiOrderDetail(props: UiOrderDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiOrderDetail!</h1>
      <Button />
    </div>
  );
}

export default UiOrderDetail;
