/**
 * 节流函数，限制函数在一定时间间隔内只能执行一次。
 * @param fn 要执行的函数
 * @param delay 限制的时间间隔，单位毫秒，默认为 100 毫秒
 * @returns 返回一个包装后的函数
 */
export function throttle(fn: Function, delay: number = 100): Function {
  let timer: ReturnType<typeof setTimeout> | null = null; // 定时器对象，用于延迟执行函数
  let lastExecTime: number = 0; // 上次执行函数的时间

  return function (...args: any[]) {
    const now = Date.now(); // 获取当前时间

    // 如果距离上次执行的时间小于指定的时间间隔，则不执行函数
    if (now - lastExecTime < delay) {
      return;
    }

    // 如果存在定时器，则清除定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    lastExecTime = now; // 更新上次执行函数的时间

    // 设置一个延迟执行的定时器，在延迟时间后执行原始函数
    timer = setTimeout(() => {
      fn(...args); // 使用扩展运算符替代 apply 方法来执行原始函数
      timer = null; // 执行完成后，清除定时器
    }, delay);
  };
}
