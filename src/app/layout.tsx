import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#121212" />
      </head>
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
