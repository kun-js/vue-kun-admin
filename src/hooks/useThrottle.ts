/**
 * 使用节流函数，确保在一定时间间隔内只触发一次事件。
 * @template T 要执行的函数的类型
 * @param {T} fn 要执行的函数
 * @param {number} delay 间隔时间，单位毫秒
 * @returns {(...args: Parameters<T>) => void} 经过节流处理的函数
 */
export function useThrottle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastInvokeTime = 0;

  // 返回经过节流处理的函数
  return (...args: Parameters<T>) => {
    const now = Date.now();

    // 如果没有定时器或距上次触发的时间超过间隔时间，则执行函数
    if (!timer || now - lastInvokeTime >= delay) {
      fn(...args);
      lastInvokeTime = now;
    } else {
      // 否则清除之前的定时器，并重新设置新的定时器
      clearTimeout(timer);
      timer = setTimeout(
        () => {
          fn(...args); // 调用传入的原始函数
          lastInvokeTime = now; // 更新上次触发的时间
        },
        delay - (now - lastInvokeTime) // 计算剩余延迟时间
      );
    }
  };
}
