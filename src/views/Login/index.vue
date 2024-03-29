<template>
  <div class="container">
    <div class="switch-lang">
      <el-dropdown trigger="click">
        <div class="language">
          <img class="language-icon" src="@/assets/imgs/SwitchLang.png" alt="切换语言" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleToChangeLangZhCn">简体中文</el-dropdown-item>
            <el-dropdown-item @click="handleToChangeLangEnUs">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="basketball"><Basketball /></div>
    <div class="form-container">
      <div class="form-container-header"></div>
      <div class="introduce">{{ $t("login.title") }}</div>
      <div class="form-container-body">
        <div class="login-form">
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" style="width: 308px">
            <el-form-item label="" prop="username">
              <el-input :prefix-icon="User" v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="" prop="password">
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
            <span>{{ $t("login.other_login_way") }}</span>
          </el-divider>
          <div class="login-form-login-way">
            <div class="login-form-login-way-icon">
              <img v-for="(icon, index) in icons" :key="index" class="img" :src="icon.src" :alt="icon.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Basketball from "./components/basketball.vue";
import { User, Lock } from "@element-plus/icons-vue";
import { type FormInstance, type FormRules } from "element-plus";
import { getLoginInfo } from "@/api/index";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useLocaleStore } from "@/stores/locale";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localeStore = useLocaleStore();
const store = useUserStore();
const router = useRouter();
const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
});
const loginFormRules = reactive<FormRules<typeof loginForm>>({
  username: [{ required: true, message: t("login.username_tip"), trigger: "blur" }],
  password: [{ required: true, message: t("login.password_tip"), trigger: "blur" }],
});

const icons = [
  { src: "./src/assets/imgs/QQ.png", alt: "QQ" },
  { src: "./src/assets/imgs/wechat.png", alt: "WeChat" },
  { src: "./src/assets/imgs/weibo.png", alt: "Weibo" },
  { src: "./src/assets/imgs/alipay.png", alt: "Alipay" },
  { src: "./src/assets/imgs/github.png", alt: "GitHub" },
  { src: "./src/assets/imgs/twitter.png", alt: "Twitter" },
];

const submitForm = async () => {
  try {
    const valid = await loginFormRef.value?.validate();
    if (valid) {
      const result = await getLoginInfo(loginForm.username, loginForm.password);
      // console.log("result: ", result);
      if (result) {
        store.getUserInfo(result.userInfo);
        store.getToken(result.token);
        router.push("/");
        ElMessage({ message: t("login.login_success"), type: "success" });
      } else {
        ElMessage({ message: t("login.login_fail"), type: "error" });
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

const handleToChangeLangZhCn = () => {
  localeStore.getLocale("zh-CN");
};

const handleToChangeLangEnUs = () => {
  localeStore.getLocale("en-US");
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/imgs/kunkunbg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .switch-lang {
    position: absolute;
    top: 2%;
    right: 1%;

    .language {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;

      &-icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  .form-container {
    position: absolute;
    top: 50%;
    left: 70%;
    padding: 28px;
    background-color: #fff;
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

            .img {
              width: 30px;
              height: 30px;
              overflow: hidden;
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
}

.basketball {
  position: absolute;
  bottom: 0;
  left: 20%;
}
</style>
