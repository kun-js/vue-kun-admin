<template>
  <div class="card-list-page-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header> 卡片列表示例 </template>
      <el-row :gutter="20">
        <template v-for="item in tableData" :key="item.id">
          <el-col class="card-list-container" :span="6">
            <el-card shadow="hover" style="max-width: 480px" :body-style="{ height: '120px' }">
              <template #header>
                <div class="card-header">
                  <img class="card-header-icon" :src="item.icon" />
                  <span class="card-header-title">{{ item.title }}</span>
                </div>
              </template>
              <div class="card-body">
                <div class="card-body-content">
                  {{ item.content }}
                </div>
              </div>
            </el-card>
          </el-col>
        </template>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getUserList } from "@/api/index";

defineOptions({
  name: "CardList",
});

const tableData = ref();

const fetchData = async () => {
  try {
    const result = await getUserList();
    // console.log("result: ", result);
    tableData.value = result.cardList;
  } catch (error) {
    console.log("error: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.card-list-page-container {
  height: 100%;
  padding: 20px;

  .card-list-container {
    .el-card {
      margin-bottom: 20px;
    }

    .card-header {
      &-icon {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }

      &-title {
        margin-left: 18px;
        font-size: 20px;
      }
    }

    .card-body {
      &-content {
        font-size: 14px;
      }
    }
  }
}
</style>
