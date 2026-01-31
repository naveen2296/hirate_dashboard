import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiRATE Dashboard | Performance Analytics",
  description: "HiRATE Dashboard - Comprehensive infrastructure performance monitoring and analytics platform for FY 25-26",
  keywords: ["HiRATE", "Dashboard", "Performance", "Analytics", "Infrastructure", "Cube Highways"],
  authors: [{ name: "Cube Highways Technologies" }],
  icons: {
    icon: [
      { url: "/logo-star.png", type: "image/png" },
    ],
    shortcut: "/logo-star.png",
    apple: "/logo-star.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
