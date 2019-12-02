<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { enquireScreen, unenquireScreen } from "enquire-js";

@Component({})
export default class App extends Vue {
  private enquireHandler: any = null;
  mounted(): void {
    this.enquireHandler = enquireScreen((mobile:Boolean) => {
      if (mobile) {
        var width = window.screen.width;
        window.document.getElementsByTagName("html")[0].style.fontSize =
          width / 7.5 + "px";
      }
    });
  }
  destroyed(): void {
    unenquireScreen(this.enquireHandler);
  }
}
</script>

<style lang="scss"></style>
