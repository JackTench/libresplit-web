"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Github } from "lucide-react";

export function AppNav() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home Button - Logo and Text */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="logo.svg"
                    width={32}
                    height={32}
                    alt="LibreSplit"
                  />
                  <span className="text-xl">LibreSplit</span>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/install">
                <div>Install</div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/converter">
                <div>Split Converter</div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs">
                <div>Documentation</div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="https://github.com/wins1ey/LibreSplit">
                <Github />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
