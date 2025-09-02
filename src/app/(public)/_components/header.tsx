"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LogIn } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const session = null;

  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          className="bg-transparent hover:bg-transparent  text-black shadow-none"
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2"
        >
          <Button className="ml-4">Acessar Painel</Button>
        </Link>
      ) : (
        <Link href="/login">
          <Button className="ml-4 cursor-pointer">
            <LogIn />
            Fazer Login
          </Button>
        </Link>
      )}
    </>
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          SaaS Pro
        </Link>
        <nav className="hidden md:flex items-center">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-transparent"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-[9999] p-3"
          >
            <SheetTitle>Menu</SheetTitle>
            <SheetHeader></SheetHeader>
            <SheetDescription>Veja Nossos Links</SheetDescription>
            <nav>
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
