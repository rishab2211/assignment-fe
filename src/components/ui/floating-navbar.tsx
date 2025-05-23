"use client";
import React, { JSX } from "react";
import { cn } from "@/lib/utils";
import { Space_Mono } from "next/font/google";
import { signOut } from "next-auth/react";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};



export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex max-w-fit  fixed top-5 sm:top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-neutral-900 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 px-4  items-center justify-center space-x-5 ",
        className
      )}
    >
      {navItems.map((navItem: NavItem, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ${spaceMono.className}`}
        >
          <span className="text-sm">{navItem.name}</span>
        </a>
      ))}
      <button onClick={()=>signOut()} className="border cursor-pointer text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>Logout</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </div>
  );
};
