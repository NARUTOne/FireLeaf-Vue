<template>
  <div class="home">
    <div class="links-margin t-left">
      <router-link to='/home'>首页</router-link>
      <router-link to='/test'>test页</router-link>
    </div>
    <h1>FLV &nbsp; <FLIcon type='travel'/></h1>
    <h2 class='home-hi'><Spin size="large" fix/> hello, world ! </h2>
    <p class="home-text"><Icon type='ionic' /> &nbsp; &nbsp;welcome! Fire Leaf Vue Scaffold !</p>
  </div>
</template>

<script>
  import { FLIcon } from 'components';

  export default {
    name: 'Home',
    components: {
      FLIcon
    }
  };
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';

  .home {
    text-align: center;
    .links-margin {
      a {
        font-size: 16px;
        margin-right: 16px;
      }
    }
    .home-hi {
      position: relative;
      font-size: 30px;
      padding-top: 12%;
      color: @flv-warn-color;
    }
    .home-text {
      font-size: 16px;
      color: @flv-default-color;
    }
  }
</style>

