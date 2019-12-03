<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{dropLabel}}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="login">登录</el-dropdown-item>
      <el-dropdown-item command="logout">登出</el-dropdown-item>
      <el-dropdown-item command="register" divided>注册</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <el-dialog
    :title="dialogLabel"
    :visible.sync="visible"
    width="50%">
    <template v-if="command == 'login'">
      <Login @onOk="handleOk" @onCancel="handleCancel"></Login>
    </template>
    <template v-else-if="command == 'register'">
      <Register @onOk="handleOk" @onCancel="handleCancel"></Register>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import Login from "./Login.vue";
import Register from "./Register.vue";

@Component({
  components: {
    Login,
    Register
  }
})
export default class LoginBox extends Vue{

  private visible:boolean = false;
  private command:string = "login";

  // computed
  get dropLabel(): string {
    return this.command == "logout" ? "登录" : "登出";
  }
  get dialogLabel(): string {
    return this.command == "register" ? "注册" : "登录";
  }
  
  private handleCommand(command: string) {
    this.visible = command == "login" || command == "register" ? true : false;
    this.command = command;
  }

  private handleOk() {
    this.$message({
      message: "success",
      type: "success"
    })
  }

  private handleCancel() {
    this.$message({
      message: "cancel",
      type: "info"
    })
  }
}

</script>

<style scoped></style>
