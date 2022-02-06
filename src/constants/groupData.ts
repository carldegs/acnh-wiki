import ArtIcon from '../../public/icons/art.png';
import BugsIcon from '../../public/icons/bugs.png';
import FishIcon from '../../public/icons/fish.png';
import FossilsIcon from '../../public/icons/fossils.png';
import SeaIcon from '../../public/icons/sea.png';
import VillagersIcon from '../../public/icons/villagers.png';
import theme from '../theme';
import Group from '../types/Group';

const GROUP_DATA = [
  {
    id: Group.fish,
    name: 'Fishes',
    icon: FishIcon,
    bg: theme.colors.blue,
  },
  {
    id: Group.sea,
    name: 'Sea Creatures',
    icon: SeaIcon,
    bg: theme.colors.teal,
  },
  {
    id: Group.bugs,
    name: 'Bugs',
    icon: BugsIcon,
    bg: theme.colors.orange,
  },
  {
    id: Group.fossils,
    name: 'Fossils',
    icon: FossilsIcon,
    bg: theme.colors.yellow,
  },
  {
    id: Group.villagers,
    name: 'Villagers',
    icon: VillagersIcon,
    bg: theme.colors.pink,
  },
  {
    id: Group.art,
    name: 'Art',
    icon: ArtIcon,
    bg: theme.colors.green,
  },
];

export default GROUP_DATA;
