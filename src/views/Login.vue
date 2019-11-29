<template>
  <div class="all">
    <header>
      <span @click="handleClick">&lt;</span>
      {{isLogin ? '登录' : '注册'}}
    </header>
    <main>
      <div class="img"></div>
      <!-- <form action="http://10.2.151.240:8080/register" method="post"> -->
      <input placeholder="请输入邮箱号" type="email" ref="email" />
      <input placeholder="请输入密码" type="password" v-if="isLogin" ref="loginPassword" />
      <input placeholder="请输入昵称" type="text" v-if="isRegister" ref="nickName" />
      <input
        placeholder="设置6-16位密码 (区分大小写)"
        type="password"
        v-if="isRegister"
        ref="registerPassword"
      />
      <input placeholder="请输入验证码" type="text" v-if="isRegister" ref="code" />
      <span class="verification" @click="handleSendOut"  v-if="isRegister" >获取验证码</span>
      <mt-button size="large" class="login" v-if="isLogin" ref="login" @click="handleLogin">登录</mt-button>
      <mt-button
        size="large"
        class="login"
        v-if="isRegister"
        ref="register"
        @click="handleRegister"
      >快速注册</mt-button>
      <i @click="handleChange" v-if="isLogin">手机号快速注册></i>
      <input type="checkbox" class="checkbox" v-if="isRegister" />
      <i v-if="isRegister" class="read">
        我已经阅读并同意
        <span>《用户协议》</span>和
        <span>《隐私政策》</span>
      </i>
      <p v-if="isLogin">
        登录即代表您已经同意
        <span>《用户协议》</span>和
        <span>《隐私政策》</span>
      </p>
    </main>
    <a href="/login" v-if="isRegister">
      <span>已有账户?</span> &nbsp;
      <span>去登陆 ></span>
    </a>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      isLogin: true,
      isRegister: false
    }
  },

  methods: {
    handleClick () {
      this.$router.history.go(-1)
    },

    handleChange () {
      this.$data.isLogin = !this.$data.isLogin
      this.$data.isRegister = !this.$data.isRegister
    },

    handleSendOut () {
      if (this.$refs.email.value === null) {
        console.log('aaaa')
      }
      // let data = [this.$refs.email.value]
      // console.log(data)
      Axios({
        url: `http://10.2.151.4:8080/getCode?email=${this.$refs.email.value}`
      }).then(res => {
        console.log(res.data)
      })
    },
    handleLogin () {
      Axios({
        url: `http://10.2.151.4:8080/login?email=${this.$refs.email.value}&password=${this.$refs.loginPassword.value}`
      }).then(res => {
        console.log(res.data)
        this.$router.push('/home')
        localStorage.setItem('user', res.data.email)
      })
    },
    handleRegister () {
      console.log(this.$refs.code.value)
      Axios.get(
        // `http://10.2.151.4:8080/register?email=${this.$refs.email.value}&nickName=${this.$refs.nickName.value}&password=${this.$refs.registerPassword.value}&code=${this.$refs.code.value}`
        `http://10.2.151.4:8080/register?email=${this.$refs.email.value}&nickName=${this.$refs.nickName.value}&password=${this.$refs.registerPassword.value}&code=${this.$refs.code.value}`
      ).then(res => {
        console.log(res.data)
      })
    }
  },

  beforeCreate () {
    this.$store.state.isTabbarShow = false
  }
}
</script>

<style lang="scss" scoped>
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 2.048rem;
  font-size: 18px;
  background: #202020;
  position: fixed;
  top: 0;
  z-index: 100;
  color: #fff;
  position: relative;
  span {
    position: absolute;
    left: 15px;
  }
}
main {
  padding: 48px 28px 0;
  background: #fff;
  position: relative;
  flex: 1;

  div.img {
    width: 116px;
    height: 26px;
    background: url("../assets/imgs/logo@2x.png") no-repeat;
    background-size: 116px;
    margin: 0 auto 1rem;
  }

  input {
    width: 95%;
    height: 36px;
    border: 0;
    border-bottom: 1px solid #ccc;
    display: block;
    padding: 5px 8px;
    margin-bottom: 10px;
    outline: none;
    &::placeholder {
      color: #ccc;
    }
  }
  span.verification {
    position: absolute;
    top: 108px;
    right: 28px;
    width: 75px;
    height: 28px;
    font-size: 12px;
    border: 1px solid #bfbfbf;
    color: #bfbfbf;
    border-radius: 4px;
    text-align: center;
    line-height: 28px;
  }
  .login {
    background: #ea413c;
    height: 47px;
    color: rgba($color: #ffffff, $alpha: 0.5);
    margin-top: 45px;
    margin-bottom: 14px;
  }
  .plain {
    height: 47px;
    border: 1px solid #ea413c;
    color: #ea413c;
    margin-bottom: 16px;
  }
  i {
    display: block;
    width: 100%;
    height: 24px;
    font-size: 14px;
    color: #8c8c8c;
    font-style: normal;
    text-align: center;
    &.read {
      text-align: left;
      font-size: 12px;
      margin-left: 15px;
      span {
        color: #595959;
      }
    }
  }
  p {
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #bfbfbf;
    margin-top: 120px;
    span {
      color: #595959;
    }
  }
  .checkbox {
    position: absolute;
    width: 12px;
    height: 12px;
    line-height: 12px;
  }
}
a {
  position: fixed;
  width: 10.8rem;
  bottom: 0.8rem;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #8c8c8c;
}
</style>
