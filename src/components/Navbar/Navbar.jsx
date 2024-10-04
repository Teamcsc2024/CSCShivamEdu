import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import CSCShivam from"../../assets/CSCshivam.png";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
          <motion.img
            src={CSCShivam}
            alt=""
            className="w-[400px] md:w-[200px] xl:w-[250px]"
          />
           {/* <MdComputer className="text-3xl text-secondary" /> 
            <p>CSCShivamEducation</p>*/}
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
            <li className="cursor pointer group relative">
            <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              </li>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-5 py-1 ">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
