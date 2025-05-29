import { Home, KeyRound, Notebook, Settings, SquareLibrary, SquarePen } from "lucide-react";

export const links = [
  {
    title: "home",
    href: "/",
    icon: Home,
  },
  {
    title: "services",
    href: "/services",
    icon: Settings,
  },
  {
    title: "work",
    href: "/work",
    icon: Notebook,
  },
  {
    title: "about",
    href: "/about",
    icon: SquareLibrary,
  },
  {
    title: "contact",
    href: "/contact",
    icon: SquarePen,
  },
];

export const authLinks = [
  {
    title: "login",
    href: "/login",
    icon: KeyRound,
    auth: false,
  },
  {
    title: "dashboard",
    href: "/dashboard",
    icon: KeyRound,
    auth: true,
  },
];
