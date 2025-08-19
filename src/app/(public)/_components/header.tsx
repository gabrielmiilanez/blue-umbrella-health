import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          SaaS Pro
        </Link>
        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
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
            className="w-[240px] sm:w-[300px] z-[9999]"
          >
            <SheetTitle>Menu</SheetTitle>
            <SheetHeader></SheetHeader>
            <SheetDescription>Veja Nossos Links</SheetDescription>
            <nav>
              <a href="#">Profissionais</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
