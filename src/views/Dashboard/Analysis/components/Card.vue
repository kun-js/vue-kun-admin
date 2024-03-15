<template>
  <div class="card">
    <el-card style="width: 25%">
      <template #header>
        <div class="card-header">
          <span class="card-header-title">访问数</span>
          <el-tag>周</el-tag>
        </div>
      </template>
      <div class="card-body">
        <div class="card-body-text">$2000</div>
        <div class="card-body-icon">
          <img class="icon" src="@/assets/imgs/VisitNumber.png" alt="" />
        </div>
      </div>
      <template #footer>
        <div class="card-footer">
          <div class="card-footer-total">总访问数</div>
          <div class="card-footer-number">$100000</div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

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
    padding: 0 12px;

    &-title {
      font-size: 14px;
      font-weight: 600;
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
    }

    &-number {
      font-size: 14px;
    }
  }
}
</style>
