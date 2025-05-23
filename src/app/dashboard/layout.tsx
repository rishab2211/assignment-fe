import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const navItems = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Pizza-Orders",
      link: "/dashboard/orders",
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} />
      {children}
    </div>
  );
};

export default layout;
