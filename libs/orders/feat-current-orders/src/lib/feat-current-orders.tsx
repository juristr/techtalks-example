import styles from './feat-current-orders.module.css';
import { Button } from '@techtalks/design-system/buttons';
import { UiOrderDetail } from '@techtalks/orders/ui-order-detail';
import { orderEntities } from '@techtalks/orders/order-entities';
import { dataAccessOrders } from '@techtalks/orders/data-access-orders';

/* eslint-disable-next-line */
export interface FeatCurrentOrdersProps {}

export function FeatCurrentOrders(props: FeatCurrentOrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatCurrentOrders!</h1>
      <Button />
    </div>
  );
}

export default FeatCurrentOrders;
