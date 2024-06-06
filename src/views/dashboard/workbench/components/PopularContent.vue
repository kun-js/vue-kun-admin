<template>
  <div class="popular-content-container">
    <el-card :body-style="{ height: '540px' }">
      <template #header>
        <span style="white-space: nowrap">热点内容</span>
      </template>
      <el-table v-loading="loading" :data="newsList" style="width: 100%" fit stripe show-overflow-tooltip>
        <el-table-column align="center" prop="title" label="标题" />
        <el-table-column align="center" prop="source" label="作者" width="120">
          <template #default="author">
            <span v-show="author.row.source">{{ author.row.source }}</span>
            <span v-show="!author.row.source">-</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="digest" label="简介">
          <template #default="description">
            <span v-show="description.row.digest">{{ description.row.digest }}</span>
            <span v-show="!description.row.digest">-</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="ptime" label="出版时间" width="180" sortable />
        <el-table-column align="center" label="操作" width="80">
          <template #default="action">
            <el-link type="primary" :href="action.row.url" target="_blank" :disabled="!action.row.url"> 查看 </el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

// 定义接口以描述新闻数据的结构
interface NewsItem {
  title: string;
  source: string;
  digest: string;
  ptime: string;
  url: string;
}

const newsList = ref<NewsItem[]>([]);
const loading = ref(false);

const fetchData = async () => {
  try {
    loading.value = true;
    const response = await axios.get("https://v.api.aa1.cn/api/api-tplist/go.php/api/News/local_news", {
      params: {
        name: "广东省_深圳市",
        page: 0,
      },
    });
    if (response.status === 200) {
      newsList.value = response.data.data;
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
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
