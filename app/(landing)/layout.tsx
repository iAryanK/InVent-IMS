import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NextAuthProvider from "@/components/providers/nextauth-provider";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

const inter = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>
            <Navigation />
            {children}
            <Footer />
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
