import React from "react";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="p-10  flex flex-col items-center gap-8 ">
      <h1 className="text-3xl font-bold underline">
        Instructions to use the application
      </h1>
      <div className=" text-lg w-[50%] font-semibold">
        <ol className="list-[upper-roman]">
          <li>React Router is implemented.</li>
          <li>This is the Landing page.</li>
          <li>
            Please Vist the{" "}
            <span className="text-blue-500 font-bold">"Table"</span> section
            from the Navbar ON THE LEFT for the main application
          </li>
          <li>Thank you for visiting.</li>
          <li>
            Click on <span className="text-blue-500 font-bold">"PLSE"</span> to
            go back on the Landing Page.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
