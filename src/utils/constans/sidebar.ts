import { IBreadcrumbItemType } from "../interfaces/layout";

export const SIDEBAR_ITEM_KEY: { [x: string]: string } = {
  home: "home",
};

export const SIDEBAR_ITEM_HREF: { [x: string]: string } = {
  home: "/",
};

export const BREADCRUMB_ITEM: { [x: string]: IBreadcrumbItemType } = {
  [SIDEBAR_ITEM_KEY.home]: {
    title: "layout.sidebar.home",
    href: SIDEBAR_ITEM_HREF.home,
  },
}