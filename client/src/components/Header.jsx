import React from "react";
import brandName from "../assets/brand-name.png";

const Header = () => {
  return (
    <div className="pl-12 bg-white mt-10 mb-20 w-full">
      <img src={brandName} alt="" width={160} />
    </div>
  );
};

export default Header;
