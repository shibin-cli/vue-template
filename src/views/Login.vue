<script setup>
import { reactive, ref } from 'vue'
import { User, Key } from '@element-plus/icons-vue'

const formRef = ref()
const loading = ref(false)

const data = reactive({
  empeno: '004120',
  password: '1'
})

function summit () {
  formRef.value.validate(async (valid) => {
    if (valid) {
      //
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const rules = {
  empeno: [
    { required: true, message: '请输入工号' }
  ],
  password: [
    { required: true, message: '请输入密码' }
  ]
}
</script>
<template>
  <div class="flex items-center justify-center bg-gray-700 h-screen">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="data"
      @submit.prevent="summit"
      class="min-w-[300px]"
    >
      <h1 class="text-center text-white mb-8 leading-8">
        Apifox
      </h1>
      <el-form-item prop="empeno">
        <el-input
          v-model="data.empeno"
          placeholder="工号"
        >
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="data.password"
          placeholder="密码"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon><Key /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
          class="w-full mt-5"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
