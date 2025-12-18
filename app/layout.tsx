import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import HireMeCTA from "@/components/molecules/HireMeCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Kadiri Portfolio",
  description:
    "Portfolio website showcasing Emmanuel Kadiri's work, skills, and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <div className="hidden fixed right-[20px] bottom-0 md:block lg:right-[40px] z-[997]">
            <HireMeCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
