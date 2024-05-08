<template>
  <div class="watermark-feature-container">
    <div class="watermark-container">
      <el-card style="max-width: 100%; height: var(--card-height)">
        <template #header>
          <span style="margin-right: 18px">水印示例</span>
        </template>
        <div class="visit-watermark">
          <div class="action">
            <el-button type="primary" @click="handleToCreateTextWaterMarkOne">创建文字水印1</el-button>
            <el-button type="primary" @click="handleToCreateTextWaterMarkTwo">创建文字水印2</el-button>
            <el-button type="primary" @click="handleToCreatePicWaterMark">创建图片水印</el-button>
            <el-button type="danger" @click="handleToDeleteWaterMark">清除水印</el-button>
          </div>
          <div class="display">
            <el-watermark :font="font" content="KUN ADMIN">
              <div class="watermark" v-show="isShowTextWatermarkOne"></div>
            </el-watermark>
            <el-watermark :font="font" :content="['CXK', 'JINITAIMEI']">
              <div class="watermark" v-show="isShowTextWatermarkTwo"></div>
            </el-watermark>
            <el-watermark
              :width="120"
              :height="50"
              image="https://img2.baidu.com/it/u=964355120,2707565892&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
            >
              <div class="watermark" v-show="isShowPicWatermark"></div>
            </el-watermark>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

defineOptions({
  name: "Watermark",
});

const isShowTextWatermarkOne = ref(false);
const isShowTextWatermarkTwo = ref(false);
const isShowPicWatermark = ref(false);

const font = reactive({
  color: "rgba(0, 0, 0, 0.15)",
});

const handleToDeleteWaterMark = () => {
  isShowTextWatermarkOne.value = false;
  isShowTextWatermarkTwo.value = false;
  isShowPicWatermark.value = false;
};

const handleToCreateTextWaterMarkOne = () => {
  handleToDeleteWaterMark();
  isShowTextWatermarkOne.value = true;
};

const handleToCreateTextWaterMarkTwo = () => {
  handleToDeleteWaterMark();
  isShowTextWatermarkTwo.value = true;
};

const handleToCreatePicWaterMark = () => {
  handleToDeleteWaterMark();
  isShowPicWatermark.value = true;
};
</script>

<style lang="scss" scoped>
.watermark-feature-container {
  height: 100%;
  padding: 20px;

  .watermark-container {
    height: 100%;

    .visit-watermark {
      position: relative;

      .action {
        position: absolute;
        z-index: 1000;
      }

      .display {
        position: fixed;
        top: 48px;
        left: 200px;
        width: 100%;
        height: 100%;

        .watermark {
          height: 100vh;
        }
      }
    }
  }
}
</style>
