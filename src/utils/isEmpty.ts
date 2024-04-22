/**
 * 判断传入的参数是否为空。
 * @param value 要判断的参数
 * @returns 如果参数为空（undefined、null、空字符串、空数组、空对象、空函数、空 BigInt、空 Symbol、空日期对象），返回 true；否则返回 false。
 */
export function isEmpty<T>(value: T): boolean {
  if (value === undefined || value === null) {
    return true; // 如果参数为 undefined 或 null，则为空
  }

  if (typeof value === "string" && value.trim() === "") {
    return true; // 如果参数为字符串且为空，则为空
  }

  if (Array.isArray(value) && value.length === 0) {
    return true; // 如果参数为数组且为空，则为空
  }

  if (typeof value === "object") {
    if (Object.keys(value).length === 0) {
      return true; // 如果参数为对象且为空，则为空
    }

    if (value instanceof Date && isNaN(value.getTime())) {
      return true; // 如果参数为日期对象且无效，则为空
    }

    if (value instanceof Map || value instanceof WeakMap) {
      return isEmptyMap(value as Map<any, any> | WeakMap<object, any>); // 判断 Map 或 WeakMap 是否为空
    }

    if (value instanceof Set || value instanceof WeakSet) {
      return isEmptySet(value as Set<any> | WeakSet<object>); // 判断 Set 或 WeakSet 是否为空
    }

    if (typeof value === "bigint" && value === BigInt(0)) {
      return true; // 如果参数为 BigInt 且为 0，则为空
    }
  }

  if (typeof value === "function" && value.toString().trim() === "function () {}") {
    return true; // 如果参数为函数且为空函数，则为空
  }

  if (typeof value === "symbol" || value instanceof Symbol) {
    return true; // 如果参数为 Symbol，则为空
  }

  return false; // 其他情况，则不为空
}

/**
 * 判断传入的 Map 或 WeakMap 是否为空。
 * @param map 要判断的 Map 或 WeakMap
 * @returns 如果 Map 或 WeakMap 为空，则返回 true；否则返回 false。
 */
function isEmptyMap<K, V>(map: Map<K, V> | WeakMap<object, V>): boolean {
  if (map instanceof WeakMap) {
    // WeakMap 没有办法直接判断是否为空
    // 这里可以根据具体需求自定义空判断逻辑
    // 此处我们简单返回 false
    return false;
  } else {
    return map.size === 0; // 如果 Map 为空，则返回 true
  }
}

/**
 * 判断传入的 Set 或 WeakSet 是否为空。
 * @param set 要判断的 Set 或 WeakSet
 * @returns 如果 Set 或 WeakSet 为空，则返回 true；否则返回 false。
 */
function isEmptySet<T>(set: Set<T> | WeakSet<object>): boolean {
  if (set instanceof WeakSet) {
    // WeakSet 没有办法直接判断是否为空
    // 这里可以根据具体需求自定义空判断逻辑
    // 此处我们简单返回 false
    return false;
  } else {
    return set.size === 0; // 如果 Set 为空，则返回 true
  }
}
