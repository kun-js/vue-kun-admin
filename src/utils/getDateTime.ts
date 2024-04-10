// 获取当前时间方法

/**
 * getDateTime 方法用于获取当前时间的字符串表示形式。
 * @param params 一个数字参数，指定返回的时间格式。可以是以下值之一：
 *  1: 返回年份
 *  2: 返回年月
 *  3: 返回年月日
 *  4: 返回年月日加当前时间
 *  5: 返回当前时间
 *  6: 返回星期几
 *  7: 返回时间戳
 * @returns 返回当前时间的字符串表示形式，根据传入的 params 参数返回不同的时间格式。
 */
export function getDateTime(params: number): string {
  // 获取当前日期时间
  const currentDate = new Date();

  // 提取年、月、日、时、分、秒、星期几和时间戳
  const year: number = currentDate.getFullYear();
  const month: string = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day: string = ("0" + currentDate.getDate()).slice(-2);
  const hours: string = ("0" + currentDate.getHours()).slice(-2);
  const minutes: string = ("0" + currentDate.getMinutes()).slice(-2);
  const seconds: string = ("0" + currentDate.getSeconds()).slice(-2);
  const weekDay: string = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
    currentDate.getDay()
  ];
  const timestamp: number = currentDate.getTime();

  // 根据 params 参数返回不同的时间格式
  switch (params) {
    case 1:
      return year.toString(); // 年份
    case 2:
      return `${year}-${month}`; // 年月
    case 3:
      return `${year}-${month}-${day}`; // 年月日
    case 4:
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // 年月日加当前时间
    case 5:
      return `${hours}:${minutes}:${seconds}`; // 当前时间
    case 6:
      return weekDay; // 星期几
    case 7:
      return timestamp.toString(); // 时间戳
    default:
      return "Invalid params";
  }
}
