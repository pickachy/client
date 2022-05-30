export interface Breadcrumb {
  label: string;
  link: string;
}
export interface Breadcrumbs {
  crumbs: Breadcrumb[];
  lastCrumbName: string;
}
