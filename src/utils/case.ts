export const kebabToCamel = (str: string) =>
  str.replace(/-./g, (match) => match[1].toUpperCase());

export const snakeToCamel = (str: string) =>
  str.replace(/_./g, (match) => match[1].toUpperCase());

export const jsonToCamel = <T = Record<string, any>>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [
      snakeToCamel(kebabToCamel(key)),
      !Array.isArray(val) && typeof val === 'object' ? jsonToCamel(val) : val,
    ])
  ) as T;
