"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2 w-full", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative flex w-fit mx-auto gap-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-1",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 whitespace-nowrap",
        "data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500/80 data-[state=active]:to-cyan-400/80 data-[state=active]:text-white data-[state=active]:shadow-md",
        "data-[state=inactive]:text-slate-900 data-[state=inactive]:hover:text-cyan-600 data-[state=inactive]:hover:bg-white/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
