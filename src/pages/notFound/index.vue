<template>
  <div class="not-found">
    <h1>
       404
    </h1>
    <p className='warn-color not-dev-info'>您访问的页面暂未开发，敬请期待</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style lang="less" scoped>
  .not-found {
    padding-top: 150px;
    text-align: center;
    min-height: 80vh;
    h1 {
      margin: 0;
      font-size: 100px;
    }
  }
</style>


