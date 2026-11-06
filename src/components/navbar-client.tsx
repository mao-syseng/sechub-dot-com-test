"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2 text-lg font-semibold">
            <img src="/favicon.svg" alt="SEC-Hub" className="h-8 w-8" />
            <span className="hidden sm:inline">RDS 81346</span>
          </a>

          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="h-9 w-max px-2.5 py-1.5 font-medium">
                    ISO/IEC 81346
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Software</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink href="#">SEC-Hub</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">RDS 81346 App</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="h-9 w-max px-2.5 py-1.5 font-medium">
                    Free Material
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Knowledge Center</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink href="#">RDS 81346 Ontology</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Videos</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Why RDS 81346</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">Articles</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="#">FAQ</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="h-9 w-max px-2.5 py-1.5 font-medium">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <nav id="mobile-navigation" className="border-t border-border/40 pb-2 lg:hidden">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium hover:bg-muted"
            >
              ISO/IEC 81346
            </a>
            <details className="group">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium hover:bg-muted">
                Software
              </summary>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                SEC-Hub
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                RDS 81346 App
              </a>
            </details>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium hover:bg-muted"
            >
              Free Material
            </a>
            <details className="group">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium hover:bg-muted">
                Knowledge Center
              </summary>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                RDS 81346 Ontology
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                Videos
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                Why RDS 81346
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                Articles
              </a>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-sm hover:bg-muted"
              >
                FAQ
              </a>
            </details>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium hover:bg-muted"
            >
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
