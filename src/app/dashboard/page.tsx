"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const Page = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session.status==="loading") return;
    if (!session.data?.user) {
      router.push("/");
    }
  }, [session, router]);

  if(session.status==="loading"){
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="h-screen">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Hello, {session?.data?.user?.name}
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
         Welcome to the pizzeria! Now, press the <strong>Pizza-Orders</strong> button in the navbar to view all your pizza orders.
        </p>
      </BackgroundLines>
    </div>
  );
};

export default Page;
