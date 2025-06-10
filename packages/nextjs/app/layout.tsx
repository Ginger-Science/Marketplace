import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import React from "react";
import AdminNavigation from "../components/AdminNavigation";

export const metadata = getMetadata({
  title: "Admin: Global Sun Survey",
  description: "Ginger Science",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            <div style={{ display: "flex", minHeight: "100vh" }}>
              <AdminNavigation />
              <main style={{ flexGrow: 1, padding: "1rem" }}>
                {children}
              </main>
            </div>
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
