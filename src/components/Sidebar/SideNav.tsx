"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Sidebar/ui/tooltip";
import { NavItems } from "@/app/styles/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SideNav() {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("sidebarExpanded");
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "sidebarExpanded",
        JSON.stringify(isSidebarExpanded)
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="pr-4">
      <div
        className={cn(
          isSidebarExpanded ? "w-[200px] sm:w-[200px]" : "w-[68px] sm:w-[68px]",
          "border-r transition-all duration-300 ease-in-out flex h-full bg-accent"
        )}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
          {/* Brand Section */}
          <div className="flex items-center space-x-2 my-4 transition-transform transform duration-300 group">
            <Image
              src="/download.png"
              alt="Brand Logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            {isSidebarExpanded && (
              <span className="text-lg font-bold text-[rgb(153,107,83)] relative">
                <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                  FLÉUR
                  <div className="h-[1px] bg-[rgb(153,107,83)]"></div>
                </span>
                <h2 className="absolute left-0 right-0 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[13px] text-[rgb(153,107,83)]">
                  Products
                </h2>
              </span>
            )}
          </div>

          {/* Top Navigation Items */}
          <div className="mt-4 relative pb-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                if (item.position === "top") {
                  return (
                    <Fragment key={idx}>
                      <div className="space-y-1">
                        <SideNavItem
                          label={item.name}
                          icon={item.icon}
                          path={item.href}
                          active={item.active}
                          isSidebarExpanded={isSidebarExpanded}
                        />
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          <hr className="border-t border-neutral-300 my-4" />

          {/* Bottom Navigation Items */}
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
            {navItems.map((item, idx) => {
              if (item.position === "bottom") {
                return (
                  <Fragment key={idx}>
                    <div className="space-y-1">
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        {/* Sidebar toggle button */}
        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-8 w-8 items-center justify-center border rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out z-20 bg-[#AB886D] sm:block hidden"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={20} className="stroke-foreground text-black" />
            ) : (
              <ChevronRight
                size={20}
                className="stroke-foreground text-black"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
            active
              ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 "
              : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 "
          }`}
        >
          <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <TooltipProvider delayDuration={70}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                  active
                    ? "font-base text-sm bg-neutral-200 text-neutral-700 "
                    : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 "
                }`}
              >
                <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                  {icon}
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="px-3 py-1.5 text-xs"
              sideOffset={10}
            >
              <span>{label}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};
