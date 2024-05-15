<template>
  <div class="mind-map-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)" :body-style="{ height: '93%', padding: 0 }">
      <template #header>
        <span style="margin-right: 18px">思维导图示例</span>
      </template>
      <div class="mind-map-container">
        <div
          id="mindMapContainer"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 0; margin: 0"
        ></div>
        <div class="toolbar">
          <!-- <el-button @click="back" v-if="!isStart">回退</el-button>
          <el-button @click="forward" v-if="!isEnd">前进</el-button>
          <el-button @click="insertNode" v-if="activeNodes.length > 0">插入兄弟节点</el-button>
          <el-button @click="insertChildNode" v-if="activeNodes.length > 0">插入子节点</el-button>
          <el-button @click="deleteNode" v-if="activeNodes.length > 0">删除节点</el-button> -->
          <el-button @click="insertImage" :disabled="activeNodes.length <= 0">插入图片</el-button>
          <el-button @click="insertIcon" :disabled="activeNodes.length <= 0">插入图标</el-button>
          <el-button @click="insertLink" :disabled="activeNodes.length <= 0">插入超链接</el-button>
          <el-button @click="insertNote" :disabled="activeNodes.length <= 0">插入备注</el-button>
          <el-button @click="insertTag" :disabled="activeNodes.length <= 0">插入标签</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import MindMap from "simple-mind-map";
import { onMounted, ref, shallowRef } from "vue";

defineOptions({
  name: "MindMap",
});

// 当前激活的节点列表
const activeNodes = shallowRef([]);

let mindMap = null;

// // 记录前进回退
// const isStart = ref(true);
// const isEnd = ref(true);

// // 回退
// const back = () => {
//   mindMap.execCommand("BACK");
// };

// // 前进
// const forward = () => {
//   mindMap.execCommand("FORWARD");
// };

// // 插入兄弟节点
// const insertNode = () => {
//   mindMap.execCommand("INSERT_NODE");
// };

// // 插入子节点
// const insertChildNode = () => {
//   mindMap.execCommand("INSERT_CHILD_NODE");
// };

// // 删除节点
// const deleteNode = () => {
//   mindMap.execCommand("REMOVE_NODE");
// };

// 插入图片
const insertImage = () => {
  activeNodes.value.forEach((node) => {
    node.setImage({
      url: "https://lxqnsys.oss-cn-beijing.aliyuncs.com/qlx/xh2AXkBxYm5jGe5fD7DWYrC5b.png",
      title: "图片的标题或描述",
      width: 100, // 图片的宽高也不能少
      height: 100,
    });
  });
};

// 插入图标
const insertIcon = () => {
  const iconList = ["priority_1", "priority_2"];
  activeNodes.value.forEach((node) => {
    node.setIcon(iconList);
  });
};

// 插入超链接
const insertLink = () => {
  activeNodes.value.forEach((node) => {
    node.setHyperlink("http://lxqnsys.com/", "理想青年实验室");
  });
};

// 插入备注
const insertNote = () => {
  activeNodes.value.forEach((node) => {
    node.setNote("备注内容");
  });
};

// 插入标签
const insertTag = () => {
  activeNodes.value.forEach((node) => {
    node.setTag(["标签1", "标签2"]);
  });
};

const initMindMap = () => {
  const mindMap = new MindMap({
    el: document.getElementById("mindMapContainer"),
    data: {
      data: {
        text: "根节点",
      },
      children: [
        {
          data: {
            text: "二级节点",
          },
          children: [],
        },
        {
          data: {
            text: "二级节点",
          },
          children: [],
        },
      ],
    },
    initRootNodePosition: ["left", "center"],
  });

  // 监听节点激活事件
  mindMap.on("node_active", (node: any, nodeList: never[]) => {
    activeNodes.value = nodeList;
  });

  // 前进回退事件
  mindMap.on("back_forward", (index: number, len: number) => {
    isStart.value = index <= 0;
    isEnd.value = index >= len - 1;
  });
};

onMounted(() => {
  initMindMap();
});
</script>

<style lang="scss" scoped>
.mind-map-feature-container {
  height: 100%;
  padding: 20px;
}

.mind-map-container {
  position: relative;
  width: 100%;
  height: 100%;

  .toolbar {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>
