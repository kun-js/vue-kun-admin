<template>
  <div class="debounce-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">防抖节流示例(时间均为1s)</span>
      </template>
      <div class="debounce-action">
        <p>
          防抖的原理是当持续触发事件后，在一定时间内（例如半秒或一秒）如果没有再次触发事件，则事件处理函数只会执行一次，如果在设定的时间内再次被触发，则重新计算时间间隔，防抖适用于用户停止操作后才执行的场景，如搜索建议、输入框验证等。
        </p>
        <el-button type="primary" @click="clickEventDebounce" style="width: 50px"> 防抖 </el-button>
        <p>
          节流的原理是即使事件被频繁触发，也能保证在一定间隔内（例如每秒）只执行一次事件处理函数，节流适用于需要限制事件频率的场景，如滚动事件、mousemove事件等。
        </p>
        <el-button type="primary" @click="clickEventThrottle" style="width: 50px"> 节流 </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
import { ElMessage } from "element-plus";

defineOptions({
  name: "Debounce",
});

const clickEventDebounce = debounce(() => {
  ElMessage.success("防抖");
}, 1000);

const clickEventThrottle = throttle(() => {
  ElMessage.success("节流");
}, 1000);
</script>

<style lang="scss" scoped>
.debounce-feature-container {
  height: 100%;
  padding: 20px;

  .debounce-action {
    display: flex;
    flex-direction: column;
  }

  .el-button {
    margin-bottom: 18px;
  }
}
</style>
