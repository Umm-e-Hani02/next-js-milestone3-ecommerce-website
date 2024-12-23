import Link from "next/link";
import { ShoppingCart, Search, Menu, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="max-width-[1440px] h-16 items-center flex">
      {/* Navbar For Full Screens */}
      <div className="hidden max-w-[1440px] md:flex items-center justify-around w-full mx-auto z-30">
        <div>
          <h3 className="text-[#252B42] font-bold text-2xl">Quickcart</h3>
        </div>

        <div className="flex gap-x-5 font-semibold text-gray-600 items-center">
          <div>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/aboutus"
              className="hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </div>
          <div>
            <Link href="/products" className="hover:underline hover:underline-offset-4">
              Products
            </Link>
          </div>
          <div className="relative group">
            {/* Dropdown Trigger */}
            <span className="flex items-center cursor-pointer">
              Category <ChevronDown className="h-5" />
            </span>

            {/* Dropdown Menu */}
            <div className="absolute w-24 mt-2 hidden flex-col bg-white shadow-md group-hover:flex group-active:flex">
              <Link
                href="/men"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Men
              </Link>
              <Link
                href="/women"
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Women
              </Link>
            </div>
          </div>
          <div>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex hover:cursor-pointer gap-x-2 text-blue-600 hover:text-blue-700">
          <p className="font-semibold flex items-center gap-x-1">
            <FontAwesomeIcon icon={faUser} className="h-5" fill="white" /> Login
            / Register
          </p>
          <Search />
          <ShoppingCart />
        </div>
      </div>

      {/* Responsive Navbar */}
      <div className="w-full h-16 items-center flex md:hidden md:justify-between">
        <div className="flex items-center w-full justify-center gap-x-24">
          <div>
            <h3 className="text-[#252B42] font-bold text-2xl">Quickcart</h3>
          </div>

          <div className="flex hover:cursor-pointer gap-x-2 text-[#252B42] items-center text-nowrap">
            <Search />
            <ShoppingCart />

            {/* Hamburger */}
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>

              <SheetContent>
                <div className="flex flex-col gap-y-5 mt-7">
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Home
                  </Link>

                  <Link
                    href="/aboutus"
                    className="hover:underline hover:underline-offset-4"
                  >
                    About
                  </Link>

                  <Link
                    href="/products"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Products
                  </Link>

                  <div className="relative group">
                    {/* Dropdown Trigger */}
                    <span className="flex items-center cursor-pointer">
                      Category <ChevronDown className="h-5" />
                    </span>

                    {/* Dropdown Menu */}
                    <div className="absolute w-24 mt-2 hidden flex-col bg-white shadow-md group-hover:flex">
                      <Link
                        href="/men"
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Men
                      </Link>
                      <Link
                        href="/women"
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Women
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Contact
                  </Link>

                  <p className="font-semibold flex gap-x-1 text-[#252B42]">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="h-5"
                      fill="white"
                    />
                    Login / Register
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
