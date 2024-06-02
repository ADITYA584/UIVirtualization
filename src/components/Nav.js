import React from "react";
import ChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import { Link, Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = () => {
  return (
    <div className="text-white h-[50%] ">
      <div className="flex flex-col gap-7">
        <Link className="outline-none" to="/">
          <h1 className="text-4xl font-extrabold">PLSE</h1>
        </Link>

        <ul className="flex flex-col gap-6 text-sm">
          <li className="p-2 rounded-md hover:bg-[#FFFFFF40] hover:cursor-pointer">
            <ChartIcon /> Charts
          </li>
          <Link to="/Tables">
            <li className="p-2 rounded-md hover:bg-[#FFFFFF40]">
              <TableChartIcon /> Tables
            </li>
          </Link>

          <li className="p-2 rounded-md hover:bg-[#FFFFFF40]  hover:cursor-pointer">
            <SummarizeIcon /> Reports
          </li>
          <li className="p-2 rounded-md hover:bg-[#FFFFFF40]  hover:cursor-pointer">
            <BatchPredictionIcon />
            Forecast
          </li>
        </ul>
      </div>
      <div className="flex items-end h-full ">
        <ul className="w-full">
          <li>
            <div className="">
              <p className="bg-[#ffffff50] p-2 rounded-md mb-2 ">
                Abhishek Lohia
                <br />
                <span className="text-sm">User</span>
              </p>
            </div>
          </li>
          <li>
            <p className="bg-[#ffffff50] p-2 rounded-md ">
              <LogoutIcon /> Logout
            </p>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
