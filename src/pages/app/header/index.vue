<template>
  <header class="header">
    <Row :gutter="16">
      <Col :xs="12" :sm="12" :md="6" :lg="6" >
        <router-link to='/' class='header-logo'>
          system name
        </router-link>
      </Col>
      <Col :xs="0" :sm="0" :md="12" :lg="12">
        <div class="t-center default-color header-title">FireLeaf-Vue-Scaffold</div>
      </Col>
      <Col :xs="12" :sm="12" :md="6" :lg="6">
        <div class="t-right header-user">
          <Avatar class="default-bg" icon="person" />&nbsp; {{user ? user.username : ''}} &nbsp;&nbsp;
          <Icon type='log-out' v-if="isLogin" class='header-log-icon' title='登出' @click.native="handleLoginOut()"/>
          <Icon type='log-in' v-else class='header-log-icon' title='登录' @click.native="handleLogin()"/>
        </div>        
      </Col>
    </Row>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import {Row, Col, Avatar, Icon } from 'iview';

  export default {
    name: 'Header',
    data() {
      return {
       
      };
    },
    components: {
      Row,
      Col,
      Avatar,
      Icon
    },
    computed: {
      ...mapGetters({
        user: 'getUser',
      }),
      isLogin () {
        return this.user && this.user.userName;
      }
    },
    methods: {
      handleLogin() {
        this.handleLoginOut();
      },
      handleLoginOut() {
        this.toLogout().then(() => {
          this.$Message.success('success!');
          this.$router.push('/login');
        }).catch(() => {
          this.$Message.error('error!');
        });
        
      },
      ...mapActions([
        'toLogout'
      ])
    }
  };
</script>

<style lang='less' scoped>
  @import '~utils/style/variables.less';

  .header {
    height: 60px;
    padding: 8px 16px;
    line-height: 42px;
    box-shadow: 0 2px 8px @shadow-color;
    transition: all 0.3s;
    .header-logo {
      display: block;
      font-size: 22px;
      padding-left: 66px;
      height: 42px;
      line-height: 42px;
      font-family: cursive;
      font-weight: 600;
      background: url('~static/img/logo.png') left center no-repeat;
      background-size: 42px 42px;
    }
    .header-title {
      font-size: 18px;
      font-weight: 600;
    }
    .header-user {
      font-size: 16px;
      .header-log-icon {
        cursor: pointer;
      }
    }
    
  }
</style>


