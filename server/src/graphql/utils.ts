import type { ObjectId } from 'mongodb';
import type { LeanDocument } from 'mongoose';
import { Order } from './schema';

export function formatDocumentsPagination<T extends LeanDocument<any>>(
  docs: T[],
  order: Order,
  first: number,
  after: ObjectId,
) {
  const hasNextPage = docs.length > first || order === Order.DESC;
  const hasPreviousPage = !!after && (docs.length !== first || order === Order.ASC);

  if (docs.length > first) {
    docs.pop();
  }

  if (order === Order.DESC) {
    docs.reverse();
  }

  return {
    edges: docs.map((event) => ({
      cursor: event._id.toString(),
      node: event,
    })),
    pageInfo: {
      hasNextPage,
      hasPreviousPage,
      startCursor: docs.at(0)?._id.toString() || null,
      endCursor: docs.at(-1)?._id.toString() || null,
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
