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
      return pathname === nav; // Exact match for the root or products page
    }

    // For subcategories (e.g., /products/bundle), match if the pathname starts with nav
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
      name: "Flower bundle",
      href: "/products/bundle",
      icon: <Flower size={20} />,
      active: isNavItemActive(pathname, "/products/bundle"),
      position: "top",
    },
    {
      name: "Flowers",
      href: "/products/flowers",
      icon: <Flower2 size={20} />,
      active: isNavItemActive(pathname, "/products/flowers"),
      position: "top",
    },
    {
      name: "Charms",
      href: "/products/charms",
      icon: <Cherry size={20} />,
      active: isNavItemActive(pathname, "/products/charms"),
      position: "top",
    },
    {
      name: "Stuffed Animal",
      href: "/products/stuffedanimal",
      icon: <Cat size={20} />,
      active: isNavItemActive(pathname, "/products/stuffedanimal"),
      position: "top",
    },
    {
      name: "Bags",
      href: "/products/bags",
      icon: <EyeClosed size={20} />,
      active: isNavItemActive(pathname, "/products/categoy/bags"),
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
