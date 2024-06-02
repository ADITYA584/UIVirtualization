import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarsDataset from "../components/BarChart";
import Footer from "../components/Footer";
import Vtable from "../components/MUIVtable";
import CustomizedTables from "../components/Table";

const MainApp = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between px-4 w-full  text-[0.7rem] font-semibold">
        <ul className="flex gap-1 items-center">
          <li className="border-2 p-1 shadow-md">Summary</li>
          <li className="border-2 p-1 shadow-md">Balance Sheet</li>
          <li className="border-2 p-1 shadow-md">Income Statement</li>
          <li className="border-2 p-1 shadow-md">CashFlow</li>
        </ul>

        <ul className="flex items-center">
          <li className="border-2 p-1 shadow-md">Normal view</li>
          <li className="border-2 p-1 shadow-md">Growth view</li>
          <li className="flex border-2 p-1 shadow-md">
            <p>Period from </p>
            <CalendarMonthIcon fontSize="small" />
          </li>
          <li className="flex gap-1 border-2 p-1 shadow-md">
            <p>Period to </p>
            <CalendarMonthIcon fontSize="small" />
          </li>
        </ul>
      </div>
      <div className="w-full">
        <BarsDataset />
      </div>
      <div className="">
        <Vtable />
        {/* <CustomizedTables /> */}
      </div>
    </div>
  );
};

export default MainApp;
