<template>
  <div class="fly-home">
    <div class="home-body">
      <div class="home-logo">
        <Logo size="100" :url="logoUrl"></Logo>
      </div>
      <div class="home-nav">
        <Nav mode="horizontal" :dataSource="navs" ></Nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo/index.vue"; // @ is an alias to /src
import Nav from "@/components/Nav/index.vue";
import logoImg from "../../assets/lufei.jpg";
import {NAVS_LIST, INavs} from "@/mock/nav";

@Component({
  components: {
    Logo,
    Nav
  }
})
export default class Home extends Vue {
  private logoUrl: string = "";
  private navs: INavs[] = [];

  mounted () {
    this.logoUrl = logoImg;
    this.navs = NAVS_LIST;
  }
}
</script>

<style lang="scss" scoped>
  
</style>
