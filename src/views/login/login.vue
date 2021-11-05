<template>
  <div>
    <el-form ref="ruleForm" label-width="100px" :rules="rules" :model="form">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" name="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          立即创建
        </el-button>
        <el-button @click="resetForm('ruleForm')"> 重置 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/utils/setToken";
import API from "@/api/api";
export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setToken("aaaaaa");
          this.$router.push('/loan-input')
        }
      });
    },
    resetForm(formName) {
      this.$router.push('/')


      this.$refs[formName].resetFields();
    },
  },
};
</script>

