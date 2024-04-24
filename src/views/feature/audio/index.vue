<template>
  <div class="audio-feature-container">
    <el-card style="max-width: 100%; height: calc(100vh - 88px)" :body-style="{ height: '95%' }">
      <template #header>音频可视化示例</template>
      <div ref="audioContainer"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import WaveSurfer from "wavesurfer.js";
import { ref, onMounted } from "vue";
import musicUrl from "@/assets/audios/zhiyinnitaimei.mp3";

const audioContainer = ref(null);

const initAudio = () => {
  if (!audioContainer.value) return;

  const wavesurfer = WaveSurfer.create({
    container: audioContainer.value,
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
    normalize: true,
    mediaControls: true,
    url: musicUrl,
  });

  wavesurfer.on("click", () => {
    wavesurfer.play();
  });
};

onMounted(() => {
  initAudio();
});
</script>

<style scoped lang="scss">
.audio-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
