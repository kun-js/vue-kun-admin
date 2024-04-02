type DeepCopyable = Date | RegExp | Array<any> | { [key: string]: any } | Map<any, any> | Set<any>;

function getType(obj: any): string {
  return Object.prototype.toString.call(obj);
}

export function deepCopy<T extends DeepCopyable>(obj: T): T {
  const type = getType(obj);

  if (type === "[object Date]") {
    return new Date((obj as Date).getTime()) as T;
  }

  if (type === "[object RegExp]") {
    const { source, flags } = obj as RegExp;
    return new RegExp(source, flags) as T;
  }

  if (type === "[object Map]") {
    const newMap = new Map(
      Array.from((obj as Map<any, any>).entries()).map(([key, value]) => [deepCopy(key), deepCopy(value)])
    );
    return newMap as T;
  }

  if (type === "[object Set]") {
    const newSet = new Set<any>();
    (obj as Set<any>).forEach((value) => {
      newSet.add(deepCopy(value));
    });
    return newSet as T;
  }

  if (type === "[object Array]") {
    return (obj as Array<any>).map(deepCopy) as T;
  }

  if (type === "[object Object]") {
    const newObj: { [key: string]: any } = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepCopy((obj as { [key: string]: any })[key]);
      }
    }
    return newObj as T;
  }

  return obj;
}
