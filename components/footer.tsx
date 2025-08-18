"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Palette,
  Mail,
  Phone,
  MapPin,
  Github,
  Briefcase,
  DollarSign,
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Design-DeveloperHub",
      hoverColor: "hover:text-white",
    },
    {
      icon: DollarSign,
      label: "Fiverr",
      href: "https://www.fiverr.com/designdevhub/",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: Briefcase,
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01b58dcdef9b0276bd?mp_source=share",
      hoverColor: "hover:text-blue-400",
    },
  ];

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 dark:bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-4 lg:px-5 xl:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-blue-400" />
              <Palette className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">Design And Developer</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              We create stunning digital experiences that combine beautiful
              design with powerful development. Let us bring your vision to
              life.
            </p>

            {/* Desktop Social Links - with hover titles */}
            <div className="hidden lg:flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 dark:text-gray-500 ${social.hoverColor} transition-colors relative group`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  {/* Hover tooltip for desktop */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile Social Links - with visible labels */}
            <div className="flex lg:hidden flex-col space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 dark:text-gray-500 ${social.hoverColor} transition-all duration-300 flex items-center space-x-3`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "Discord"].map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 5, y: -2 }}>
                    <Link
                      href="#"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors w-fit"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 lg:space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 dark:text-gray-500">
                  designdeveloph@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 dark:text-gray-500">
                  +92 311 8311848
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 dark:text-gray-500">
                  Pakistan, Karachi
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 dark:border-gray-700 mt-6 pt-8 text-center text-gray-400 dark:text-gray-500"
        >
          <p> Design And Developer Hub</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
