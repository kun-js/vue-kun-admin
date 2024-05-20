<template>
  <el-tooltip v-if="isEllipsisActive" :content="text" effect="light" placement="top">
    <span ref="ellipsisText" class="ellipsis-text">{{ text }}</span>
  </el-tooltip>
  <span v-else ref="ellipsisText" class="ellipsis-text">{{ text }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";

interface Props {
  text: string;
}

const props = defineProps<Props>();

const ellipsisText = ref<HTMLElement | null>(null);
const isEllipsisActive = ref(false);

const checkEllipsis = () => {
  if (ellipsisText.value) {
    isEllipsisActive.value = ellipsisText.value.offsetWidth < ellipsisText.value.scrollWidth;
  }
};

onMounted(() => {
  nextTick(checkEllipsis);
});

watch(
  () => props.text,
  () => {
    nextTick(checkEllipsis);
  }
);
</script>

<style scoped lang="scss">
.ellipsis-text {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
