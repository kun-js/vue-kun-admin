<template>
  <div class="barcode-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '95%' }">
      <template #header>
        条码生成示例(可扫描)
        <el-button type="primary" @click="handleToCreateBarcode">生成条形码</el-button>
        <el-button type="primary" @click="handleToCreateQRcode">生成二维码</el-button>
      </template>
      <el-row :gutter="20">
        <el-col :span="10"
          ><span>生成条形码如下:</span>
          <div class="barcode-container">
            <svg id="barcode" />
          </div>
        </el-col>
        <el-col :span="10">
          <span>生成二维码如下:</span>
          <div v-if="QRcodeValue">
            <qrcode-vue :value="QRcodeValue" :size="QRcodeSize" />
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JsBarcode from "jsbarcode";
import QrcodeVue from "qrcode.vue";

const QRcodeValue = ref("");
const QRcodeSize = ref();

const handleToCreateBarcode = () => {
  JsBarcode("#barcode", "barcode test", {
    format: "CODE128", //选择要使用的条形码类型
    width: 2, //线宽
    height: 48, //条码高度
    text: "Barcode test", //显示文本
    displayValue: true, //是否在条形码下方显示文字
    textPosition: "bottom", //设置文本的垂直位置
    // fontOptions: "bold italic", //使文字加粗体或变斜体
    background: "#fff", //设置条形码的背景
    // font: "fantasy", //设置文本的字体
    lineColor: "#000", //设置条和文本的颜色。
    fontSize: 16, //设置文本的大小
    margin: 10, //设置条形码周围的空白边距
  });
};
const handleToCreateQRcode = async () => {
  QRcodeValue.value = "QRcode test";
  QRcodeSize.value = 100;
};
</script>

<style lang="scss" scoped>
.barcode-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
