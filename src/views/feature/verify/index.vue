<template>
  <div class="verify-feature-container">
    <el-card style="max-width: 100%; height: var(--card-height)">
      <template #header>
        <span style="margin-right: 18px">验证码示例</span>
        <el-button type="primary" @click="handleToOpenImgVerify">打开图形验证码</el-button>
      </template>
      <div class="login-page">
        <el-form label-width="65px">
          <el-form-item label="验证码">
            <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable />
          </el-form-item>
          <!-- 使用验证码组件 -->
          <div class="code" @click="refreshCode">
            <SIdentify :identifyCode="identifyCode" />
          </div>
          <el-button class="login_btn" type="primary" size="default" @click="handleToValidate">验证</el-button>
        </el-form>
      </div>
      <div>
        <!-- 备注：imgs是自定义的背景图，没有使用默认图片 -->
        <Vcode :show="isShow" @success="success" @close="close" @fail="fail" :imgs="[Img]" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import SIdentify from "./components/Sidentify.vue";
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import Vcode from "vue3-puzzle-vcode";
import Img from "@/assets/imgs/Caixukun.png";

defineOptions({
  name: "Verify",
});

let sidentifyMode = ref(""); //输入框验证码
let identifyCode = ref(""); //图形验证码
let identifyCodes = ref("1234567890abcdefjhijklinopqrsduvwxyz"); //验证码出现的数字和字母

// 生成随机数
const randomNum = (min: number, max: number) => {
  max = max + 1;
  return Math.floor(Math.random() * (max - min) + min);
};
// 随机生成验证码字符串
const makeCode = (o: string | any[], l: number) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[randomNum(0, o.length)];
  }
};
// 更新验证码
const refreshCode = () => {
  identifyCode.value = "";
  makeCode(identifyCodes.value, 4);
};
//登录
const handleToValidate = () => {
  //验证验证码不为空
  if (!sidentifyMode.value) {
    ElMessage({ type: "error", message: "验证码不能为空!" });
    return;
  }
  //验证验证码是否正确
  if (sidentifyMode.value != identifyCode.value) {
    ElMessage({ type: "error", message: "验证码错误!" });
    refreshCode();
    return;
  } else {
    ElMessage({ type: "success", message: "验证码正确!" });
  }
};

const isShow = ref(false);
//登录按钮
const handleToOpenImgVerify = () => {
  //展现验证码模态框
  isShow.value = true;
};
//用户通过了验证
const success = (msg: string) => {
  isShow.value = false;
  console.log("验证通过" + msg);
};
//用户点击遮罩层，关闭模态框
const close = () => {
  isShow.value = false;
};
//用户验证失败
const fail = () => {
  console.log("验证失败");
};

onMounted(() => {
  identifyCode.value = "";
  makeCode(identifyCodes.value, 4);
});
</script>

<style lang="scss" scoped>
.verify-feature-container {
  height: 100%;
  padding: 20px;

  .login-page {
    width: 400px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 8px;

    .code {
      margin-bottom: 10px;
      text-align: center;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
