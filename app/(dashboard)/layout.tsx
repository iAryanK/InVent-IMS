import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NextAuthProvider from "@/components/providers/nextauth-provider";
import Sidebar from "@/components/dashboard/Sidebar";
import Infobar from "@/components/dashboard/Infobar";
import NextTopLoader from "nextjs-toploader";

const inter = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InVent IMS",
  description:
    "A Free to Use Inventory Management System for all those who are still using excel sheets on their local systems to manage the database.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>
            <NextTopLoader showSpinner={false} color="#FFAC1C" />
            <div className="flex">
              <Sidebar />
              <section className="flex min-h-screen flex-1 flex-col ">
                <Infobar />
                {children}
              </section>
            </div>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
