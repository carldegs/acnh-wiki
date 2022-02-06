import { BuyableItem } from './BaseItem';

export interface Song extends BuyableItem {
  isOrderable: boolean;
  musicUri: string;
}
