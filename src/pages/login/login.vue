<template>
  <div class="login-wrap flex">
    
    <div class="login-title">私募后台管理系统</div>

    <section v-if="showLogin">
      <el-form :model="form" status-icon :rules="rules" ref="form"  >
        <el-form-item label="" prop="account">
          <el-input v-model="form.account" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit()" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </section>

    
    <!-- 这里是登录页 -->
  </div>
</template>

<script>

import {Notification} from "element-ui";
import {GetUserInfo} from '@/api/service'

export default {
  data() {
    return {
      form: {
        account: "guo@zheng.com",
        password: "111111"
      },
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // { min: 6, max: 12, message: '用户名为6-12个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          // { min: 8, max: 20, message: '密码需设置为8-20位', trigger: 'change'}
        ]
      },
      showLogin: false
    }
  },

  mounted() {
    this.showLogin = true;
  },

  methods: {
    async onSubmit() {
      this.$refs['form'].validate(async (valid) => { // valid 是一个布尔值
        if (valid) {
          // this.$router.push('/manager')
          const res = await GetUserInfo(this.form)
          console.log(res);
        } else {
          console.log(valid);
          Notification({
            title: '警告',
            message: '请输入正确的用户名和密码'
          })
        }
      })
    }
  }

  
}
</script>

<style lang="less">

@import '../../style/public.less';

.login-wrap {
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: rgba(123, 213, 203, 1);

  section {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
  }

  .login-title {
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 600;
    color: #333333;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
