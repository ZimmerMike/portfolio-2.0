import { MenuItem, PrimeIcons } from "primeng/api";

export class SidebarConstants {
  public static readonly SIDEBAR_ITEMS: MenuItem[] = [
    {
      label: 'SIDEBAR.ME',
      icon: PrimeIcons.USER,
      routerLink: 'me/about'
    },
    {
      label: 'SIDEBAR.PROJECTS',
      icon: PrimeIcons.CODE,
      routerLink: 'me/projects'
    },
    {
      label: 'SIDEBAR.EXPERIENCE',
      icon: PrimeIcons.BRIEFCASE,
      routerLink: 'me/experience'
    },
    {
      label: 'SIDEBAR.EDUCATION',
      icon: PrimeIcons.BOOK,
      routerLink: 'me/education'
    },
    {
      label: 'SIDEBAR.CERTIFICATIONS',
      icon: PrimeIcons.CHECK_CIRCLE,
      routerLink: 'me/certifications'
    },
    {
      label: 'SIDEBAR.CONTACT',
      icon: PrimeIcons.ENVELOPE,
      routerLink: 'me/contact'
    }
  ];
}