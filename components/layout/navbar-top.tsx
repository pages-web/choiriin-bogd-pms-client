import { Link } from "@/i18n/routing";
import Image from "../ui/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export async function NavbarTop({ children }: { children?: React.ReactNode }) {
  const leftMenuItems = [
    { href: "/accommodation", label: "Accommodation" },
    { href: "/events", label: "Events" },
    { href: "/dining", label: "Dining" },
    { href: "/wellness", label: "Wellness" },
  ];

  const rightMenuItems = [
    { href: "/offers", label: "Offers" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/account", label: "Account" },
  ];

  return (
    <header className="z-50 sticky top-0 w-full bg-white border-b">
      <div className="hidden md:flex justify-between items-center container mx-auto py-3 px-4 relative">
        <nav className="flex gap-6">
          {leftMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="text-black font-normal text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" aria-label="Homepage" className="flex justify-center">
            <Image
              src="/images/logo.png"
              height={40}
              width={40}
              alt="Logo"
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="flex gap-6">
          {rightMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="text-black font-normal text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-6 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-xl font-semibold text-black">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              {[...leftMenuItems, ...rightMenuItems].map((item) => (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="text-black text-base font-medium hover:underline"
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" aria-label="Homepage">
          <Image
            src="/images/logo.png"
            height={40}
            width={40}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        <div style={{ width: "24px" }} /> {/* Balance space for icon */}
      </div>
    </header>
  );
}
