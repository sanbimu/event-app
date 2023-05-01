import type { ObjectId } from 'mongodb';
import type { LeanDocument } from 'mongoose';

export function formatDocumentsPagination<T extends LeanDocument<any>>(
  values: T[],
  first: number,
  after: ObjectId,
) {
  const hasNextPage = values.length > first;
  const hasPreviousPage = !!after;
  const edges = hasNextPage ? values.slice(0, -1) : values;

  return {
    edges: edges.map((event) => ({
      cursor: event._id.toString(),
      node: event,
    })),
    pageInfo: {
      hasNextPage,
      hasPreviousPage,
      startCursor: edges.at(0)?._id.toString() || null,
      endCursor: edges.at(-1)?._id.toString() || null,
    },
  };
}

export function mergeDeep<T, U>(target: T, source: any) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}
