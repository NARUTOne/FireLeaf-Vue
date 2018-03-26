<template>
  <div class="login">
    <Row class-name="login-row" type="flex" justify="space-around" align="middle">
      <Col span='8'>
        <div class="login-content">
          <div class="login-top login-logo">
            {{systemName}}
          </div>
          <div class="login-form">
            <Form :model="formData" :rules="formRule" ref='form'>
              <FormItem prop="userName">
                <Input type="text" v-model="formData.userName" placeholder="UserName">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formData.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem class='t-center'>
                <Button type="primary" html-type='submit' :loading="loading"  @click="handleSubmit('form')" long>登录</Button>
              </FormItem>
            </Form>
          </div>
          <p class='login-example'>
            <span>Username：admin</span>
            <span class='right'>Password：admin123</span>
          </p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {Row, Col, Form, FormItem, Input, Icon, Button} from 'iview';
import {systemName} from 'utils/config';

export default {
  name: 'Login',
  data () {
    return {
      systemName,
      loading: false,
      formData: {
        userName: '',
        password: ''
      },
      formRule: {
        userName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不少于6位', trigger: 'blur' }
        ]
      }
    };
  },
  components: {
    Row,
    Col,
    Form, FormItem, Input, Icon, Button
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          const {userName} = this.formData;
          new Promise((resolve, reject) => {
            if(userName == 'admin' || userName == 'NARUTOne') {
              resolve(this.formData);
            }
            else {
              const err = '用户名或密码错误！';
              reject(err);
            }
          }).then((data) => {
            this.loading = true;
            this.toLogin(data).then(() => {
              this.loading = false;
              this.$Message.success('Success!');
              this.$router.push('/home');
            }).catch(() => {
              this.loading = false;
            });
            
          }).catch((err) => {
            this.$Message.error(err || 'Fail!');
          });
          
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    ...mapActions([
      'toLogin'
    ])
  },

};
</script>

<style lang="less" scoped>
  .login {
    display: flex;
    flex-direction: column;
    -webkit-flex-grow:1;
    flex-grow:1;
    background-image: url('~static/img/login_bg.svg');
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    .login-content {
      padding: 30px;
      margin-top: 150px;
      background: #fff;
      border-radius: 6px;
      .login-logo {
        height: 50px;
        padding-left: 60px;
        font-family: cursive;
        font-size: 20px;
        font-weight: 600;
        line-height: 50px;
        background: url('~static/img/logo.png') left center no-repeat;
        background-size: 50px 50px;
      }
      .login-form {
        padding:30px;   
        padding-bottom: 0;
      }
      .login-example {
        color: #ccc;
      }
    }
  }
</style>
