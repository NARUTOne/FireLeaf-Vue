<template>
  <Footer>
    Copyright©{{year}}Corporation All Rights Reserved
  </Footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FFooter extends Vue {
  private year: number = 2019;

  mounted ():void {
    this.year = new Date().getFullYear();
  }
}
</script>

<style scoped="scss">
.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>