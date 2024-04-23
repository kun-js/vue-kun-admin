/**
 * 轮询函数的类型定义
 * @template T 轮询函数返回的数据类型
 */
type PollingFunction<T> = () => Promise<T>;

/**
 * 轮询选项的类型定义
 */
type PollingOptions = {
  interval: number; // 轮询间隔时间，单位毫秒
  onError?: (error: any) => void; // 错误处理函数
};

/**
 * 轮询请求数据的工具函数
 * @template T 轮询函数返回的数据类型
 * @param {PollingFunction<T>} pollingFn 轮询函数，返回一个 Promise
 * @param {PollingOptions} options 轮询选项
 * @returns {Promise<T>} 轮询函数返回的数据
 */
export async function pollData<T>(pollingFn: PollingFunction<T>, options: PollingOptions): Promise<T> {
  try {
    // 调用轮询函数获取数据
    const result = await pollingFn();
    return result;
  } catch (err) {
    // 如果发生错误，则调用错误处理函数（如果有）
    if (options.onError) {
      options.onError(err);
    }
    throw err;
  }
}

/**
 * 启动轮询请求的工具函数
 * @template T 轮询函数返回的数据类型
 * @param {PollingFunction<T>} pollingFn 轮询函数，返回一个 Promise
 * @param {PollingOptions} options 轮询选项
 * @returns {NodeJS.Timeout} 返回用于停止轮询的定时器
 */
export function startPolling<T>(pollingFn: PollingFunction<T>, options: PollingOptions): NodeJS.Timeout {
  // 首次获取数据
  pollData(pollingFn, options);
  // 设置定时器，周期性调用 pollData 函数
  const timer = setInterval(() => pollData(pollingFn, options), options.interval);
  return timer;
}

/**
 * 停止轮询请求的工具函数
 * @param {NodeJS.Timeout} timer 用于停止轮询的定时器
 */
export function stopPolling(timer: NodeJS.Timeout): void {
  // 清除定时器
  clearInterval(timer);
}
