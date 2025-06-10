// app/research/layout.tsx
import React from 'react';

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      

      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
}
