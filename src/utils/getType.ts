// 判断数据类型方法

/**
 * 获取值的类型字符串表示形式。
 * @param value 要获取类型的值
 * @returns 返回值的类型字符串表示形式
 */
export function getType<T>(value: T): string {
  // 获取值的基本类型
  const type = typeof value;

  // 如果值的类型不是对象或函数，则直接返回该类型
  if (type !== "object" && type !== "function") {
    return type;
  }

  // 如果值为 null，则返回 "null"
  if (value === null) {
    return "null";
  }

  // 对于对象和函数，使用 Object.prototype.toString 方法获取更精确的类型
  const typeString = Object.prototype.toString.call(value).slice(8, -1);
  return typeString.toLowerCase();
}
