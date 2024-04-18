<template>
  <span class="button" :class="{ night: activeState }" @click="toggleState">
    <span class="btn-inner">
      <span class="circle">
        <span class="circle-night">
          <span class="crater"></span>
          <span class="crater crater2"></span>
          <span class="crater crater3"></span>
        </span>
      </span>
      <span class="halo-box">
        <span class="halo"></span>
        <span class="halo halo2"></span>
        <span class="halo halo3"></span>
      </span>
      <span class="clouds">
        <span class="cloud" v-for="(item, index) in 7" :key="index" :class="'cloud' + (index + 1)"></span>
      </span>
      <span class="clouds clouds2">
        <span class="cloud" v-for="(item, index) in 7" :key="index" :class="'cloud' + (index + 1)"></span>
      </span>
      <span class="stars">
        <span class="star" v-for="(item, index) in 8" :key="index" :class="'star' + index">
          <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200" style="width: 100%; height: 100%">
            <path d="M1004.1 512L692 332 512 19.9 332 332 19.9 512 332 692l180 312.1L692 692z" fill="#fff" />
          </svg>
        </span>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDark = ref(false);
const toggleDark = (v: boolean) => {
  document.documentElement.classList.toggle("dark", v);
  isDark.value = v;
};

const activeState = ref(false);

const toggleState = () => {
  const newState = !activeState.value;
  toggleDark(newState);
  activeState.value = newState;
};
</script>

<style lang="less" scoped>
@btnW: 150px;
@btnH: 66px;
@paddingL: 6px;
@time: 0.6s;

.button {
  display: inline-block;
  line-height: 0;
  cursor: pointer;
}
.btn-inner {
  transition: all @time ease-in-out;
  line-height: 0;
  display: inline-block;
  position: relative;
  height: @btnH;
  width: @btnW;
  border-radius: 100px;
  background: #1c80da;
  box-shadow:
    inset 0 2px 6px #000,
    0 0 3px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.circle {
  transition: all @time ease-in-out;
  position: absolute;
  z-index: 2;
  overflow: hidden;
  width: @btnH - @paddingL - @paddingL;
  height: @btnH - @paddingL - @paddingL;
  top: @paddingL;
  left: @paddingL;
  background: #ffdd08;
  border-radius: 100px;
  box-shadow:
    0px 0px 5px rgba(0, 0, 0, 0.6),
    inset -0.5px -1px 3px rgba(0, 0, 0, 0.6),
    inset 1px 1px 3px rgba(255, 255, 255, 0.8);
  .circle-night {
    transition: all @time ease-in-out;
    position: absolute;
    top: 0;
    left: 101%;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background: #c7d0da;
    box-shadow:
      0px 0px 5px rgba(0, 0, 0, 0.6),
      inset -0.5px -1px 2px rgba(0, 0, 0, 0.6),
      inset 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
  .crater {
    position: absolute;
    width: 25%;
    height: 25%;
    top: 12%;
    left: 44%;
    border-radius: 100px;
    background: #909baf;
    &.crater2 {
      width: 34%;
      height: 34%;
      top: 42%;
      left: 16%;
    }
    &.crater3 {
      width: 19%;
      height: 19%;
      top: 62%;
      left: 63%;
    }
  }
}
.halo-box {
  transition: all @time ease-in-out;
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;

  left: calc(@btnH / 2);
  top: calc(@btnH / 2);
  .halo {
    transition: all @time ease-in-out;
    width: @btnH * 1.4;
    height: @btnH * 1.4;
    position: absolute;
    background: #fff;
    opacity: 0.1;
    border-radius: 1000px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &.halo2 {
      width: @btnH * 1.4 + 25;
      height: @btnH * 1.4 + 25;
    }
    &.halo3 {
      width: @btnH * 1.4 + 50;
      height: @btnH * 1.4 + 50;
    }
  }
}
.clouds {
  transition: all @time ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition-delay: 0s;
  &.clouds2 {
    transition-delay: @time * 0.2;
    top: 19%;
    left: -5%;
    opacity: 1;
    transform: rotate(5deg);
    .cloud {
      top: 2%;
      left: 92%;
      &.cloud2 {
        top: 39%;
        left: 69%;
      }
    }
  }
  .cloud {
    position: absolute;
    background: #fff;
    border-radius: 100px;
    width: @btnH * 0.9;
    height: @btnH * 0.9;
    top: -17%;
    left: 84%;
    &.cloud2 {
      width: @btnH * 0.68;
      height: @btnH * 0.68;
      top: 39%;
      left: 69%;
    }
    &.cloud3 {
      width: @btnH * 0.73;
      height: @btnH * 0.73;
      top: 47%;
      left: 54%;
    }
    &.cloud4 {
      width: @btnH * 0.2;
      height: @btnH * 0.2;
      top: 64%;
      left: 49.7%;
    }
    &.cloud5 {
      width: @btnH * 0.57;
      height: @btnH * 0.57;
      top: 64%;
      left: 32%;
    }
    &.cloud6 {
      width: @btnH * 0.73;
      height: @btnH * 0.73;
      top: 81%;
      left: 13%;
    }
    &.cloud7 {
      width: @btnH * 0.45;
      height: @btnH * 0.45;
      top: 85%;
      left: 7%;
    }
  }
}
.stars {
  transition: all @time ease-in-out;
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  .star {
    transition: all @time ease-in-out;
    transform: translateY(-20px) scale(0);
    display: inline-block;
    position: absolute;
    left: 20%;
    top: 20%;
    width: 8%;

    &.star2 {
      left: 10%;
      top: 30%;
      width: 4%;
      transition-delay: 0.1s;
    }
    &.star3 {
      left: 20%;
      top: 48%;
      width: 3%;
      transition-delay: 0.15s;
    }
    &.star4 {
      left: 14%;
      top: 64%;
      width: 4%;
      transition-delay: 0.24s;
    }
    &.star5 {
      left: 36%;
      top: 71%;
      width: 4%;
      transition-delay: 0.2s;
    }
    &.star6 {
      left: 23%;
      top: 79%;
      width: 5%;
      transition-delay: 0.26s;
    }
    &.star7 {
      left: 44%;
      top: 26%;
      width: 4%;
      transition-delay: 0.04s;
    }
    &.star8 {
      left: 37%;
      top: 50%;
      width: 4%;
      transition-delay: 0.14s;
    }
    &.star9 {
      left: 44%;
      top: 68%;
      width: 6%;
      transition-delay: 0.12s;
    }
    &.star10 {
      left: 52%;
      top: 37%;
      width: 8%;
      transition-delay: 0.05s;
    }
  }
}
.night {
  .btn-inner {
    background: #252525;
  }
  .circle {
    left: @btnW - @btnH + @paddingL;
    .circle-night {
      left: 0;
    }
  }
  .halo-box {
    left: calc(@btnW - @btnH / 2);
    .halo {
      opacity: 0.13;
    }
  }
  .clouds {
    top: 100%;
    transition-delay: @time * 0.2;
    &.clouds2 {
      transition-delay: 0s;
    }
  }
  .stars {
    top: 0;
    .star {
      transform: translateY(0) scale(1);
    }
  }
}
.button {
  &:hover {
    .circle {
      transform: translateX(5px);
    }
    .halo-box {
      transform: translateX(5px);
    }
    &.night {
      .circle {
        transform: translateX(-5px);
      }
      .halo-box {
        transform: translateX(-5px);
      }
    }
  }
}
</style>
