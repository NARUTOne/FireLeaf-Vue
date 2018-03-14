<template>
  <div class="body">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Body'
  };
</script>

<style lang="less" scoped>
  .body {
    display: flex;
    flex-direction: column;
    -webkit-flex-grow:1;
				flex-grow:1;
    padding: 8px;
  }
</style>


