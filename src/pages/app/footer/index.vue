<template>
  <div class="footer">
    <footer>Copyright©2017 systemName Corporation All Rights Reserved</footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';
  .footer {
    padding: 10px;
    line-height: 23px;
    text-align: center;
    color: @footer-text-color;
    background-color: @footer-bg;
  }
</style>


