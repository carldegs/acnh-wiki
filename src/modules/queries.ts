import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import BaseItem from '../types/BaseItem';
import Group from '../types/Group';
import { getItem, getList } from './actions';
import { baseKeys } from './keys';

export const useQueryList = <T = BaseItem>(
  group: Group,
  options?: UseQueryOptions<T[], AxiosError, T[], readonly [Group]>
): UseQueryResult<T[], AxiosError> =>
  useQuery<T[], AxiosError, T[], readonly [Group]>(
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
  options?: UseQueryOptions<T, AxiosError, T, readonly [Group, string]>
): UseQueryResult<T, AxiosError> =>
  useQuery<T, AxiosError, T, readonly [Group, string]>(
    baseKeys.item(group, item),
    () => getItem<T>(group, item),
    {
      retry: false,
      ...options,
    }
  );
