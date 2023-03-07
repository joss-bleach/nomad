import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";

// Assets
import logo from "../assets/Nomad-Horizontal-Orange.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileQuery = window.matchMedia("(max-width: 734px)");
  const [mobileMenu, setMobileMenu] = useState(
    mobileQuery.matches ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (mobileQuery.matches) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const disableBodyScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScrolling = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (setMobileMenuOpen) {
      disableBodyScrolling();
    } else {
      enableBodyScrolling();
    }

    return () => {
      enableBodyScrolling();
    };
  }, [setMobileMenuOpen]);

  if (mobileMenu === true) {
    return (
      <>
        <header className="relative z-50 h-20 w-full border-b border-nomad-light-grey">
          <div className="flex h-full flex-row items-center justify-between px-5 xl:mx-5 xl:px-20">
            <div className="box-border w-1/3 md:w-1/2">
              <div
                style={{ backgroundImage: `url(${logo})` }}
                className="h-14 w-32 bg-contain bg-left bg-no-repeat"
              />
            </div>
            <div
              aria-label="Open navigation menu"
              role="button"
              className="relative h-6 w-8 -translate-y-0.5 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className={
                  mobileMenuOpen
                    ? "block h-1 w-full translate-y-3.5 rotate-45 rounded bg-nomad-orange transition"
                    : "block h-1 w-full rounded bg-nomad-orange transition"
                }
              ></span>
              <span
                className={
                  mobileMenuOpen
                    ? "my-2 block h-1 w-full rounded bg-nomad-orange opacity-0 transition"
                    : "my-2 block h-1 w-full rounded bg-nomad-orange opacity-100 transition"
                }
              ></span>
              <span
                className={
                  mobileMenuOpen
                    ? "block h-1 w-full -translate-y-2.5 -rotate-45 rounded bg-nomad-orange transition"
                    : "block h-1 w-full rounded bg-nomad-orange transition"
                }
              ></span>
            </div>
          </div>
        </header>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="fixed z-40 flex h-screen w-screen bg-white py-28"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex w-full flex-col px-6">
                <li className="border-nomad-light grey flex items-center justify-between border-b py-4 text-xl font-medium text-nomad-orange">
                  Home
                  <FaCaretRight className="text-2xl text-nomad-orange" />
                </li>
                <li className="border-nomad-light grey flex items-center justify-between border-b py-4 text-xl font-medium text-nomad-orange">
                  Explore
                  <FaCaretRight className="text-2xl text-nomad-orange" />
                </li>
                <li className="border-nomad-light grey flex items-center justify-between border-b py-4 text-xl font-medium text-nomad-orange">
                  List your home
                  <FaCaretRight className="text-2xl text-nomad-orange" />
                </li>
                <li className="border-nomad-light grey flex items-center justify-between border-b py-4 text-xl font-medium text-nomad-orange">
                  About
                  <FaCaretRight className="text-2xl text-nomad-orange" />
                </li>
                <li className="border-nomad-light grey flex items-center justify-between border-b py-4 text-xl font-medium text-nomad-orange">
                  Profile
                  <FaCaretRight className="text-2xl text-nomad-orange" />
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    );
  } else {
    return (
      <header className="h-20 w-full border-b border-nomad-light-grey">
        <nav className="flex h-full flex-row items-center justify-between px-5 xl:mx-5 xl:px-20">
          <div className="box-border w-1/3 md:w-1/2">
            <div
              style={{ backgroundImage: `url(${logo})` }}
              className="h-14 w-32 bg-contain bg-left bg-no-repeat"
            />
          </div>
          <div className="box-border flex w-2/3 justify-center md:w-1/2">
            <ul className="flex flex-row items-center space-x-4 lg:space-x-6 xl:space-x-12">
              <li className="relative inline-block cursor-pointer text-nomad-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:rounded after:bg-nomad-blue after:transition after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100">
                Explore
              </li>
              <li className="relative inline-block cursor-pointer text-nomad-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:rounded after:bg-nomad-blue after:transition after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100">
                List your home
              </li>
              <li className="relative inline-block cursor-pointer text-nomad-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:rounded after:bg-nomad-blue after:transition after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100">
                About
              </li>
              <li className="rounded bg-nomad-orange px-4 py-2 text-white">
                Log in
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
};

export default Navbar;
