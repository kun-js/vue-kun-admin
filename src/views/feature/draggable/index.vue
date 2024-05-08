<template>
  <div class="draggable-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header> 拖拽示例 </template>
      <el-row :gutter="20">
        <el-col :span="8">
          <h1>左边位置</h1>
          <div class="drag-box">
            <Draggable
              :list="list"
              :animation="300"
              class="list-group"
              :forceFallback="true"
              chosen-class="chosenClass"
              group="componentsGroup"
            >
              <template #item="{ element }">
                <div class="items">
                  <div class="title">{{ element.label }}</div>
                  <img :src="element.img" height="40" />
                </div>
              </template>
            </Draggable></div
        ></el-col>
        <el-col :span="8">
          <h1>右边位置</h1>
          <div class="drag-box">
            <Draggable
              :list="cloneList"
              :animation="300"
              class="list-group"
              :forceFallback="true"
              chosen-class="chosenClass"
              group="componentsGroup"
            >
              <template #item="{ element }">
                <div class="items">
                  <div class="title">{{ element.label }}</div>
                  <img :src="element.img" height="40" />
                </div>
              </template>
            </Draggable></div
        ></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Draggable from "vuedraggable";

defineOptions({
  name: "Draggable",
});

// 引入图片
import img1 from "@/assets/imgs/xiaoheizi1.png";
import img2 from "@/assets/imgs/xiaoheizi2.png";
import img3 from "@/assets/imgs/xiaoheizi3.png";
import img4 from "@/assets/imgs/xiaoheizi4.png";
import img5 from "@/assets/imgs/xiaoheizi5.png";
import img6 from "@/assets/imgs/xiaoheizi6.png";

const list = reactive([
  { img: img1, label: "图片1", id: 1 },
  { img: img2, label: "图片2", id: 2 },
  { img: img3, label: "图片3", id: 3 },
  { img: img4, label: "图片4", id: 4 },
  { img: img5, label: "图片5", id: 5 },
]);
// 拉取存放位置的数组
const cloneList = reactive([{ img: img6, label: "图片6", id: 6 }]);
</script>

<style lang="scss" scoped>
.draggable-feature-container {
  height: 100%;
  padding: 20px;

  .drag-box {
    .items {
      display: flex;
      justify-content: space-between;
      width: 60%;
      padding: 16px;
      margin-bottom: 12px;
      text-align: center;
      background: #e3e3e3;
      border-radius: 8px;
    }
  }

  .chosenClass {
    border: 3px solid #409eff !important;
  }
}
</style>
