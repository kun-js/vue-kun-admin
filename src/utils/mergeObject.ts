// 合并对象方法

/**
 * 合并多个对象为一个新对象，支持深度递归合并。
 * @param objects 要合并的对象数组
 * @returns 返回合并后的新对象
 */
type Mergeable = string | number | boolean | symbol | object | null | undefined | Date | RegExp | Function | bigint;

/**
 * 深度递归合并多个对象为一个新对象。
 * @param objects 要合并的对象数组
 * @returns 返回合并后的新对象
 */
export function mergeObjects<T extends Record<string, Mergeable>>(...objects: T[]): T {
  // 初始化一个空对象，用于存储合并后的结果
  const mergedObject: Partial<T> = {};

  // 遍历传入的所有对象
  for (const obj of objects) {
    // 如果当前对象不是一个对象类型，则跳过当前循环
    if (typeof obj !== "object" || obj === null) {
      continue;
    }

    // 遍历当前对象的所有属性
    for (const key in obj) {
      // 检查当前属性是否是当前对象的自有属性
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 获取当前属性在合并后对象中的当前值和新值
        const currentValue = mergedObject[key] as Mergeable | undefined;
        const newValue = obj[key] as Mergeable | undefined;

        // 处理当前值和新值为 null 的情况
        if (currentValue === null || newValue === null) {
          // 如果当前值为 null，直接覆盖为新值
          // 如果新值为 null，则跳过当前属性
          mergedObject[key] = newValue as T[Extract<keyof T, string>] | undefined;
          continue;
        }

        // 如果当前值和新值都是对象且不是数组，则递归合并这两个对象
        if (typeof currentValue === "object" && typeof newValue === "object" && !Array.isArray(currentValue)) {
          // 递归地调用 mergeObjects 方法合并对象
          mergedObject[key] = mergeObjects(
            currentValue as Record<string, Mergeable>,
            newValue as Record<string, Mergeable>
          ) as T[Extract<keyof T, string>];
        } else if (Array.isArray(currentValue) && Array.isArray(newValue)) {
          // 合并数组
          mergedObject[key] = currentValue.concat(newValue) as T[Extract<keyof T, string>];
        } else if (typeof currentValue === "function" || typeof newValue === "function") {
          // 如果其中一个值是函数，则优先保留最后一个函数
          mergedObject[key] = newValue as T[Extract<keyof T, string>];
        } else if (typeof currentValue === "symbol" || typeof newValue === "symbol") {
          // 如果其中一个值是 Symbol，则保留新值
          mergedObject[key] = newValue as T[Extract<keyof T, string>];
        } else {
          // 其他情况下直接覆盖当前值为新值
          mergedObject[key] = newValue as T[Extract<keyof T, string>];
        }
      }
    }
  }

  // 返回合并后的对象
  return mergedObject as T;
}
