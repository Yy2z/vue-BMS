<!-- 添加用户 -->
<template>
  <!-- 表单 -->
  <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="30%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" label-width="70px" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        v-if="dialogTitle === '添加用户'"
      >
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
    </el-form>
    <!-- 按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style></style>

<script setup>
// import { stringLiteral } from '@babel/types'
import { defineEmits, ref, defineProps, watch } from 'vue'
import { addUser, editUser } from '@/api/users'
import i18n from '@/i18n'
import { ElMessage } from 'element-plus'
// import { watch } from 'fs'

const props = defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true
  },
  dialogTableValue: {
    type: Object,
    default: () => {}
  }
})
const formRef = ref(null)

// 数据源
const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})

// 表单校验规则
const rules = ref({
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  email: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '输入正确邮箱',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'blur'
    }
    // {
    //     pattern:''
    // }
  ]
})

watch(
  () => props.dialogTableValue,
  () => {
    console.log(props.dialogTableValue)
    form.value = props.dialogTableValue
  },
  { deep: true, immediate: true }
)
const emits = defineEmits(['update:modelValue', 'initUserList'])

// 取消关闭按钮
const handleClose = () => {
  emits('update:modelValue', false)
}

// 确认关闭按钮
const handleConfirm = () => {
  // 统一验证
  formRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === '添加用户'
        ? await addUser(form.value)
        : await editUser(form.value)
      ElMessage({
        message: i18n.global.t('message.updeteSuccess'),
        type: 'success'
      })
      emits('initUserList')
      handleClose()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>
