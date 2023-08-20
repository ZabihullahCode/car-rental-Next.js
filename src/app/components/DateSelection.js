"use client";

import { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

// react date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// react date range css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row lg:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button
          className="dropdown-btn w-full h-full flex flex-col justify-center items-center
      xl:items-start lg:items-start xl:pl-8 lg:pl-10"
        >
          <div
            className="flex flex-col xl:flex-row lg:flex-row items-center xl:gap-x-2
           lg:gap-x-2"
          >
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] font-bold uppercase">Select Date</div>
          </div>
          <div className='flex items-center gap-x-3 xl:ml-6 lg:ml-6'>
            <div className='text-[13px] font-medium text-secondary'>
              {format(date[0].startDate, "dd/MM/yyyy")}</div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className='text-[13px] font-medium text-secondary'>
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>
        {/* menu */}
        <Menu.Items
          className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] lg:top-[90px] 
     left-1/2 xl:left-0 lg:left-0 z-50 transform -translate-x-1/2 xl:translate-x-0
     lg:translate-x-0 rounded-[10px] overflow-hidden"
        >
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
}