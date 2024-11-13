import { usePathname } from "next/navigation";
import {
  Amphora,
  BookHeart,
  Cat,
  Cherry,
  EyeClosed,
  Flower,
  Flower2,
  Home,
  ShoppingCart,
} from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    // Match exact path for root or top-level links (e.g., "/products", "/")
    if (nav === "/" || nav === "/products") {
      return pathname === nav;
    }

    // For subcategories (e.g., /products/category/flowers), match if the pathname starts with nav
    return pathname.startsWith(nav);
  }

  return [
    {
      name: "All Products",
      href: "/products",
      icon: <ShoppingCart size={20} />,
      active: isNavItemActive(pathname, "/products"),
      position: "top",
    },
    {
      name: "Flower Bundle",
      href: "/products/category/bundle",
      icon: <Flower size={20} />,
      active: isNavItemActive(pathname, "/products/category/bundle"),
      position: "top",
    },
    {
      name: "Flowers",
      href: "/products/category/flowers",
      icon: <Flower2 size={20} />,
      active: isNavItemActive(pathname, "/products/category/flowers"),
      position: "top",
    },
    {
      name: "Charms",
      href: "/products/category/charms",
      icon: <Cherry size={20} />,
      active: isNavItemActive(pathname, "/products/category/charms"),
      position: "top",
    },
    {
      name: "Stuffed Animal",
      href: "/products/category/Stuffed%20Animal",
      icon: <Cat size={20} />,
      active: isNavItemActive(pathname, "/products/category/Stuffed%20Animal"),
      position: "top",
    },
    {
      name: "Bags",
      href: "/products/category/bags",
      icon: <EyeClosed size={20} />,
      active: isNavItemActive(pathname, "/products/category/bags"),
      position: "top",
    },
    {
      name: "Make Your Own Bundle",
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
