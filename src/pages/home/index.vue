<template>
  <div class="home">
    <h2 class='home-hi'><Spin size="large" fix/> hello, world ! </h2>
    <p class="home-text"><Icon type='ionic' /> &nbsp; &nbsp;welcome! Fire Leaf Vue Scaffold !</p>
  </div>
</template>

<script>
  import { Icon, Spin } from 'iview';

  export default {
    name: 'Home',
    components: {
      Icon,
      Spin
    }
  };
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';

  .home {
    text-align: center;
    padding-top: 16%;
    .home-hi {
      position: relative;
      font-size: 30px;
      color: @warn-color;
    }
    .home-text {
      font-size: 16px;
      color: @default-color;
    }
  }
</style>

