<template>
  <Form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login-form">
    <FormItem label="用户名" prop="name">
      <Input v-model="ruleForm.name" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="ruleForm.name" placeholder="请输入密码" show-password></Input>
    </FormItem>
    <FormItem label="邮箱" prop="email">
      <Input v-model="ruleForm.name" placeholder="请输入邮箱"></Input>
    </FormItem>
    <FormItem label="手机" prop="phone">
      <Input v-model="ruleForm.name" placeholder="请输入手机"></Input>
    </FormItem>
    <FormItem label="简介" prop="brief">
      <Input type="textarea" :rows="2" v-model="ruleForm.name" placeholder="请输入简介"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submitForm('ruleForm')">确认</Button>
      <Button @click="handleCancel('ruleForm')">取消</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit} from 'vue-property-decorator';

var validatePhone = (rule: string, value: string, callback: (str?: string) => void) => {
  if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
    callback('手机号格式错误');
  } else {
    callback();
  }
};

@Component({})
export default class Register extends Vue{
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
    email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
    phone: [
            { required: true, message: '请输入手机', trigger: 'blur' },
            { validator: validatePhone, trigger: ['blur', 'change']}
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