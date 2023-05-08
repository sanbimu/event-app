export function truthyObject<T>(obj: Record<string, T>): Record<string, T> {
  const truthyObj: Record<string, T> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      truthyObj[key] = obj[key];
    }
  }
  return truthyObj;
}
