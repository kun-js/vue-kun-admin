<template>
  <div class="video-feature-container">
    <el-card style="max-width: 100%" :body-style="{ padding: 0 }">
      <template #header>视频播放器示例</template>
      <video-player :src="videoSrc" :options="playerOptions" :volume="0.6" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import { ref } from "vue";

// 视频链接地址
const videoSrc = ref("https://videos.pexels.com/video-files/15921892/15921892-uhd_3840_2160_50fps.mp4");
// 视频播放器配置
const playerOptions = ref({
  // height: 200,
  // width: document.documentElement.clientWidth, //播放器宽度
  playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
  autoplay: "any", // 如果true,浏览器准备好时开始回放。
  muted: true, // 默认情况下将会消除任何音频。
  loop: true, // 导致视频一结束就重新开始。
  preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
  language: "zh-CN",
  aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
  fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
  notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
  controls: true,
  controlBar: {
    timeDivider: true,
    durationDisplay: true,
    remainingTimeDisplay: false,
    fullscreenToggle: true, // 全屏按钮
  },
});
</script>

<style scoped lang="scss">
.video-feature-container {
  height: 100%;
  padding: 20px;
}
</style>
