<template>
  <el-card style="max-width: 100%; height: 100%" :body-style="{ height: '95%' }">
    <template #header>音频可视化示例</template>
    <div ref="audioRef"></div>
  </el-card>
</template>

<script setup lang="ts">
import WaveSurfer from "wavesurfer.js";
import { ref, onMounted } from "vue";

const audioRef = ref();

const initAudio = () => {
  const wavesurfer = WaveSurfer.create({
    container: audioRef.value,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    url: "@/assets/audios/zhiyinnitaimei.mp3",
  });

  wavesurfer.on("click", () => {
    wavesurfer.play();
  });
};

onMounted(() => {
  initAudio();
});
</script>

<style scoped lang="scss"></style>
