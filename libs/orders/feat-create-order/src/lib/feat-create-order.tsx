import styles from './feat-create-order.module.css';
import { Button } from '@techtalks/design-system/buttons';
import { Forms } from '@techtalks/design-system/forms';
import { UiOrderDetail } from '@techtalks/orders/ui-order-detail';
import { orderEntities } from '@techtalks/orders/order-entities';
import { dataAccessOrders } from '@techtalks/orders/data-access-orders';

/* eslint-disable-next-line */
export interface FeatCreateOrderProps {}

export function FeatCreateOrder(props: FeatCreateOrderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCreateOrder!</h1>
      <Button />
      <Forms />
    </div>
  );
}

export default FeatCreateOrder;
