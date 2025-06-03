"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { AppThemeToggleButton } from "./AppThemeToggleButton";
import { Github } from "lucide-react";
import { Button } from "../ui/button";

export function AppNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b px-4 py-2">
      <div className="flex items-center">
        <LeftNav />
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/install">Install</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/converter">Split Converter</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs">Documentation</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center">
        <RightNav />
      </div>
    </nav>
  );
}

function LeftNav() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="logo.svg" width={32} height={32} alt="LibreSplit" />
      <span className="text-xl font-semibold">LibreSplit</span>
    </Link>
  );
}

function RightNav() {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <Link href="https://github.com/wins1ey/LibreSplit">
          <Github />
        </Link>
      </Button>
      <AppThemeToggleButton />
    </div>
  );
}
