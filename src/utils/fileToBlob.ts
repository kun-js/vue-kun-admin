/**
 * 将指定路径的文件转换为 Blob 对象
 * @param {string} filePath 文件的路径
 * @returns {Promise<Blob>} 返回一个 Promise 对象，该 Promise 在成功时返回 Blob 对象
 */
export async function fileToBlob(filePath: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath);
    xhr.responseType = "blob";

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error("Failed to load file"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Failed to load file"));
    };

    xhr.send();
  });
}
