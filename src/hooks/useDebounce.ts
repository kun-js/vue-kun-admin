/**
 * 使用防抖函数，防止在短时间内多次触发事件。
 * @template T 要执行的函数的类型
 * @param {T} fn 要执行的函数
 * @param {number} delay 延迟时间，单位毫秒
 * @returns {T} 经过防抖处理的函数
 */
export function useDebounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null;

  // 返回经过防抖处理的函数
  return ((...args: Parameters<T>) => {
    // 如果定时器存在，清除之前的定时器
    if (timer) {
      clearTimeout(timer);
    }

    // 设置新的定时器，在延迟时间后执行函数
    timer = setTimeout(() => {
      fn(...args); // 调用传入的原始函数
      timer = null; // 清除定时器
    }, delay);
  }) as T; // 将函数转换为原始函数类型并返回
}
