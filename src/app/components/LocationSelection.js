"use client";

import { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

// location data
const locations = [
  "Main Street 123, United States",
  "Business Avenue 456, Canada",
  "Park Road 789, United Kindom",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row lg:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button
          className="dropdown-btn w-full h-full flex flex-col justify-center items-center
      xl:items-start lg:items-start xl:pl-8 lg:pl-10"
        >
          <div
            className="w-full h-16 xl:h-full lg:h-full flex justify-center
         xl:justify-start lg:justify-start xl:border-r lg:border-r xl:border-black/10
         lg:border-black/10"
          >
            <div className="flex flex-col justify-center">
              <div
                className="flex flex-col xl:flex-row lg:flex-row items-center xl:gap-x-2
           lg:gap-x-2"
              >
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] font-bold uppercase">
                  Select Location
                </div>
              </div>
              <div
                className="uppercase font-medium text-[13px] text-secondary text-center
           xl:ml-6 lg:ml-6 xl:text-left lg:text-left"
              >
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* item */}
        <Menu.Items
          className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] lg:top-[90px] 
     left-1/2 xl:left-0 lg:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0
     lg:translate-x-0 text-sm text-center xl:text-left lg:text-left w-full bg-white
     max-w-[332px] py-6 rounded-[10px]"
        >
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={index}
                className="cursor-pointer py-4 xl:pl-10 lg:pl-10 hover:bg-gray-50 text-[13px]
        uppercase"
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
