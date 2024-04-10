/**
 * 获取浏览器类型的工具方法。
 * @returns 返回当前浏览器的类型，可能的值有 "Chrome"、"Firefox"、"Safari"、"Edge"、"IE" 或 "Unknown"。
 */
export function getBrowserType(): string {
  // 检测浏览器类型
  const userAgent: string = navigator.userAgent;
  let browserType: string = "Unknown";

  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
    // Chrome 浏览器
    browserType = "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    // Firefox 浏览器
    browserType = "Firefox";
  } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    // Safari 浏览器（不包括 Chrome）
    browserType = "Safari";
  } else if (userAgent.indexOf("Edge") > -1) {
    // Edge 浏览器
    browserType = "Edge";
  } else if (userAgent.indexOf("Trident") > -1) {
    // IE 浏览器
    browserType = "IE";
  }

  return browserType;
}
