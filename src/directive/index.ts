import { App } from "vue";
import { buttonPermission } from "./buttonPermission";
import { filterSensitiveWords } from "./filterSensitiveWords";
import { keydownEnter } from "./keydownEnter";

export function registerDirectives(app: App) {
  // 在这里添加其他的自定义指令函数
  filterSensitiveWords(app);
  buttonPermission(app);
  keydownEnter(app);
}
