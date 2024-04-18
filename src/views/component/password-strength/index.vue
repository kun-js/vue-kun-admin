<template>
  <div class="password-strength-component-container">
    <el-card
      style="max-width: 100%; height: calc(100vh - 88px)"
      :body-style="{ display: 'flex', justifyContent: 'center' }"
    >
      <template #header> 密码强度判断示例 </template>
      <div class="password-container">
        <el-form :model="registerData" label-width="100px" :rules="rules" ref="ruleFormRef">
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerData.password" placeholder="请输入密码" type="password" show-password />
          </el-form-item>
          <el-form-item
            v-if="registerData.password !== '' && registerData.password !== undefined"
            align="center"
            style="height: 25px"
          >
            <!-- 展示长度条 -->
            <div
              class="bar"
              v-if="registerData.password !== '' && registerData.password !== undefined"
              :style="{ background: barColor, width: width + '%' }"
            >
              <!-- 展示文字 -->
              <div
                class="strength"
                :style="{ color: barColor }"
                v-if="registerData.password !== '' && registerData.password !== undefined"
              >
                {{ strength }}
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue";
import { type FormInstance } from "element-plus";
// 引入验证方法
import { checkPasswordRule, level } from "./checkPassword";

// 强度条颜色
const barColor = ref("");
// 强度条长度
const width = ref("");
// 强度条说明
const strength = ref("");

const ruleFormRef = ref<FormInstance>();
// 注册数据
const registerData = reactive({
  username: "",
  password: "",
});

// 密码校验规则
const validatePassword = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    let name: string = "";
    if (registerData.username === "") {
      name = "空";
    } else {
      name = registerData.username;
    }
    const result: string = checkPasswordRule(value, name);
    if (result === "校验通过") {
      callback();
    } else {
      callback(new Error(result));
    }
  }
};

// 注册表单校验规则
const rules = reactive({
  password: [{ validator: validatePassword, trigger: "blur" }],
});

// 监听注册页面的新密码变化状态，来改变密码强弱显示
watch(
  () => registerData.password,
  (newVal) => {
    if (newVal != "") {
      const res: string = level(newVal);
      if (res == "非常弱") {
        barColor.value = "red";
        width.value = "20";
        strength.value = "非常弱";
      } else if (res == "弱") {
        barColor.value = "#ee795c";
        width.value = "40";
        strength.value = "弱";
      } else if (res == "一般") {
        barColor.value = "orange";
        width.value = "60";
        strength.value = "一般";
      } else if (res == "强") {
        barColor.value = "green";
        width.value = "80";
        strength.value = "强";
      } else if (res == "非常强") {
        barColor.value = "#1B8EF8";
        width.value = "100";
        strength.value = "非常强";
      }
    }
  }
);
</script>

<style scoped lang="scss">
.password-strength-component-container {
  height: 100%;
  padding: 20px;
}

.strength {
  position: relative;
  top: 5px;
  left: 0;
  font-size: 13px;
  color: #271e25;
  transition: 0.5s all ease;
}

.bar {
  position: absolute;
  height: 5px;
  margin: 2px 0 5px 5px;
  background: red;
  transition: 0.5s all ease;
}

.password-container {
  width: 50%;
}
</style>
