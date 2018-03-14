<template>
  <header class="header">
    <router-link to='/' class='header-logo'>
      system name
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data: () => {
      return {}
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
  }
</style>


