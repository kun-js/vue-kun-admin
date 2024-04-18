import { ref, onMounted, onUnmounted } from "vue";

/**
 * 自定义 Vue 3 hook 用于获取窗口大小。
 * 返回一个对象，包含窗口的宽度和高度。
 */
export function useWindowSize() {
  // 创建响应式变量来存储窗口的宽度和高度
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  // 当窗口大小变化时更新宽度和高度的函数
  const updateSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  // 当组件挂载时添加 resize 事件监听器
  onMounted(() => {
    window.addEventListener("resize", updateSize);
  });

  // 当组件卸载时移除 resize 事件监听器
  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });

  // 返回宽度和高度的响应式对象
  return { width, height };
}
