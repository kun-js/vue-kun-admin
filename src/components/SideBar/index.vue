<template>
  <div class="container">
    <div class="logo">
      <img class="logo-pic" src="@/assets/imgs/KunLogo.jpg" />
      <div class="logo-title">Kun Admin</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: #001529;
  .logo {
    display: flex;
    padding: 8px;
    align-items: center;
    &-pic {
      width: 32px;
      height: 32px;
    }
    &-title {
      margin-left: 8px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 800;
    }
  }
}
</style>
