import { useQuery, UseQueryResult } from 'react-query';

import BaseItem from '../types/BaseItem';
import Group from '../types/Group';
import { getItem, getList } from './actions';
import { baseKeys } from './keys';

export const useQueryList = <T = BaseItem>(
  group: Group
): UseQueryResult<T[], Error> =>
  useQuery(baseKeys.groupList(group), () => getList<T>(group));

export const useQueryItem = <T = BaseItem>(
  group: Group,
  item: string
): UseQueryResult<T, Error> =>
  useQuery(baseKeys.item(group, item), () => getItem<T>(group, item));
