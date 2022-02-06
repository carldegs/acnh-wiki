import { BaseItem } from './BaseItem';

export interface Villager extends BaseItem {
  personality: string;
  birthdayString: string;
  birthday: string;
  species: string;
  gender: string;
  catchPhrase: string;
  saying: string;
  iconUri: string;
  bubbleColor: string;
  textColor: string;
  hobby: string;
}
