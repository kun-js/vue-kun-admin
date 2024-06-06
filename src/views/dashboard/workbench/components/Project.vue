<template>
  <div class="project-container">
    <el-card :body-style="{ padding: 0 }">
      <template #header> <span style="white-space: nowrap">项目</span> </template>
      <el-row>
        <el-col :span="8" v-for="item in projectList" :key="item.id">
          <el-card shadow="hover" style="border-radius: 0" :body-style="{ height: '160px' }">
            <div class="project">
              <div class="project-title">
                <div class="project-title-icon"><Icon :icon="item.icon" :size="8" /></div>
                <div class="project-title-name">{{ item.name }}</div>
              </div>
              <div class="project-introduce">{{ item.introduce }}</div>
              <div class="project-footer">
                <div class="project-footer-team">{{ item.team }}</div>
                <div class="project-footer-time">{{ item.time }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

interface Project {
  id: number;
  icon: string;
  name: string;
  introduce: string;
  team: string;
  time: string;
}

const projectList = ref<Project[]>([
  {
    id: 1,
    icon: "logos:vue",
    name: "Vue",
    introduce: "易学易用，性能出色，适用场景丰富的 Web 前端框架",
    team: "前端开发",
    time: "2013-02-01",
  },
  {
    id: 2,
    icon: "logos:react",
    name: "React",
    introduce: "用于构建 Web 和原生交互界面的库",
    team: "前端开发",
    time: "2013-05-29",
  },
  {
    id: 3,
    icon: "vscode-icons:file-type-angular",
    name: "Angular",
    introduce: "构建未来的 Web 开发框架",
    team: "前端开发",
    time: "2010-10-20",
  },
  {
    id: 4,
    icon: "devicon:svelte",
    name: "Svelte",
    introduce: "一个构建 web 应用程序的工具",
    team: "前端开发",
    time: "2016-11-27",
  },
  {
    id: 5,
    icon: "logos:solid",
    name: "Solid",
    introduce: "一个用于构建用户界面，简单高效、性能卓越的JavaScript库",
    team: "前端开发",
    time: "2020-09-14",
  },
  {
    id: 6,
    icon: "devicon:qwik",
    name: "Qwik",
    introduce: "为edge而生的框架",
    team: "前端开发",
    time: "2020-04-27",
  },
]);
</script>

<style lang="scss" scoped>
.project-container {
  margin-bottom: 20px;

  .project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;

    &-title {
      display: flex;
      align-items: center;

      &-name {
        margin-left: 18px;
        font-size: 20px;
      }
    }

    &-introduce {
      height: 45px;
      margin-bottom: 18px;
      font-size: 14px;
    }

    &-footer {
      display: flex;
      justify-content: space-between;

      &-team {
        font-size: 14px;
        white-space: nowrap;
      }

      &-time {
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
}
</style>
