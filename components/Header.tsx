"use client";
"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";



export default function Header() {
  return (
    <header className="bg-[#47663B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="ml-2 text-2xl font-semibold">
              Recipe App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-opacity-80"
            >
              Categories
            </Link>
            <form className="hidden sm:flex items-center">
              <div className="h-[48px] md:w-[414px] w-full pl-1 pr-5 py-[10px] flex items-center gap-2 bg-[#ffffff] rounded-[6px] ">
                <Input
                  placeholder="Search"
                  type="text"
                  className="border-none placeholder:text-lg placeholder:text-[#47663B] placeholder:font-medium"
                />
                <IoIosSearch className="w-8 h-8 text-[#47663B]" />
              </div>
            </form>
            <Button
              variant="outline"
              size="icon"
              className="text-white hover:text-opacity-80 border-white hover:border-white"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            {/* For mobile menu
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden text-white hover:text-opacity-80 border-white hover:border-white"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#47663B] text-white"
              >
                <DropdownMenuItem asChild>
                  <Link href="/recipes" className="hover:bg-[#c0601f] w-full">
                    Recipes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/categories"
                    className="hover:bg-[#c0601f] w-full"
                  >
                    Categories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="hover:bg-[#c0601f] w-full">
                    About
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>*/}
          </div>
        </nav>
      </div>
    </header>
  );
}
