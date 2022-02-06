import { MuseumItem } from './BaseItem';

export type Fossil = Omit<MuseumItem, 'id'>;
