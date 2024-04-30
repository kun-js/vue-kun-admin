<template>
  <div class="signature-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '93%' }">
      <template #header>
        <span style="margin-right: 18px">电子签名示例</span>
      </template>
      <vueEsign
        ref="esign"
        class="mySign"
        :width="800"
        :height="300"
        :isCrop="isCrop"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        v-model:bgColor="bgColor"
      />
      <div class="action">
        <div class="flex">
          <span class="mr-8">画笔粗细</span>
          <el-slider style="width: 300px" v-model="lineWidth" max="100" />
        </div>
        <div class="flex">
          <span class="mr-8">画笔颜色</span>
          <el-color-picker style="width: 300px" v-model="lineColor" />
        </div>
        <div class="mt-4">
          <el-button @click="save" type="primary">生成签字图片</el-button>
          <el-button @click="reset">清空画板</el-button>
        </div>
      </div>
      <img class="signature" v-if="resultImg" :src="resultImg" alt="Signature Image" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import vueEsign from "vue-esign";
import { ElMessage } from "element-plus";
import { ref } from "vue";

defineOptions({
  name: "Signature",
});

const lineWidth = ref(4);
const lineColor = ref("#000000");
const bgColor = ref("#ffffff");
const resultImg = ref("");
const isCrop = ref("");
const esign: any = ref(null);

// 清空画板
const reset = () => {
  if (esign.value) {
    esign.value.reset();
  }
};
// 保存
const save = () => {
  if (esign.value) {
    esign.value
      .generate()
      .then((res: any) => {
        // console.log(res);
        resultImg.value = res;
      })
      .catch((err: any) => {
        // console.log(err);
        ElMessage.error("您还未完成签字，请签字完成后保存");
      });
  }
};
</script>

<style lang="scss" scoped>
.signature-feature-container {
  height: 100%;
  padding: 20px;
}

.mySign {
  border: 1px solid #000;
  border-radius: 8px;
}

.action {
  margin-top: 18px;
}

.signature {
  margin-top: 18px;
  border: 1px solid #000;
  border-radius: 8px;
}
</style>
