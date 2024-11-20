'use client'

import Link from "next/link"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io"

import { useState } from "react"
import CartSidebar from "./CartSideBar"
import { useCart } from "@/context/CartContext"
export default function Header() {
  const { cart } = useCart()
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false)

  const handleCartToggle = () => {
    setIsMobileCartOpen(!isMobileCartOpen)
  }

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
              <div className="h-[48px] md:w-[414px] w-full pl-1 pr-5 py-[10px] flex items-center gap-2 bg-[#ffffff] rounded-[6px]">
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
              className="sm:hidden text-white hover:text-opacity-80 border-white hover:border-white relative"
              onClick={handleCartToggle}
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>
        </nav>
      </div>
      {/* Mobile Cart Modal */}
      {isMobileCartOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-white p-4 overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-[#47663B] text-lg font-bold"
            onClick={handleCartToggle}
          >
            Close
          </button>
          <div className="mt-10">
            <CartSidebar />
          </div>
        </div>
      )}
    </header>
  )
}