"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
const SidebarComponent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full h-screen flex">
      <div
        className={`flex flex-1 flex-col ${
          isCollapsed ? "w-20" : "w-64"
        } transition-width duration-300`}
      >
        <header className="md:hidden">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <List className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <div className="text-base md:text-lg font-semibold ">
                Menu Umbrella Health
              </div>
            </div>
          </Sheet>
        </header>

        <main className="flex-1 p-3 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default SidebarComponent;
