<template>
  <div class="excel-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header>
        Excel操作示例
        <el-button type="primary" @click="handleToExportExcel1">导出excel(基础)</el-button>
        <el-button type="primary" @click="handleToExportExcel2">导出excel(自定义标题宽度)</el-button>
        <el-button type="primary" @click="handleToExportExcel3">导出excel(自定义样式)</el-button>
        <el-button type="primary" @click="handleToExportExcel4">导出excel(附带excel公式)</el-button>
        <el-button type="primary" @click="handleToExportExcel5">导出excel(合并单元格)</el-button>
        <el-button type="primary" @click="handleToImportExcel">导入excel</el-button>
        <input
          ref="fileInput"
          type="file"
          accept=".xls,.xlsx"
          class="upload-file"
          @change="importExcel($event)"
          style="display: none"
        />
      </template>
      <span>导入excel文件内容:</span>
      <template v-if="excelHeader">
        <el-table :data="excelData" border style="width: 100%">
          <el-table-column v-for="(item, index) in excelHeader" :key="index" :prop="item" :label="item" width="100" />
        </el-table>
      </template>
      <template v-else> <span> 无(请导入excel文件以查看)</span> </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import ExcelJS from "exceljs";
import FileSaver from "file-saver";
import { onMounted, ref } from "vue";

defineOptions({
  name: "ExcelAction",
});

const excelHeader = ref();
const excelData = ref();

const fileInputRef = ref<HTMLElement | null>(null); // 创建文件选择输入框的引用

// 导出excel文件(固定列和内容)
const handleToExportExcel1 = () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表，名为sheet1
  const sheet1 = workbook.addWorksheet("sheet1");
  // 导出数据列表
  const data = [
    { 姓名: "张三", 年龄: 18, 身高: 175, 体重: 74 },
    { 姓名: "李四", 年龄: 22, 身高: 177, 体重: 84 },
    { 姓名: "王五", 年龄: 53, 身高: 155, 体重: 64 },
  ];
  // 获取表头所有键
  const headers = Object.keys(data[0]);
  // 将标题写入第一行
  sheet1.addRow(headers);
  // 将数据写入工作表
  data.forEach((row) => {
    const values = Object.values(row);
    sheet1.addRow(values);
  });
  // 导出表格文件
  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      let file = new Blob([buffer], { type: "application/octet-stream" });
      FileSaver.saveAs(file, "ExcelJS.xlsx");
    })
    .catch((error) => console.log("Error writing excel export", error));
};

// 导出excel文件(自定义列宽度和内容)
const handleToExportExcel2 = () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表，名为sheet1
  const sheet1 = workbook.addWorksheet("sheet1");
  // 添加表头列数据
  sheet1.columns = [
    { header: "姓名", key: "name", width: 20 },
    { header: "年龄", key: "age", width: 10 },
    { header: "身高", key: "height", width: 10 },
    { header: "体重", key: "weight", width: 10 },
  ];
  // 添加内容列数据
  sheet1.addRow({ sort: 1, name: "张三", age: 18, height: 175, weight: 74 });
  sheet1.addRow({ sort: 2, name: "李四", age: 22, height: 177, weight: 88 });
  sheet1.addRow({ sort: 3, name: "王五", age: 53, height: 155, weight: 62 });
  // 导出表格文件
  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      let file = new Blob([buffer], { type: "application/octet-stream" });
      FileSaver.saveAs(file, "ExcelJS.xlsx");
    })
    .catch((error) => console.log("Error writing excel export", error));
};

// 导出excel文件(自定义样式)
const handleToExportExcel3 = () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表，名为sheet1
  const sheet1 = workbook.addWorksheet("sheet1");
  // 导出数据列表
  const data = [
    { 姓名: "张三", 年龄: 18, 身高: 175, 体重: 74 },
    { 姓名: "李四", 年龄: 22, 身高: 177, 体重: 84 },
    { 姓名: "王五", 年龄: 53, 身高: 155, 体重: 64 },
  ];
  // 获取表头所有键
  const headers = Object.keys(data[0]);
  // 将标题写入第一行
  sheet1.addRow(headers);
  // 将数据写入工作表
  data.forEach((row) => {
    const values = Object.values(row);
    sheet1.addRow(values);
  });
  // 修改所有单元格样式
  // 遍历每一行
  sheet1.eachRow((row, rowNumber) => {
    // 遍历每个单元格
    row.eachCell((cell) => {
      // 设置边框样式
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      // 设置居中对齐
      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
  });
  // 获取标题行数据
  const titleCell = sheet1.getRow(1);
  // 设置行高为30
  titleCell.height = 30;
  // 设置标题行单元格样式
  titleCell.eachCell((cell) => {
    // 设置标题行背景颜色为黄色
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" },
    };
    // 设置标题行字体
    cell.font = {
      color: { argb: "FF0000" }, //颜色为红色
      bold: true, // 字体粗体
      size: 18, // 设置字体大小为18
    };
  });
  // 获取第二行到最后一行的内容数据
  const bodyRows = sheet1.getRows(2, sheet1.rowCount) as ExcelJS.Row[];
  // 处理内容行的数据
  bodyRows.forEach((bodyRow) => {
    // 设置行高为20
    bodyRow.height = 20;
    bodyRow.eachCell((cell) => {
      cell.font = {
        size: 16, // 设置内容行字体大小为16
      };
    });
  });
  // 导出表格文件
  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      let file = new Blob([buffer], { type: "application/octet-stream" });
      FileSaver.saveAs(file, "ExcelJS.xlsx");
    })
    .catch((error) => console.log("Error writing excel export", error));
};

