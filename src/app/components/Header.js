"use client";

import { useContext, useEffect, useState } from "react";

// Next Image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// components
import SearchMobile from "./SearchMobile";

// media Query hook
import { useMediaQuery } from "react-responsive";

// react icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

// search context
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const dekstopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div
        className="xl:container lg:container mx-auto flex flex-col xl:flex-row xl:items-center
    xl:justify-between lg:items-center lg:justify-between lg:flex-row"
      >
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link
            to="home"
            smooth={dekstopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo.svg"}
              height={64}
              width={194}
              alt="car logo"
            />
          </Link>
          {/* nav open manue */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer lg:hidden md:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 lg:py-0 lg:px-0"
              : "max-h-0 xl:max-h-max lg:max-h-max"
          } flex flex-col bg-white gap-y-6 overflow-hidden
         font-bold xl:font-medium lg:font-medium xl:flex-row lg:flex-row xl:w-max lg:w-max
         xl:gap-x-8 lg:gap-x-6 xl:h-max lg:h-max xl:bg-transparent lg:bg-transparent
         xl:pb-0 lg:pb-0 transition-all duration-150 text-center xl:text-left lg:text-left
         uppercase text-sm xl:text-[15px] lg:text-[15px] xl:normal-case lg:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden lg:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
