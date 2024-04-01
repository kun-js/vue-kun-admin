import { App } from "vue";
import { filterSensitiveWords } from "./filterSensitiveWords";

export function registerDirectives(app: App) {
  // 在这里添加其他的自定义指令函数
  filterSensitiveWords(app);
}