// 导出excel文件(附带excel公式)
const handleToExportExcel4 = () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表，名为sheet1
  const sheet1 = workbook.addWorksheet("sheet1");
  // 导出数据列表
  const data = [
    { 姓名: "张三", 年龄: 18, 身高: 1.75, 体重: 74 },
    { 姓名: "李四", 年龄: 22, 身高: 1.77, 体重: 84 },
    { 姓名: "王五", 年龄: 53, 身高: 1.55, 体重: 64 },
  ];
  // 获取表头所有键
  const headers = Object.keys(data[0]);
  // 将标题写入第一行
  sheet1.addRow(headers);
  // 将数据写入工作表
  data.forEach((row) => {
    const values = Object.values(row);
    sheet1.addRow(values);
  });
  // 添加单元格
  sheet1.getCell("E1").value = "BMI指数";
  sheet1.getCell("F1").value = "平均身高";
  sheet1.getCell("G1").value = "最大体重";
  // 计算平均身高
  sheet1.getCell("F2").value = { formula: "=AVERAGE(C2:C4)" };
  // 计算最大体重
  sheet1.getCell("G2").value = { formula: "=MAX(D2:D4)" };
  // 计算BMI指数
  // 获取第5列对象
  const BMIRange = sheet1.getColumn(5);
  BMIRange.eachCell((cell) => {
    console.log("cell", cell);
    console.log(cell.row);
    // 从第二列开始添加计算公式
    if (parseInt(cell.row) >= 2) {
      sheet1.getCell("E" + cell.row).value = {
        formula: "D" + cell.row + "/" + "(C" + cell.row + "*" + "C" + cell.row + ")",
      };
    }
  });
  // 导出表格文件
  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      let file = new Blob([buffer], { type: "application/octet-stream" });
      FileSaver.saveAs(file, "ExcelJS.xlsx");
    })
    .catch((error) => console.log("Error writing excel export", error));
};

// 导出excel文件(合并单元格)
const handleToExportExcel5 = () => {
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();
  // 添加工作表，名为sheet1
  const sheet1 = workbook.addWorksheet("sheet1");
  // 导出数据列表
  const data = [
    { 姓名: "张三", 年龄: 18, 身高: 175, 体重: 74 },
    { 姓名: "李四", 年龄: 18, 身高: "未知", 体重: "未知" },
    { 姓名: "王五", 年龄: 53, 身高: "未知", 体重: "未知" },
    { 姓名: "赵六", 年龄: 12, 身高: "未知", 体重: "未知" },
  ];
  // 获取表头所有键
  const headers = Object.keys(data[0]);
  // 将标题写入第一行
  sheet1.addRow(headers);
  // 将数据写入工作表
  data.forEach((row) => {
    const values = Object.values(row);
    sheet1.addRow(values);
  });
  // 上下合并单元格
  sheet1.mergeCells("B2:B3");
  // 左右合并单元格
  sheet1.mergeCells("C3:D3");
  // 范围合并单元格
  sheet1.mergeCells("C4:D5");
  // 导出表格文件
  workbook.xlsx
    .writeBuffer()
    .then((buffer) => {
      let file = new Blob([buffer], { type: "application/octet-stream" });
      FileSaver.saveAs(file, "ExcelJS.xlsx");
    })
    .catch((error) => console.log("Error writing excel export", error));
};

// 点击上传按钮触发文件选择对话框
const handleToImportExcel = () => {
  fileInputRef.value?.click(); // 触发点击事件打开文件选择对话框
};

// 导入excel文件
const importExcel = (event: any) => {
  // 获取选择的文件
  const files = event.target.files;
  const selectedFile = files[0];
  // 创建Workbook实例
  const workbook = new ExcelJS.Workbook();
  // 使用FileReader对象来读取文件内容
  const fileReader = new FileReader();
  // 设置文件读取完成时的回调函数
  fileReader.onload = (ev) => {
    if (!ev || !ev.target || !(ev.target.result instanceof ArrayBuffer)) {
      console.error("Failed to read file content");
      return;
    }
    console.log(ev);
    // 从 buffer中加载数据解析
    workbook.xlsx.load(ev.target.result).then((workbook) => {
      // 获取第一个worksheet内容
      const worksheet = workbook.getWorksheet(1);
      if (!worksheet) {
        console.error("读取文件内容是吧!");
        return;
      }
      // 获取第一行的标题
      const headers: string[] = [];
      worksheet.getRow(1).eachCell((cell) => {
        headers.push(cell.value as string);
      });
      // console.log("headers", headers);
      excelHeader.value = headers;
      // 创建一个空的JavaScript对象数组，用于存储解析后的数据
      const data: any[] = [];
      // 遍历工作表的每一行（从第二行开始，因为第一行通常是标题行）
      for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
        const rowData: any = {};
        const row = worksheet.getRow(rowNumber);
        // 遍历当前行的每个单元格
        row.eachCell((cell, colNumber) => {
          // 获取标题对应的键，并将当前单元格的值存储到相应的属性名中
          rowData[headers[colNumber - 1]] = cell.value;
        });
        // 将当前行的数据对象添加到数组中
        data.push(rowData);
      }
      console.log("data", data);
      excelData.value = data;
    });
  };
  // 二进制字符串的形式加载文件
  fileReader.readAsArrayBuffer(selectedFile);
};

// 在组件渲染完成后，确保文件选择输入框已经渲染完成
onMounted(() => {
  fileInputRef.value = document.querySelector(".upload-file");
});
</script>

<style lang="scss" scoped>
.excel-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
