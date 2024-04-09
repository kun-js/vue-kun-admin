<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header> 分步表单示例 </template>
    <div class="step-form-container">
      <el-steps style="width: 600px" :active="active">
        <el-step title="第1步" />
        <el-step title="第2步" />
        <el-step title="第3步" />
      </el-steps>
      <el-form label-width="auto" :model="form" style="width: 480px; margin-top: 28px">
        <div class="stepOne" v-show="active === 1">
          <el-form-item label="姓名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="form.age" :min="1" :max="100" />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
              <el-radio value="male" size="large">男</el-radio>
              <el-radio value="female" size="large">女</el-radio>
              <el-radio value="unknown" size="large">不知道/不确定</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.tel" />
          </el-form-item>
        </div>
        <div class="stepTwo" v-show="active === 2">
          <el-form-item label="选择">
            <el-select v-model="form.region" placeholder="请选择地区">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="日期">
            <el-col :span="11">
              <el-form-item>
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  label="请选择日期"
                  placeholder="请选择日期"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col class="text-center" :span="2">
              <span>-</span>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-time-picker v-model="form.time" label="请选择时间" placeholder="请选择时间" style="width: 100%" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="技能">
            <el-checkbox-group v-model="form.skill">
              <el-checkbox value="skillOne" name="type"> 英语四六级 </el-checkbox>
              <el-checkbox value="skillTwo" name="type"> 计算机证书 </el-checkbox>
              <el-checkbox value="skillThree" name="type"> 教师资格证 </el-checkbox>
              <el-checkbox value="skillFour" name="type"> 法律职业资格证 </el-checkbox>
              <el-checkbox value="skillFive" name="type"> 普通话等级证书 </el-checkbox>
              <el-checkbox value="skillSix" name="type"> 驾驶证 </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <div class="stepThree" v-show="active === 3">
          <el-form-item label="评分"
            ><el-rate v-model="form.rate" allow-half show-score text-color="#ff9900" score-template="{value} points"
          /></el-form-item>
          <el-form-item label="其他意见">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </div>
        <el-form-item style="float: right">
          <el-button v-show="active === 2 || active === 3" @click="onPrev">上一步</el-button>
          <el-button type="primary" v-show="active === 1 || active === 2" @click="onNext">下一步</el-button>
          <el-button type="primary" v-show="active === 3" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

interface Form {
  name: string;
  age: number;
  gender: string;
  tel: string;
  date: string;
  region: string;
  time: string;
  skill: string[];
  rate: string;
  desc: string;
}

const active = ref(1);
const form = reactive<Form>({
  name: "",
  age: 20,
  gender: "",
  tel: "",
  date: "",
  region: "",
  time: "",
  skill: [],
  rate: "",
  desc: "",
});

const options = [
  { value: "广东", label: "广东" },
  { value: "北京", label: "北京", disabled: true },
  { value: "上海", label: "上海" },
  { value: "湖南", label: "湖南" },
  { value: "江苏", label: "江苏" },
];

const onPrev = () => {
  active.value--;
};
const onNext = () => {
  active.value++;
};
const onSubmit = () => {
  console.log(form);
};
</script>

<style lang="scss" scoped>
.step-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.el-form-item {
  display: flex;
  align-items: center;
}
</style>
