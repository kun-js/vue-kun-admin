<template>
  <div class="popular-content-container">
    <el-card>
      <template #header> 热门内容 </template>
      <el-table v-loading="loading" :data="newsList" style="width: 100%" fit stripe height="500" show-overflow-tooltip>
        <el-table-column align="center" prop="title" label="标题" />
        <el-table-column align="center" prop="author" label="作者" width="120">
          <template #default="author">
            <span v-show="author.row.author">{{ author.row.author }}</span>
            <span v-show="!author.row.author">-</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="description" label="简介">
          <template #default="description">
            <span v-show="description.row.description">{{ description.row.description }}</span>
            <span v-show="!description.row.description">-</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="publishedAt" label="出版时间" width="180" sortable>
          <template #default="time">
            <span>{{ timeChange(time.row.publishedAt) }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="80">
          <template #default="action">
            <el-link type="primary" :href="action.row.url" target="_blank">查看</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const newsList = ref();
const loading = ref(false);

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "cn",
        apiKey: "85380583292c4efa942b23699d902722",
      },
    });
    // console.log("response: ", response);
    if (response.status === 200) {
      newsList.value = response.data.articles;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const timeChange = (timestamp: string) => {
  const timeValue = timestamp;
  const dateTime = new Date(timeValue);
  // 提取日期和时间
  const date = dateTime.toLocaleDateString(); // 日期
  const time = dateTime.toLocaleTimeString(); // 时间

  return date + " " + time;
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.popular-content-container {
  margin-bottom: 20px;
}
</style>
