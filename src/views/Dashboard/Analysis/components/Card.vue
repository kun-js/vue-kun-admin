<template>
  <div class="card">
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="card-header-title">{{ item.title }}</span>
          <el-tag :type="tagType[item.time]">{{ item.time }}</el-tag>
        </div>
      </template>
      <div class="card-body">
        <div class="card-body-text">{{ item.text }}</div>
        <div class="card-body-icon">
          <img class="icon" :src="images[item.iconType]" alt="" />
        </div>
      </div>
      <template #footer>
        <div class="card-footer">
          <div class="card-footer-total">{{ item.total }}</div>
          <div class="card-footer-number">{{ item.number }}</div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import VisitNumber from "@/assets/imgs/VisitNumber.png";
import Download from "@/assets/imgs/Download.png";
import DealAmount from "@/assets/imgs/DealAmount.png";
import DealNumber from "@/assets/imgs/DealNumber.png";

interface DataItem {
  id: number;
  title: string;
  time: string;
  text: string;
  iconType: string;
  total: string;
  number: string;
}

const props = defineProps<{
  item: DataItem;
}>();

const tagType: { [key: string]: string } = {
  周: "primary",
  月: "success",
  年: "danger",
};

const images: { [key: string]: string } = {
  "1": VisitNumber,
  "2": Download,
  "3": DealAmount,
  "4": DealNumber,
};
</script>

<style lang="scss" scoped>
.el-card {
  --el-card-border-color: var(--el-border-color-light);
  --el-card-border-radius: 4px;
  --el-card-padding: 0px;
  --el-card-bg-color: var(--el-fill-color-blank);
}

.card {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    padding: 0 16px;

    &-title {
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  &-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 108px;
    padding: 28px;

    &-text {
      font-size: 28px;
    }

    &-icon {
      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    padding: 0 28px;

    &-total {
      font-size: 14px;
      white-space: nowrap;
    }

    &-number {
      font-size: 14px;
    }
  }
}
</style>
