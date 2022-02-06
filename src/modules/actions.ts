import axios from 'axios';
import { FetchQueryOptions, QueryClient } from 'react-query';

import BaseItem from '../types/BaseItem';
import Group from '../types/Group';
import { jsonToCamel } from '../utils/case';
import { baseKeys } from './keys';

export const getList = async <T = BaseItem>(group: Group): Promise<T[]> => {
  // TODO: Add error handling
  const { data } = await axios.get<Record<string, T>>(
    `https://acnhapi.com/v1/${group}`
  );

  return Object.values(data).map((item) => jsonToCamel(item));
};

export const prefetchList = async <T = BaseItem>(
  queryClient: QueryClient,
  group: Group,
  options?: FetchQueryOptions
) => {
  await queryClient.prefetchQuery(
    baseKeys.groupList(group),
    () => getList<T>(group),
    options
  );

  return queryClient;
};

export const getItem = async <T = BaseItem>(
  group: Group,
  item: string
): Promise<T> => {
  // TODO: Add error handling
  const { data } = await axios.get<T>(
    `https://acnhapi.com/v1/${group}/${item}`
  );
  return jsonToCamel(data);
};

export const prefetchItem = async <T = BaseItem>(
  queryClient: QueryClient,
  group: Group,
  item: string,
  options?: FetchQueryOptions
) => {
  await queryClient.prefetchQuery(
    baseKeys.item(group, item),
    () => getItem<T>(group, item),
    options
  );

  return queryClient;
};
