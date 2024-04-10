// 数组去重方法

/**
 * 对数组进行去重，保留唯一项。
 * @param array 要进行去重的数组
 * @returns 返回去重后的数组
 */
export function uniqueArray<T>(array: T[]): T[] {
  // 用来存储已经出现过的唯一项
  const uniqueItems = new Set<string | number | symbol | boolean | object | null | undefined | Function | BigInt>();

  // 处理单个数组项的函数
  const processItem: (item: any) => boolean = (item: any) => {
    // 如果当前项是数组，则递归处理嵌套的数组
    if (Array.isArray(item)) {
      return uniqueArray(item).length > 0;
    }

    // 对于 Symbol、Function 和 BigInt 类型的值，直接返回 true，表示保留该项
    const type = typeof item;
    if (type === "symbol" || type === "function" || type === "bigint") {
      return true;
    }

    // 将对象类型转换成字符串，用于比较
    const key = type !== "object" || item === null ? item : JSON.stringify(item);

    // 如果已经存在相同的项，则返回 false，表示需要过滤掉
    if (uniqueItems.has(key)) {
      return false;
    }

    // 否则，将当前项添加到唯一项集合中，并返回 true，表示保留当前项
    uniqueItems.add(key);
    return true;
  };

  // 对数组进行过滤，保留唯一项
  const uniqueArray: (arr: T[]) => T[] = (arr: T[]) => arr.filter(processItem);

  // 移除嵌套数组中的重复项
  const uniqueNestedArray: T[] = [];
  const seenNestedArrays = new Set<string>();

  // 遍历经过过滤后的数组，将唯一项添加到新数组中
  for (const item of uniqueArray(array)) {
    const key = JSON.stringify(item);
    if (!seenNestedArrays.has(key)) {
      uniqueNestedArray.push(item);
      seenNestedArrays.add(key);
    }
  }

  return uniqueNestedArray;
}
