/**
 * 导航数据
 */

export interface INavs {
  icon: string;
  title: string;
  href: string;
  name: string;
  children?: Array<INavs>;
}

export const NAVS_LIST: INavs[] = [
  {
    icon: "",
    title: "文章",
    href: "/blog/articles",
    name: "articles"
  },
  {
    icon: "",
    title: "项目",
    href: "/blog/project",
    name: "project"
  },
  {
    icon: "",
    title: "归档",
    href: "/blog/log",
    name: "log"
  },
  {
    icon: "",
    title: "历程",
    href: "/blog/timeLine",
    name: "timeLine"
  },
  {
    icon: "",
    title: "关于",
    href: "/blog/about",
    name: "about"
  }
];
