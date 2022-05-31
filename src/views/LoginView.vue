<template>
  <div class="login-block">
    <div class="login">
    <el-card class="box-card">
      <div class="rich-text">
        <p>智慧矿山IOC运营中心</p>
        <p>综合信息管理系统</p>
      </div>
      <div class="text item">
        <el-form
          class="demo-loginForm"
          :rules="rules"
          :model="loginForm"
          ref="loginForm"
        >
          <el-form-item prop="userName">
            <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-user"
              v-model.trim="loginForm.userName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
              type="password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model.trim="loginForm.userPassword"
            ></el-input>
          </el-form-item>
          <el-form-item prop="userVCode">
            <div class="hll-code-input">
              <el-input
                placeholder="请输入验证码"
                prefix-icon="el-icon-lock"
                v-model.trim="loginForm.userVCode"
              ></el-input>
              <div class="identify-code" @click="refreshCode">
                <random-code :identifyCode="identifyCode"> </random-code>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="hll-el-button" @click="submitForm('loginForm')"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
  </div>
</template>

<script>
import RandomCode from "../components/RandomCode.vue";
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("账号不能为空"));
      } else if (value !== this.userInfo.userName) {
        callback(new Error("请输入正确的账号或密码"));
      } else {
        callback();
      }
    };
    const validateUserPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (value !== this.userInfo.userPassword) {
        callback(new Error("请输入正确的账号或密码"));
      } else {
        callback();
      }
    };
    const validateUserVCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else if (value !== this.identifyCode) {
        callback(new Error("验证码输入错误"));
      } else {
        callback();
      }
    };
    return {
      userInfo: {
        userName: "admin",
        userPassword: "admin123",
      },
      loginForm: {
        userName: "",
        userPassword: "",
        userVCode: "",
      },
      rules: {
        userName: [
          {
            validator: validateUserName,
            trigger: "blur",
          },
          {
            min: 1,
            max: 20,
            message: "请输入1-20位字符，支持字母/数字",
            trigger: "blur",
          },
          {
            pattern: /^(\w){5,20}$/,
            message: "只能输入6-20个字母、数字、下划线",
          },
        ],
        userPassword: [
          { validator:validateUserPassword, trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "请输入6-20位数字、字母或符号，区分大小写",
            trigger: "blur",
          },
          {
            pattern: /^(\w){6,20}$/,
            message: "只能输入6-20个字母、数字、下划线",
          },
        ],
        userVCode: [{ validator: validateUserVCode, trigger: "blur" }],
      },
      identifyCode: "",
      identifyCodes: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
      ],
    };
  },
  components: {
    RandomCode,
  },
  mounted() {
    this.refreshCode();
  },
  methods: {
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },

    // 生成随机数
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },

    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length - 1)];
      }
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
         if (valid) {
          this.$message({
            message: "登录成功，欢迎进入系统",
            type: "success",
          });
          sessionStorage.setItem('userInfo',JSON.stringify(this.loginForm));
          sessionStorage.setItem('token',JSON.stringify(Date.now()));
          this.$store.commit('setUserInfo',this.loginForm);
          this.$store.commit('setTtoken',JSON.stringify(Date.now()));
          this.$router.push({name:"home"})
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style>
.login-block{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  background-image: url('../assets/login-bg.png') ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 30px 20px 30px 0;
  box-sizing: border-box;
}
.login {
  /* width: 700px; */
  height: 635px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  box-sizing: border-box;
}
.rich-text {
  font-weight: 700;
  font-size: 36px;
  color: rgb(34, 34, 34);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 50px;
  text-decoration: none;
  text-align: left;
}
.rich-text p {
  margin-bottom: 5px;
}
.el-input__inner {
  border: 1px solid #e9ecf7;
  color: #999999;
}
.el-form-item.is-error .el-input__inner {
  border-color: #ff5e4e;
}
.el-form-item__error {
  color: #ff5e4e;
}
.el-input__inner:focus {
  border-color: #5473e8;
}
.hll-code-input {
  display: flex;
  align-items: center;
}
.identify-code {
  margin-left: 25px;
  line-height: 100%;
}
.hll-el-button{
  background:#5473E8;
  color: #ffffff;
}
</style>
