import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colorado Winter Blog",
  description: "A simple, fast blog featuring fun things to do in Colorado during winter and Christmas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}> 
        <header className="border-b border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-lg">Colorado Winter Blog</a>
            <nav className="flex gap-4 text-sm">
              <a className="hover:underline" href="/">Home</a>
              <a className="hover:underline" href="/blog/colorado-winter-christmas">Winter Guide</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-black/70 dark:text-white/70">
            © {new Date().getFullYear()} Colorado Winter Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
