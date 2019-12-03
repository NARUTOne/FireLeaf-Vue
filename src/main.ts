import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "@/utils/xhr.config";

import "@/style/index.scss";

import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Avatar,

  Row,
  Col,
  Timeline,
  TimelineItem,
  Card,
  Tag,

  Form,
  FormItem,
  Input,
  Button,

  Message,
  Dialog,

  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,

  Loading,
  BackTop
} from "element-ui";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

// 按需引用 element 组件
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Avatar.name, Avatar);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Message.name, Message);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);
Vue.component(BackTop.name, BackTop);

Vue.use(Loading.directive);
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
