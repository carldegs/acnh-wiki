import Language from './Language';
import Rarity from './Rarity';

export interface BaseItem {
  id: number;
  fileName: string;
  name: Record<`name${Language}`, string>;
  imageUri: string;
  iconUri?: string;
}

export interface SellableItem extends BaseItem {
  price: number;
  catchPhrase: string;
}

export interface BuyableItem extends BaseItem {
  buyPrice: number;
  sellPrice: number;
}

export interface MuseumItem extends SellableItem {
  museumPhrase: string;
}

export interface SeasonalItem extends MuseumItem {
  availability: {
    monthNorthern: string;
    monthSouthern: string; // '11-3'
    time: string; // '9am - 4pm'
    isAllDay: boolean;
    isAllYear: boolean;
    location: string;
    rarity: Rarity;
    monthArrayNorthern: number[];
    monthArraySouthern: number[];
    timeArray: number[];
  };
  iconUri: string;
}

export default BaseItem;
