<template>
  <el-card style="max-width: 100%">
    <div class="personal-info-container">
      <div class="personal-info">
        <div class="personal-info-left">
          <el-avatar :size="72" :src="userStore.userInfo.avatar" />
        </div>
        <div class="personal-info-right">
          <div class="personal-info-right-greeting">
            <span>你好,{{ userStore.userInfo.name }},祝您今日工作愉快!</span>
          </div>
          <div class="personal-info-right-weather">
            偶像练习生<span v-if="weather && temperature"> | 当前天气:{{ weather }},温度:{{ temperature }}</span>
          </div>
        </div>
      </div>
      <div class="personal-task">
        <div class="personal-task-info">
          <div class="personal-task-info-title">代办事项</div>
          <div class="personal-task-info-number">0/10</div>
        </div>
        <div class="personal-task-info">
          <div class="personal-task-info-title">未读消息</div>
          <div class="personal-task-info-number">17</div>
        </div>
        <div class="personal-task-info">
          <div class="personal-task-info-title">团队人数</div>
          <div class="personal-task-info-number">30</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ref, onMounted } from "vue";

const userStore = useUserStore();

const weather = ref();
const temperature = ref();

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.seniverse.com/v3/weather/now.json", {
      params: {
        key: "SLoH6H86MEago-1B3",
        location: "shenzhen",
        language: "zh-Hans",
        unit: "c",
      },
    });
    // console.log("response: ", response);
    weather.value = response.data.results[0].now.text;
    temperature.value = response.data.results[0].now.temperature;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.personal-info-container {
  display: flex;
  justify-content: space-between;

  .personal-info {
    display: flex;
    align-items: center;
    justify-content: center;

    &-left {
      margin-right: 18px;
    }

    &-right {
      &-greeting {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 800;
        white-space: nowrap;
      }

      &-weather {
        font-size: 14px;
        color: #8c8c8c;
        white-space: nowrap;
      }
    }
  }

  .personal-task {
    display: flex;
    align-items: center;
    justify-content: center;

    &-info {
      padding: 0 10px;

      &-title {
        font-size: 14px;
        color: #8c8c8c;
        white-space: nowrap;
      }

      &-number {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
