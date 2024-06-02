import React from "react";

const Footer = () => {
  return (
    <div className=" flex absolute bottom-0 text-sm justify-between p-2 bg-[#E9F3FB] w-full">
      {" "}
      <div className="pl-4">2023, Copyright all rights reserved by PLSE</div>
      <div className="text-[#7874DF]">
        <ul className="flex gap-8 pr-8 ">
          <li className="hover:cursor-pointer">Facebook</li>
          <li className="hover:cursor-pointer">Google</li>
          <li className="hover:cursor-pointer">Twitter</li>
          <li className="hover:cursor-pointer">Google</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
