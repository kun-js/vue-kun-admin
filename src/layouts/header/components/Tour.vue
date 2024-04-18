<template>
  <el-tooltip placement="bottom" effect="dark" trigger="hover" :content="$t('header.tour')">
    <div class="tour" @click="handleToOpenTour">
      <el-icon :size="20"><Guide /></el-icon>
    </div>
  </el-tooltip>
  <el-tour v-model="isTourOpen">
    <el-tour-step
      :title="$t('header.tour_step_one_title')"
      :description="$t('header.tour_step_one_description')"
      :next-button-props="{ children: $t('header.tour_step_next_button') }"
    />
    <el-tour-step
      :title="$t('header.tour_step_two_title')"
      :description="$t('header.tour_step_two_description')"
      :target="foldEl"
      :prev-button-props="{ children: $t('header.tour_step_prev_button') }"
      :next-button-props="{ children: $t('header.tour_step_next_button') }"
    />
    <el-tour-step
      :title="$t('header.tour_step_three_title')"
      :description="$t('header.tour_step_three_description')"
      :target="langEl"
      :prev-button-props="{ children: $t('header.tour_step_prev_button') }"
      :next-button-props="{ children: $t('header.tour_step_end_button') }"
    />
  </el-tour>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  foldEl: any;
  langEl: any;
}>();

const isTourOpen = ref(false);
const handleToOpenTour = () => {
  isTourOpen.value = !isTourOpen.value;
};
</script>

<style lang="scss" scoped>
.tour {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--header-button-active);
    border-bottom: 1px solid #eee;
  }
}
</style>
