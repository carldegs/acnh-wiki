import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import BaseItem from '../types/BaseItem';
import Group from '../types/Group';
import { getItem, getList } from './actions';
import { baseKeys } from './keys';

export const useQueryList = <T = BaseItem>(
  group: Group,
  options?: UseQueryOptions<T[], Error, T[], readonly [Group]>
): UseQueryResult<T[], Error> =>
  useQuery<T[], Error, T[], readonly [Group]>(
    baseKeys.groupList(group),
    () => getList<T>(group),
    {
      retry: false,
      ...options,
    }
  );

export const useQueryItem = <T = BaseItem>(
  group: Group,
  item: string,
  options?: UseQueryOptions<T, Error, T, readonly [Group, string]>
): UseQueryResult<T, Error> =>
  useQuery<T, Error, T, readonly [Group, string]>(
    baseKeys.item(group, item),
    () => getItem<T>(group, item),
    {
      retry: false,
      ...options,
    }
  );
