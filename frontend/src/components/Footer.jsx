import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#ea9216] text-white text-center">
      &copy; {new Date().getFullYear()} DonateIt. All rights reserved.
    </footer>
  );
};

export default Footer;
