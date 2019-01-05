<template>
  <div class="wrapper">
    <Header v-show="isHeader"/>
    <Body><router-view></router-view></Body>
    <Footer />
  </div>     
</template>
<script>
  import Header from './header/';
  import Body from './body/';
  import Footer from './footer/';
  import auth from 'utils/auth';
  
  export default {
    name: 'App',
    components: {
      Header,
      Body,
      Footer
    },
    data: function() {
      return {
        isHeader: true
      };
    },
    created: function() {
      this.checkRouter();
    },
    mounted: function() {
      // console.log(this.$store.state.login.state);
      if(auth.user && auth.isLoginIn()) {
        const data = auth.user;
        this.$store.commit('LOGIN_SUCCESS', data);
      }
      else {
        this.$router.push('/login');
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'checkRouter'
    },
    methods: {
      checkRouter() {
        const path = this.$route.path;
        // console.log(path);
        if (path === '/login' || path === '/*') {
          this.isHeader = false;
        }
        else {
          this.isHeader = true;
        }
      }
    }
  };
</script>

<style lang="less" >
  @import '~utils/style/common.less';
  .wrapper {
    animation: wrapper--fade .25s cubic-bezier(.455, .03, .515, .955);
    min-height: 100vh;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    flex: 1;
  }
  @keyframes wrapper--fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>