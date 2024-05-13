<template>
  <el-card style="max-width: 100%">
    <strong>关于</strong>
    <div class="mt-2">
      <span><el-tag>vue-kun-admin</el-tag>是一款基于Vue3、Vite5、Element-Plus、TypeScript的中后台解决方案。</span>
    </div>
  </el-card>
  <div class="project-info-container">
    <el-card style="max-width: 100%">
      <el-descriptions title="项目信息" :column="4" border="true">
        <el-descriptions-item>
          <template #label> <span style="white-space: nowrap">当前版本</span> </template>
          <el-tag>0.0.1</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">最后编译时间</span> </template>
          <el-tag>{{ time }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">node 版本建议</span> </template>
          <el-tag>>=18.16.0</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">pnpm 版本建议</span> </template>
          <el-tag>>=8.15.0</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">开发人员</span> </template>
          <el-tag>张三</el-tag>
          <el-tag class="ml-2">李四</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">代码仓库</span> </template>
          <el-link type="primary" href="https://github.com/kun-js/vue-kun-admin" target="_blank"> Github </el-link>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> <span style="white-space: nowrap">预览地址</span> </template>
          <el-link type="primary" href="http://8.134.153.24" target="_blank"> 预览链接 </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
  <div class="personal-info-container">
    <el-card style="max-width: 100%">
      <el-descriptions title="个人介绍" :column="3" border="true">
        <el-descriptions-item>
          <template #label> <span style="white-space: nowrap">姓名</span> </template>
          <el-tag>张三</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">年龄</span> </template>
          <el-tag>18</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label> <span style="white-space: nowrap">地区</span> </template>
          <el-tag>深圳</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">已当社畜</span> </template>
          <el-tag>5年</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">熟悉语言</span> </template>
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:c" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:cplusplus" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:php" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:java" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:python" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:javascript" />
          <Icon style="margin-right: 8px; font-size: 20px" icon="devicon:typescript" />
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">兴趣爱好</span> </template>
          🏀 ⚽ 🎳 🏓 🏸 🎱 🎣
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label><span style="white-space: nowrap">个人简介</span> </template>
          一名对前端开发充满热情的工程师，拥有丰富的前端技术背景，擅长使用HTML、CSS和JavaScript等技术构建优质的Web应用程序。熟练掌握现代前端框架如Vue.js和React.js，并通过实践不断提升自己的技能。
          在职业生涯中积累了丰富的项目经验，涉及各种规模的项目开发，从简单的静态网页到复杂的单页面应用程序。为人乐于接受挑战，解决技术难题，并通过创造性的解决方案为团队带来价值。喜欢与设计团队密切合作，将设计转化为用户友好的界面，并确保网站的性能和可访问性达到最佳水平。
          除了技术方面，注重团队合作和沟通能力，乐于分享知识和经验，与团队成员协作，共同努力实现项目的成功。对新技术和趋势保持着持续的关注，并乐于接受新的挑战和机遇。
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getDateTime } from "@/utils/getDateTime";
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

defineOptions({
  name: "Me",
});

const time = ref();

const getTime = () => {
  time.value = getDateTime(4);
};

onMounted(() => {
  getTime();
});
</script>

<style lang="scss" scoped>
.project-info-container {
  padding: 20px;
}

.personal-info-container {
  padding: 0 20px 20px;
}
</style>
