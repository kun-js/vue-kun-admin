// 深克隆方法

/**
 * 可以进行深克隆的类型集合。
 */
interface DeepCloneableArray extends Array<DeepCloneable> {}
interface DeepCloneableObject extends Record<string, DeepCloneable> {}
interface DeepCloneableMap extends Map<DeepCloneable, DeepCloneable> {}
interface DeepCloneableSet extends Set<DeepCloneable> {}

type DeepCloneable = Date | RegExp | DeepCloneableArray | DeepCloneableObject | DeepCloneableMap | DeepCloneableSet;

/**
 * 获取对象的类型字符串表示形式。
 * @param obj 要获取类型的对象
 * @returns 返回对象的类型字符串表示形式
 */
function getType(obj: any): string {
  return Object.prototype.toString.call(obj);
}

/**
 * 对对象进行深克隆。
 * @param obj 要进行深克隆的对象
 * @returns 返回深克隆后的对象
 */
export function deepClone<T extends DeepCloneable>(obj: T): T {
  const type = getType(obj);

  // 如果是 Date 类型，则使用 new Date() 构造函数创建一个新的 Date 对象
  if (type === "[object Date]") {
    return new Date((obj as Date).getTime()) as T;
  }

  // 如果是 RegExp 类型，则使用 new RegExp() 构造函数创建一个新的 RegExp 对象
  if (type === "[object RegExp]") {
    const { source, flags } = obj as RegExp;
    return new RegExp(source, flags) as T;
  }

  // 如果是 Map 类型，则递归克隆其中的键和值，并使用 new Map() 构造函数创建一个新的 Map 对象
  if (type === "[object Map]") {
    const newMap = new Map(
      Array.from((obj as DeepCloneableMap).entries()).map(([key, value]) => [deepClone(key), deepClone(value)])
    );
    return newMap as T;
  }

  // 如果是 Set 类型，则递归克隆其中的值，并使用 new Set() 构造函数创建一个新的 Set 对象
  if (type === "[object Set]") {
    const newSet = new Set<DeepCloneable>();
    (obj as DeepCloneableSet).forEach((value) => {
      newSet.add(deepClone(value));
    });
    return newSet as T;
  }

  // 如果是 Array 类型，则递归克隆其中的元素，并返回一个新的数组
  if (type === "[object Array]") {
    return (obj as DeepCloneableArray).map(deepClone) as T;
  }

  // 如果是 Object 类型，则递归克隆其中的属性，并返回一个新的对象
  if (type === "[object Object]") {
    const newObj: DeepCloneableObject = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepClone((obj as DeepCloneableObject)[key]);
      }
    }
    return newObj as T;
  }

  // 如果是基本类型，则直接返回
  return obj;
}
