<template>
  <Form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login-form">
    <FormItem label="用户名" prop="name">
      <Input v-model="ruleForm.name" placeholder="请输入用户名"></Input>
    </FormItem>
     <FormItem label="密码" prop="password">
      <Input v-model="ruleForm.name" placeholder="请输入密码" show-password></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submitForm('ruleForm')">确认</Button>
      <Button @click="handleCancel('ruleForm')">取消</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit} from 'vue-property-decorator';

@Component({})
export default class Login extends Vue{
  private FormData: any;
  private ruleForm = {
    name: "",
    password: ""
  };
  private rules = {
    name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
    password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
  }

  @Emit("onOk")
  private submitForm(formName: string): object {
    this.FormData = this.$refs[formName];

    return new Promise((resolve, reject) => {
      this.FormData.validate((valid:boolean) => {
        if (valid) {
          this.cancelForm(formName);
          resolve('submit!');
        } else {
          reject('error submit!!');
        }
      });
    });
  }

  private cancelForm(formName: string): void {
    this.FormData = this.$refs[formName];
    this.FormData.resetFields();
  }

  @Emit("onCancel")
  private handleCancel(formName: string): void {
    this.cancelForm(formName);
  }
}
</script>

<style scoped>

</style>