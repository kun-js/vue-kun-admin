<template>
  <div class="form-container">
    <div class="form-container-header"></div>
    <div class="introduce">{{ $t("login.title") }} <Icon icon="streamline-emojis:basketball" /></div>
    <div class="form-container-body">
      <div class="login-form">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" style="width: 308px">
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" show-password v-model="loginForm.password" />
          </el-form-item>
          <div class="login-form-tip">
            <span class="login-form-tip-register">{{ $t("login.register") }} </span>
            <span class="login-form-tip-forget">{{ $t("login.forget") }}</span>
          </div>
          <div class="login-form-main-action">
            <el-button type="primary" @click="submitForm">{{ $t("login.submit") }}</el-button>
            <el-button @click="resetForm">{{ $t("login.reset") }}</el-button>
          </div>
        </el-form>
        <el-divider>
          <span>{{ $t("login.otherLoginWay") }}</span>
        </el-divider>
        <div class="login-form-login-way">
          <div class="login-form-login-way-icon">
            <Icon class="app-icon" icon="ant-design:qq-circle-filled" />
            <Icon class="app-icon" icon="ant-design:wechat-filled" />
            <Icon class="app-icon" icon="ant-design:alipay-circle-filled" />
            <Icon class="app-icon" icon="ant-design:weibo-circle-filled" />
            <Icon class="app-icon" icon="ant-design:github-filled" />
            <Icon class="app-icon" icon="ant-design:twitter-outlined" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { getLoginInfo } from "@/api/index";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/modules/user";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

const { t } = useI18n();
const userStore = useUserStore();
const router = useRouter();
const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
});
const loginFormRules = reactive<FormRules<typeof loginForm>>({
  username: [{ required: true, message: t("login.usernameTip"), trigger: "blur" }],
  password: [{ required: true, message: t("login.passwordTip"), trigger: "blur" }],
});

const submitForm = async () => {
  try {
    const valid = await loginFormRef.value?.validate();
    if (valid) {
      const result = await getLoginInfo(loginForm.username, loginForm.password);
      // console.log("result: ", result);
      if (result) {
        userStore.getUserInfo(result.userInfo);
        userStore.getToken(result.token);
        userStore.getPermission(result.permission);
        userStore.getActionPermission(result.actionPermission);
        userStore.getMenuPermission(result.menuPermission);
        router.push("/dashboard");
        ElMessage({ message: t("login.loginSuccess"), type: "success" });
      } else {
        ElMessage({ message: t("login.loginFail"), type: "error" });
      }
    }
  } catch (error) {
    console.error("表单验证出错：", error);
  }
};

const resetForm = () => {
  loginForm.username = "";
  loginForm.password = "";
};
</script>

<style lang="scss" scoped>
.form-container {
  position: absolute;
  top: 50%;
  left: 70%;
  padding: 28px;
  background-color: var(--background);
  border-radius: 8px;
  transform: translate(-50%, -50%);

  &-header {
    &-logo {
      display: flex;
    }
  }

  .introduce {
    margin-bottom: 18px;
    font-size: 30px;
  }

  &-body {
    .login-form {
      .el-input {
        height: 42px;
      }

      &-tip {
        display: flex;
        justify-content: space-between;

        &-register {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #8c8c8c;
          cursor: pointer;

          &:hover {
            color: #79bbff;
          }
        }

        &-forget {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #409eff;
          cursor: pointer;

          &:hover {
            color: #79bbff;
          }
        }
      }

      &-main-action {
        display: flex;
        margin-top: 18px;
        margin-bottom: 38px;

        .el-button {
          width: 100%;
          height: 38px;
        }
      }

      &-login-way {
        padding: 0 20px;

        &-icon {
          display: flex;
          justify-content: space-between;

          .app-icon {
            overflow: hidden;
            font-size: 32px;
            cursor: pointer;

            &:hover {
              filter: brightness(0.8);
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
}
</style>
@/stores/modules/user @/stores/user
