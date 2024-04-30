<template>
  <div class="image-clipper-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)">
      <template #header>
        <span style="margin-right: 18px">图片裁剪示例</span>
      </template>
      <el-row :gutter="20">
        <el-col :span="6">
          <cropper-img :imageSrc="imageSrc" @update-image-src="updateImageSrc" />
        </el-col>
        <el-col :span="6" :offset="3">
          <div>
            <span>预览图片</span>
            <div class="demo-image__preview">
              <el-image
                style="width: 300px; height: 300px"
                :src="imageNew"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="srcList"
                :autoCrop="true"
                fit="cover"
              >
                <template #error>
                  <span>请裁剪图片以查看</span>
                </template>
              </el-image>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import cropperImg from "./components/cropperImg.vue";
import { ref } from "vue";

defineOptions({
  name: "ImageClipper",
});

const srcList: any[] = [
  "https://cdn.tehub.com/uploads/bCChGvhsbU/u/avatar/a2885f74-5400-48a1-fa93-a0bbdb7bddd6.jpeg?imageView2/1/w/200/h/200/q/100",
];

const imageSrc = ref(
  "https://cdn.tehub.com/uploads/bCChGvhsbU/u/avatar/a2885f74-5400-48a1-fa93-a0bbdb7bddd6.jpeg?imageView2/1/w/200/h/200/q/100"
);
//定义一个imageNew变量来接收裁剪之后的图片
const imageNew = ref();
//点击裁剪按钮
const updateImageSrc = (updateImageSrc: any) => {
  imageNew.value = updateImageSrc;
  srcList[0] = imageNew.value;
};
</script>

<style lang="scss" scoped>
.image-clipper-feature-container {
  height: 100%;
  padding: 20px;

  .demo-image__error .image-slot {
    font-size: 30px;
  }

  .demo-image__error .image-slot .el-icon {
    font-size: 30px;
  }

  .demo-image__error .el-image {
    width: 100%;
    height: 200px;
  }
}
</style>
