export interface IBreadcrumbItemType {
  title: string;
  href?: string;
  add?: { title: string; href?: string };
  detail?: { title: string; href?: string };
  history?: { title: string; href?: string };
}