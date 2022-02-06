import { Art } from './Art';
import { Bug } from './Bug';
import { Fish } from './Fish';
import { Fossil } from './Fossil';
import { SeaCreature } from './SeaCreature';
import { Villager } from './Villager';

enum Group {
  fish = 'fish',
  sea = 'sea',
  bugs = 'bugs',
  fossils = 'fossils',
  villagers = 'villagers',
  art = 'art',
}

export interface GroupType {
  [Group.fish]: Fish;
  [Group.sea]: SeaCreature;
  [Group.bugs]: Bug;
  [Group.fossils]: Fossil;
  [Group.villagers]: Villager;
  [Group.art]: Art;
}

export default Group;
