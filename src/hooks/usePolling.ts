import { ref, onMounted, onUnmounted } from "vue";

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
 * 轮询请求数据的自定义 hooks
 * @template T 轮询函数返回的数据类型
 * @param {PollingFunction<T>} pollingFn 轮询函数，返回一个 Promise
 * @param {PollingOptions} options 轮询选项
 * @returns {Object} 包含轮询数据、错误信息以及启动和停止轮询的函数的对象
 */
export function usePolling<T>(pollingFn: PollingFunction<T>, options: PollingOptions) {
  const data = ref<T | null>(null);
  const error = ref<any | null>(null);
  let timer: NodeJS.Timeout;

  const fetchData = async () => {
    try {
      const result = await pollingFn();
      data.value = result;
      error.value = null;
    } catch (err) {
      error.value = err;
      if (options.onError) {
        options.onError(err);
      }
    }
  };

  const startPolling = () => {
    fetchData(); // Fetch data initially
    timer = setInterval(fetchData, options.interval);
  };

  const stopPolling = () => {
    clearInterval(timer);
  };

  // 在组件挂载前启动轮询
  onMounted(startPolling);

  // 在组件销毁前停止轮询，防止内存泄漏
  onUnmounted(stopPolling);

  return { data, error };
}
