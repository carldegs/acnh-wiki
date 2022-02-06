import { BuyableItem } from './BaseItem';

export interface Art extends BuyableItem {
  hasFake: boolean;
  museumDesc: string;
}
