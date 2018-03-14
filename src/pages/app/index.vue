<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <Body><router-view></router-view></Body>
      <Footer />
    </div>    
  </div>  
</template>
<script>
  import Header from './header/';
  import Body from './body/';
  import Footer from './footer/';

  export default {
    name: 'App',
    components: {
      Header,
      Body,
      Footer
    }
  };
</script>

<style lang="less" >
  @import '~utils/style/common.less';
  .wrapper {
    animation: wrapper--fade .25s cubic-bezier(.455,.03,.515,.955);
    min-height: 100vh;
    width: 100%;
    display:-webkit-flex;
    display:flex;
    -webkit-flex-direction:column;
    flex-direction:column;
    display: flex;
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