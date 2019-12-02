<template>
  <Header class="fly-header clear-float">
    <div class="left"></div>
    <div class="left">
      <slot></slot>
    </div>
    <div class="right"></div>
  </Header>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

  @Component({})
  export default class FHeader extends Vue {
    @Prop(Boolean)
    public mobile:boolean;

    private isMobile: boolean = false;

    @Watch("mobile")
    private onMobile (bol: boolean) {
      this.isMobile = bol;
    }

    mounted () {
      this.onMobile(this.mobile);
    }
  }
</script>

<style lang="scss" scoped>

</style>
