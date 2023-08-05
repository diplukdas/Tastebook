import React from "react";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "..";

const Menu = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <>
      {!isCollapsed && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          className="block md:hidden h-screen fixed top-0 right-0 backdrop-blur-sm bg-[#fffefbde] z-30 p-6"
        >
          {/* Menu button */}
          <FiMenu
            className="block md:hidden text-xl cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          {/* Navbar links */}
          <ul className="flex flex-col gap-10 items-center mt-8">
            <li>
              <NavLink
                to={"/"}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/recipe"}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
              >
                Contact
              </NavLink>
            </li>
            <li className="w-full">
              <Link to={"/auth/signin"}>
                <Button
                  content={"Sign In"}
                  customCss={"w-full gap-4 rounded-full flex-row-reverse"}
                  icon={<FiLogIn />}
                />
              </Link>
            </li>
          </ul>
        </motion.aside>
      )}
    </>
  );
};

export default Menu;