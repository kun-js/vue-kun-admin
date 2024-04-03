<template>
  <el-card style="max-width: 100%; height: 100%">
    <template #header> 表单示例 </template>
    <el-form :model="form" label-width="auto" style="width: 100%">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="姓名"> <el-input v-model="form.name" placeholder="请输入你的姓名" /> </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话"> <el-input v-model="form.tel" placeholder="请输入你的联系方式" /> </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="邮箱">
            <el-input v-model="form.email" placeholder="请输入你的邮箱">
              <template #append>
                <el-select v-model="emailSelect" style="width: 115px">
                  <el-option label="@qq.com" value="1" />
                  <el-option label="@163.com" value="2" />
                  <el-option label="@gmail.com" value="3" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="岗位">
            <el-select v-model="form.job" placeholder="请选择您的岗位">
              <el-option label="前端开发工程师" value="qianduan" />
              <el-option label="后端开发工程师" value="houduan" />
              <el-option label="移动应用开发工程师" value="yidong" />
              <el-option label="测试工程师" value="ceshi" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="地区">
            <el-select v-model="form.region" placeholder="请选择你所在的地区">
              <el-option label="广东" value="guangdong" />
              <el-option label="上海" value="shanghai" />
              <el-option label="北京" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="起止日期">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker v-model="form.date2" type="date" placeholder="结束时间" style="width: 100%" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="语言">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Java" name="type"> Java </el-checkbox>
          <el-checkbox value="JavaScript" name="type"> JavaScript </el-checkbox>
          <el-checkbox value="Python" name="type"> Python </el-checkbox>
          <el-checkbox value="C" name="type"> C </el-checkbox>
          <el-checkbox value="C++" name="type"> C++ </el-checkbox>
          <el-checkbox value="Php" name="type"> Php </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  tel: "",
  email: "",
  job: "",
  region: "",
  date1: "",
  date2: "",
  type: [],
  desc: "",
});

const emailSelect = ref("@qq.com");

const onSubmit = () => {
  console.log(form);
};
</script>

<style lang="scss" scoped></style>
