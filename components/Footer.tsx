import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#47663B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About My Recipe App</h3>
            <p className="text-sm opacity-80">
              We&apos;re passionate about bringing delicious recipes to your
              kitchen. Explore, cook, or place an order!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                  All Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to get the latest recipes and cooking tips.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className=" h-[48px] flex-grow placeholder:text-[#47663B] bg-white  text-gray-900 placeholder-gray-500 border-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="bg-white h-[48px]  text-[#47663B] hover:bg-[#47663B] hover:text-[#ffffff] hover:border-2 hover:border-[#ffffff] focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} MyRecipe App. Chinwe Nwankwo.
          </p>
        </div>
      </div>
    </footer>
  );
}
