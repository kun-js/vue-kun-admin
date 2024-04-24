import { App } from "vue";
import { buttonPermission } from "./directives/buttonPermission";
import { filterSensitiveWords } from "./directives/filterSensitiveWords";
import { keydownEnter } from "./directives/keydownEnter";
import { timestamp } from "./directives/timestamp";

export function registerDirectives(app: App) {
  // 在这里添加其他的自定义指令函数
  filterSensitiveWords(app);
  buttonPermission(app);
  keydownEnter(app);
  timestamp(app);
}
