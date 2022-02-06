import Group from '../types/Group';

export const baseKeys = {
  groupList: (group: Group) => [group] as const,
  item: (group: Group, item: string | number) =>
    [...baseKeys.groupList(group), item] as const,
};
