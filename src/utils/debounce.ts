/**
 * 防抖函数，延迟执行函数，直到延迟时间内没有新的调用。
 * @param fn 要延迟执行的函数
 * @param delay 延迟时间，单位毫秒，默认为 200 毫秒
 * @returns 返回一个包装后的函数
 */
export function debounce(fn: Function, delay: number = 200): Function {
  let timer: ReturnType<typeof setTimeout> | null = null; // 定时器对象，用于延迟执行函数

  return function (...args: any[]) {
    // 如果存在定时器，则清除定时器
    if (timer) {
      clearTimeout(timer);
    }

    // 设置一个延迟执行的定时器，在延迟时间后执行原始函数
    timer = setTimeout(() => {
      fn(...args); // 使用扩展运算符替代 apply 方法来执行原始函数
      timer = null; // 执行完成后，清除定时器
    }, delay);
  };
}
