"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 md:space-x-2"
          >
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-between pr-4 w-full">
                {/* On mobile: Code icon on left, brand in center, Palette icon on right */}
                <div className="md:hidden flex items-center space-x-2 sm:space-x-2">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-sm sm:text-lg font-bold bg-gradient-to-br from-blue-100 to-indigo-800 bg-clip-text text-transparent">
                    Design And Developer Hub
                  </span>
                  <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>

                {/* On desktop: Code and Palette icons together, then brand name */}
                <div className="hidden md:flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Code className="h-6 w-4 lg:w-8 text-blue-600" />
                    <Palette className="h-6 w-4 lg:w-8 text-purple-600" />
                  </div>
                  <span className="text-lg lg:text-xl font-bold bg-gradient-to-br from-blue-100 to-indigo-800 bg-clip-text text-transparent">
                    Design And Developer Hub
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative">
                <motion.span
                  className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 1 }}
                >
                  {item.label}
                </motion.span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.upwork.com/freelancers/~01b58dcdef9b0276bd?mp_source=share"
                target="_blank"
                className="p-2 rounded-md bg-gradient-to-r dark:from-blue-300 from-blue-400 dark:to-purple-800 to-blue-300 dark:hover:from-blue-700 hover:from-blue-400 dark:via-indigo-600 dark:hover:to-purple-200 hover:to-indigo-400"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-0 pl-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-4 h-4 sm:w-10 sm:h-10 flex flex-col justify-center items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {/* Custom hamburger icon with animations */}
              <motion.span  
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block w-4 h-0.5 bg-current mb-1.5 origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? -10 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block w-4 h-0.5 bg-current mb-1.5"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block w-4 h-0.5 bg-current origin-center"
              />

              {/* Ripple effect on click */}
              <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={
                  isOpen
                    ? { scale: 1.5, opacity: 0 }
                    : { scale: 0, opacity: 0.5 }
                }
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-blue-600/20 rounded-full"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block flex justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 dark:text-blue-400 font-medium"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex justify-center"
                >
                  <ThemeToggle />
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                >
                  <Link
                    href="https://www.fiverr.com/designdevhub/"
                    target="_blank"
                    className="p-2 rounded-md flex justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
