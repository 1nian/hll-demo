<template>
  <div class="hll-user-info">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="头像" v-if="false">
        <el-upload
          action=""
          class="avatar-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="账号" prop="userName">
        <el-input v-model="ruleForm.userName" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="cname">
        <el-input v-model="ruleForm.cname"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择角色">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-input v-model="ruleForm.position"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="iphone">
        <el-input v-model="ruleForm.iphone"></el-input>
      </el-form-item>

      <el-form-item style="text-align: left">
        <el-button class="hll-el-button" type="primary" @click="submitForm('ruleForm')"
          >保存修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        userName: this.$store.state.userInfo.userName,
        cname: "" || this.$store.state.userInfo.cname,
        role: "shanghai" || this.$store.state.userInfo.role,
        position: "" || this.$store.state.userInfo.position,
        iphone: "" || this.$store.state.userInfo.iphone,
      },
      rules: {
        userName: [{ required: true }],
        role: [{ required: true }],
        cname: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.$store.commit(
        "setUserInfo",
        JSON.parse(sessionStorage.getItem("userInfo"))
      );
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userInfo = {
            userName: this.ruleForm.userName,
            cname: this.ruleForm.cname,
            role: this.ruleForm.role,
            position: this.ruleForm.position,
            iphone: this.ruleForm.iphone,
            imageUrl: this.imageUrl,
          };

          // 存储用户信息
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

          this.$message({
            message: "用户信息已经保存成功",
            type: "success",
          });

          this.getUserInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
};
</script>
<style>
.hll-user-info {
  width: 500px;
}
.el-select {
  width: 100%;
}
</style>