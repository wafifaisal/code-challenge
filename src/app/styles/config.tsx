import { usePathname } from "next/navigation";

import {
  Amphora,
  Bell,
  BookHeart,
  Briefcase,
  Cat,
  Cherry,
  Dessert,
  EyeClosed,
  Flower,
  Flower2,
  Home,
  Origami,
  Settings,
  User,
} from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Flower bundle",
      href: "/products",
      icon: <Flower size={20} />,
      active: pathname === "/products",
      position: "top",
    },
    {
      name: "Flowers",
      href: "/products/flowers",
      icon: <Flower2 size={20} />,
      active: isNavItemActive(pathname, "/flowers"),
      position: "top",
    },

    {
      name: "Charms",
      href: "/products/charms",
      icon: <Cherry size={20} />,
      active: isNavItemActive(pathname, "/charms"),
      position: "top",
    },
    {
      name: "Stuffed Animal",
      href: "/products/stuffedanimal",
      icon: <Cat size={20} />,
      active: isNavItemActive(pathname, "/stuffedanimal"),
      position: "top",
    },
    {
      name: "Bags",
      href: "/products/bags",
      icon: <EyeClosed size={20} />,
      active: isNavItemActive(pathname, "/bags"),
      position: "top",
    },

    {
      name: "Make your own bundle",
      href: "/customize",
      icon: <Amphora size={20} />,
      active: isNavItemActive(pathname, "/customize"),
      position: "top",
    },
    {
      name: "Home",
      href: "/",
      icon: <Home size={20} />,
      active: isNavItemActive(pathname, "/"),
      position: "bottom",
    },
    {
      name: "About Us",
      href: "/about",
      icon: <BookHeart size={20} />,
      active: isNavItemActive(pathname, "/about"),
      position: "bottom",
    },
  ];
};
