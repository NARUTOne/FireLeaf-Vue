<template>
  <Header class="fly-header clear-float">
    <div class="left">
      <router-link to="/"><Logo :url="logoUrl"></Logo></router-link>
    </div>
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="header-right"></slot>
      <Logo size="30"></Logo>
      <LoginBox></LoginBox>
    </div>
  </Header>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
  import Logo from "../Logo/index.vue";
  import LoginBox from "../LoginBox/index.vue";
  import logoImg from "../../assets/lufei.jpg";

  @Component({
    components: {
      Logo,
      LoginBox
    }
  })
  export default class FHeader extends Vue {
    @Prop(Boolean)
    public mobile:boolean;

    private isMobile: boolean = false;
    private logoUrl: string = "";

    @Watch("mobile")
    private onMobile (bol: boolean) {
      this.isMobile = bol;
    }

    mounted () {
      this.onMobile(this.mobile);
      this.logoUrl = logoImg;
    }
  }
</script>

<style lang="scss" scoped>

</style>
