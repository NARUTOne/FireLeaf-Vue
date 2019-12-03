<template>
  <Avatar 
    shape="circle"
    fit="fill"
    icon="el-icon-user-solid"
    :size="imgSize"
    :src="imgUrl"
  ></Avatar>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from 'vue-property-decorator';

  @Component({})
  export default class Logo extends Vue{
    @Prop(String)
    public url:string;
    @Prop({
      type: [String, Number],
      default: "100"
    })
    public size:string|number;

    private imgUrl:string = "";
    private imgSize:string|number = "50";

    @Watch("url")
    private onUrl (url: string) {
      this.imgUrl = url;
    }
    @Watch('size')
    private onSizeChange (size:string|number) {
      this.imgSize = size;
    }

    mounted () {
      this.onUrl(this.url);
      this.onSizeChange(this.size);
    }
  }
</script>

<style scoped>

</style>