import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NextAuthProvider from "@/components/providers/nextauth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InVent IMS",
  description:
    "A Free to Use Inventory Management System for all those who are still using excel sheets on their local systems to manage the database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>{children}</NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
