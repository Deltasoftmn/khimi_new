"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Introduction", href: "/" },
    { name: "Advantages", href: "/advantages" },
    { name: "Equipment & Products", href: "/products" },
    { name: "Company History", href: "/history" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 w-full ">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative flex items-center justify-between -top-5 h-25 px-20 bg-[url('/header_background.png')] bg-cover bg-center bg-no-repeat rounded-[2rem] shadow-inner overflow-hidden">
          {/* Logo and Tagline Area */}
          <div className="flex items-center gap-6 z-10">
            <Link href="/" className="z-10 pl-6">
              <Image src="/logo.png" alt="Khimi Consulting Logo" width={120} height={40} className="w-auto h-10 object-contain" priority />
            </Link>
            
            <div className="hidden md:block pl-12 z-10">
              <p className="text-white/90 text-sm font-medium leading-tight max-w-[300px]">
                Reliable Chemical Solutions
                <br />
                for Mining & Industry in Mongolia
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 z-10">
            <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                      isActive
                        ? "bg-[#2ecc71] text-white shadow-md border border-[#27ae60]"
                        : "text-zinc-200 hover:text-white border border-transparent hover:border-white/20"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Language Switcher */}
            <button className="ml-2 px-3 py-1.5 rounded-full bg-[#1b5e20] text-white font-medium hover:bg-[#2e7d32] transition-colors flex items-center gap-1.5 shadow-md border border-[#4caf50]">
              <Globe className="w-4 h-4 text-[#81c784]" />
              <span className="text-sm">EN/MN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
