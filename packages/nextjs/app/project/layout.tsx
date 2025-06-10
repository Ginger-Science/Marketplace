
// app/project/layout.tsx
import React from "react";
import SidebarNavigation from "../../components/SidebarNavigation";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      <aside className="w-64 bg-base-200 p-4 shadow-md hidden md:block">
        <SidebarNavigation />
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
