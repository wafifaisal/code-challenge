import Link from "next/link";
import { NavItems } from "@/app/styles/config";

export default function Navigation() {
  const navItems = NavItems();

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center p-2 rounded-md transition-colors ${
                item.active ? "bg-gray-500 text-white" : "text-gray-600"
              }`} // Active link with bg and text color, inactive link with gray text
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
