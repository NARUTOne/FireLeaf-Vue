<template>
  <div class="fly-nav">
    <template v-if="isMobile">
      <el-dropdown>
        <i class="el-icon-menu"></i>
        <template slot="dropdown">
          <NavMenu 
            mode="vertical"
            :dataSource="data"
            :theme="navTheme"
            @onSelect="handleSelect"
            @onOpen="handleOpen"
            @onClose="handleClose"
          />
        </template>
    </template>
    <template v-else>
      <NavMenu 
        :dataSource="data"
        :mode="mode"
        :theme="navTheme"
        @onSelect="handleSelect"
        @onOpen="handleOpen"
        @onClose="handleClose"
      />
    </template>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
  import NavMenu from "./NavMenu.vue";
  import {INavs} from "@/mock/nav";

  @Component({
    components: {
      NavMenu
    }
  })
  export default class Nav extends Vue {
    @Prop(Boolean)
    public mobile:boolean;
    @Prop({
      type: String,
      default: "vertical"
    })
    public mode:string;
    @Prop({
      type: Array,
      default: () => [],
      required: true
    })
    public dataSource:INavs[];
    @Prop({
      type: String,
      default: "light"
    })
    public theme:string;

    private isMobile: boolean = false;
    private data:Array<INavs> = [];
    private navTheme:string = "";

    @Watch("mobile")
    private onMobile (bol: boolean) {
      this.isMobile = bol;
    }
    @Watch('dataSource', {
      deep: true
    })
    private onDataSourceChange (data:Array<INavs>) {
      this.data = data;
    }
    @Watch("theme")
    private setTheme (theme: string) {
      this.navTheme = theme || "light";
    }
  
    mounted () {
      this.onMobile(this.mobile);
      this.onDataSourceChange(this.dataSource);
      this.setTheme(this.theme);
    }

    @Emit('onSelect')
    private handleSelect (index:string) {
      if (index.indexOf('/') < 0) {
        this.$router.push({name: index});
      } else {
        this.$router.push(index);
      }
    }

    @Emit('onOpen')
    private handleOpen (index:string, indexPath: string[]) {}

    @Emit('onClose')
    private handleClose (index:string, indexPath: string[]) {}

  }
</script>

<style scoped>

</style>