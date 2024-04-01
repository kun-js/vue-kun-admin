// 节流
export function throttle(fn: Function, delay: number = 100): Function {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: any[]) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args); // 使用扩展运算符替代 apply 方法
      timer = null;
    }, delay);
  };
}
