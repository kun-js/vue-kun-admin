//cropperImg.vue
<template>
  <div class="cropper-container">
    <!--使用ref属性给图片元素命名为imageRef-->
    <img ref="imageRef" :src="imageSrc" alt="image" />
    <el-button type="primary" @click="cropImage">裁剪图片</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
const props = defineProps({
  //图片地址
  imageSrc: {
    type: String,
    required: true,
  },
  //aspectRatio:置裁剪框为固定的宽高比
  aspectRatio: {
    type: Number,
    default: 1,
  },
  //viewMode: 视图控制
  viewMode: {
    type: Number,
    default: 1,
  },
  //autoCropArea: 设置裁剪区域占图片的大小 值为 0-1 默认 0.8 表示 80%的区域
  autoCropArea: {
    type: Number,
    default: 0.8,
  },
});
//绑定图片的dom对象
const imageRef = ref(null);
let cropper = null;
//使用Cropper构造函数创建裁剪器实例，并将图片元素和一些裁剪选项传入
onMounted(() => {
  cropper = new Cropper(imageRef.value, {
    aspectRatio: props.aspectRatio,
    viewMode: props.viewMode,
    autoCropArea: props.autoCropArea,
  });
});

//定义方法
const emit = defineEmits(["updateImageSrc"]);
//在cropImage函数中，获取裁剪后的图片数据URL，并使用emit方法触发updateImageSrc事件，
// 将裁剪后的图片数据URL传递给父组件。
const cropImage = () => {
  const canvas = cropper.getCroppedCanvas();
  const croppedImage = canvas.toDataURL();
  emit("updateImageSrc", croppedImage);
};

//销毁
onBeforeUnmount(() => {
  cropper.destroy();
});
</script>

<style>
.cropper-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .el-button {
    width: 88px;
    margin-top: 18px;
  }
}
</style>
