<template>
  <el-menu 
    :mode="mode"
    unique-opened
    :default-active="activeName"
    :default-openeds="openNames"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="atextColor"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose">
    <template v-for="(item, i) in data">
      <el-submenu v-if="item.children && item.children.length" :index="item.name">
        <template slot="title">
          <i :class="item.icon || 'el-icon-menu'"></i>
          <span>{{item.title}}</span>
        </template>
      </el-submenu>
      <el-menu-item :index="item.name" v-else>{{item.title}}</el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
  import {INavs} from "@/mock/nav";

  @Component
  export default class NavMenu extends Vue {
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
    public theme:string

    private data:Array<INavs> = [];
    private activeName:string = "";
    private openNames:Array<string> = [];
    private backgroundColor:string = "#fff";
    private textColor:string = "#333";
    private atextColor:string = "#409EFF";

    @Watch('dataSource', {
      deep: true
    })
    private onDataSourceChange (data:Array<INavs>) {
      this.data = data;
    }
    @Watch("theme")
    private setTheme () {
      if (this.theme = "dark") {
        this.backgroundColor = "#081225";
        this.textColor = "#fff";
        this.atextColor = "#409EFF";
      } else {
        this.backgroundColor = "#fff";
        this.textColor = "#333";
        this.atextColor = "#409EFF";
      }
    }
    @Watch("$route")
    private setMenuName () {
      const {name, matched} = this.$route;
      // console.log(this.$route.matched);
      const openName = matched[1].name || "";
			
      this.activeName = name || "";
      this.openNames = [openName];
    }

    mounted () {
      this.onDataSourceChange(this.dataSource);
      this.setMenuName();
      this.setTheme();
    }

    @Emit('onSelect')
    private handleSelect (index:string) {
      this.activeName = index;
    }

    @Emit('onOpen')
    private handleOpen (index:string, indexPath: string[]) {
      this.openNames = indexPath;
    }

    @Emit('onClose')
    private handleClose (index:string, indexPath: string[]) {
      this.openNames = indexPath;
    }

  }
</script>

<style scoped>

</style>