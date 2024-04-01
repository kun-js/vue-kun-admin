// 防抖
export function debounce(fn: Function, delay: number = 200): Function {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args); // 使用扩展运算符替代 apply 方法
      timer = null;
    }, delay);
  };
}
