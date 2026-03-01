import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Complaint Intelligence System",
  description: "AI-powered Hostel Grievance Urgency Classification & Routing System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased min-h-screen bg-slate-950 text-slate-50`}>
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center px-4 max-w-7xl">
            <div className="flex w-full justify-between items-center">
              <a href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight text-slate-50">
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">ComplaintAI</span>
              </a>
              <nav className="flex items-center space-x-8 text-sm font-medium">
                <a href="/submit" className="text-slate-300 transition-colors hover:text-indigo-400">Submit Issue</a>
                <a href="/admin" className="text-slate-300 transition-colors hover:text-indigo-400">Admin Portal</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
