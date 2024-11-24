"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const home = "/";
  const service = "/service";
  const about = "/about";
  const karyawan = "/karyawan";
  const contact = "/contact";

  const [menu, setMenu] = useState(true);
  const NavbarMobile = () => {
    return (
      <div className="relative">
        <button className="btn m-1" onClick={() => setMenu((prev) => !prev)}>
          {menu ? <RxHamburgerMenu /> : <MdOutlineClose />}
        </button>

        {/* Dropdown Menu */}
        {!menu && (
          <nav className="absolute z-50 dropdown-content w-52 bg-slate-200 mx-2 rounded p-2">
            <ul className="grid grid-cols-1 gap-2 text-sm px-2">
              <li className={`  transition-all duration-300 ease-in-out ${pathname === home ? "bg-main-primary " : "hover:bg-main-accent"}`}>
                <a href={home} className="px-5 text-ml text-textColor-primary font-semibold block py-2">
                  Home
                </a>
              </li>
              <li className={`transition-all duration-300 ease-in-out ${pathname === about ? "bg-main-primary" : "hover:bg-main-accent"}`}>
                <a href={about} className="px-5 text-ml text-textColor-primary font-semibold block py-2">
                  About
                </a>
              </li>
              <li className={`transition-all duration-300 ease-in-out ${pathname === contact ? "bg-main-primary" : "hover:bg-main-accent"}`}>
                <a href={contact} className="px-5 text-ml text-textColor-primary font-semibold block py-2">
                  Contact
                </a>
              </li>
              <li className={`transition-all duration-300 ease-in-out ${pathname === karyawan ? "bg-main-primary" : "hover:bg-main-accent"}`}>
                <a href={karyawan} className="px-5 text-ml text-textColor-primary font-semibold block py-2">
                Karyawan
                </a>
              </li>
              <li className={`transition-all duration-300 ease-in-out ${pathname === service ? "bg-main-primary" : "hover:bg-main-accent"}`}>
                <a href={service} className="px-5 text-ml text-textColor-primary font-semibold block py-2">
                Service
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  };

  const Navbar = () => {
    return (
      <nav>
        <div className="lg:flex lg:relative px-3 items-center">
          <ul className=" grid grid-cols-5 lg:flex h-fit">
            <li className={`transition-all text-center duration-300 ease-in-out ${pathname === home ? "bg-main-primary" : "hover:bg-main-accent"}`}>
              <a href={home} className=" px-5 text-ml text-textColor-primary font-semibold block py-3 ">
                Home
              </a>
            </li>
            <li className={`transition-all text-center duration-300 ease-in-out ${pathname === about ? "bg-main-primary" : "hover:bg-main-accent"}`}>
              <a href={about} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
                About
              </a>
            </li>
            <li className={`transition-all text-center duration-300 ease-in-out ${pathname === contact ? "bg-main-primary" : "hover:bg-main-accent"}`}>
              <a href={contact} className="px-5 text-ml text-textColor-primary font-semibold block py-3">
                Contact
              </a>
            </li>
            <li className={`transition-all text-center duration-300 ease-in-out ${pathname === karyawan ? "bg-main-primary" : "hover:bg-main-accent"}`}>
              <a href={karyawan} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
                Karyawan
              </a>
            </li>
            <li className={`transition-all text-center duration-300 ease-in-out ${pathname === service ? "bg-main-primary" : "hover:bg-main-accent"}`}>
              <a href={service} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
              Service
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  return (
    <header className="w-full container h-full">
      <div className="shadow-lg">
        <div className="px-6 justify-center items-center lg:justify-start flex md:flex-row flex-col item-center">
          <Link href="/" className="py-[22px] text-2xl font-bold text-main-primary">
            RoyCleaner
          </Link>
        </div>
      </div>
      <hr className="border-main-primary border-[3px]" />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
