"use client";
import { mockOrders, statusColor } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Page = () => {
  const session = useSession();
  const router = useRouter();

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (session.status === "loading") return;
    if (!session?.data?.user) {
      router.push("/");
    }
  }, [session.status, session, router]);

  if (session.status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const filteredOrders =
    filter === "All"
      ? mockOrders
      : mockOrders.filter((order) => order.status === filter);

  return (
    <div className=" mt-20 p-6  min-h-screen bg-zinc-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Pizza Orders</h1>

      <div className="mb-4 flex flex-wrap gap-2">
        {["All", "Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={cn(
              "px-4 py-1 rounded-full text-sm font-medium border",
              filter === status
                ? "bg-cyan-600 text-white border-cyan-600"
                : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
            )}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-zinc-700">
          <thead className="bg-zinc-800 text-zinc-300">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Pizza Type</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Order Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t border-zinc-700">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.pizza}</td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">
                  <span className={cn("px-2 py-1 rounded-full text-xs font-semibold", statusColor[order.status as keyof typeof statusColor])}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOrders.length === 0 && (
        <div className="mt-4 text-center text-zinc-400">No orders found.</div>
      )}
    </div>
  );
};

export default Page;
